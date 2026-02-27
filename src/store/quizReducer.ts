import { questions } from "../data/questions";
import type { QuizState, Action } from "../types/quiz";
import { loadQuestionStats } from "../lib/storage";

export const TIMER_DURATION = 30;
export const QUIZ_SIZE = 5;
export const MASTERY_THRESHOLD = 3;

// Partial Fisher-Yates shuffle: swap specific number of random picks to the front, then slice.
// only iterates as many times as questions we need.
function pickRandomQuestions() {
  const masteredIds = new Set(getMasteredQuestions());
  const pool = [...questions];
  let end = pool.length - 1;

  for (let i = 0; i < QUIZ_SIZE && i <= end; i++) {
    // j is a random index from the unpicked remainder (from i to pool.length-1)
    const j = i + Math.floor(Math.random() * (pool.length - i));

    // has is better than includes because it's O(1) instead of O(n)
    if (questions.length - masteredIds.size > QUIZ_SIZE && masteredIds.has(pool[j].id)) {
      // Exile this question to beyond `end` so it's never picked again
      [pool[j], pool[end]] = [pool[end], pool[j]];
      end--;
      i--;
      continue;
    }
    // Swap the elements at index i and j
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, QUIZ_SIZE);
}

// Returns questions the user has answered correctly at least MASTERY_THRESHOLD times.
function getMasteredQuestions() {
  const stats = loadQuestionStats();
  return Object.keys(stats).reduce((acc, q) => {
    if (stats[Number(q)]?.correct >= MASTERY_THRESHOLD) {
      acc.push(Number(q));
    }
    return acc;
  }, [] as number[]);
}

export const initialState: QuizState = {
  screen: "start",
  currentIndex: 0,
  score: 0,
  userAnswers: Array(QUIZ_SIZE).fill(null),
  isAnswered: false,
  reflectionVisible: false,
  timeLeft: TIMER_DURATION,
  quizQuestions: [],
};

export function quizReducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case "START_QUIZ": {
      const quizQuestions = pickRandomQuestions();
      return {
        ...initialState,
        screen: "quiz",
        quizQuestions,
        userAnswers: Array(QUIZ_SIZE).fill(null),
      };
    }

    case "SELECT_ANSWER": {
      if (state.isAnswered) return state;
      const correct =
        action.payload ===
        state.quizQuestions[state.currentIndex].correctAnswer;
      const next = [...state.userAnswers];
      next[state.currentIndex] = action.payload;
      return {
        ...state,
        isAnswered: true,
        reflectionVisible: true,
        score: correct ? state.score + 1 : state.score,
        userAnswers: next,
      };
    }

    case "TICK":
      if (state.isAnswered || state.timeLeft <= 0) return state;
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "TIMEOUT": {
      if (state.isAnswered) return state;
      const next = [...state.userAnswers];
      next[state.currentIndex] = null;
      return {
        ...state,
        isAnswered: true,
        reflectionVisible: true,
        userAnswers: next,
      };
    }

    case "NEXT_QUESTION": {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= QUIZ_SIZE) return { ...state, screen: "results" };

      return {
        ...state,
        currentIndex: nextIndex,
        isAnswered: false,
        reflectionVisible: false,
        timeLeft: TIMER_DURATION,
      };
    }

    case "RESTART":
      return initialState;

    default:
      return state;
  }
}

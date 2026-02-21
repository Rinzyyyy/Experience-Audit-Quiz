import { questions } from '../data/questions';
import type { QuizState, Action } from '../types/quiz';

export const TIMER_DURATION = 30;

export const initialState: QuizState = {
  screen: 'start',
  currentIndex: 0,
  score: 0,
  userAnswers: Array(questions.length).fill(null),
  isAnswered: false,
  reflectionVisible: false,
  timeLeft: TIMER_DURATION,
};

export function quizReducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...initialState, screen: 'quiz' };

    case 'SELECT_ANSWER': {
      if (state.isAnswered) return state;
      const correct = action.payload === questions[state.currentIndex].correctAnswer;
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

    case 'TICK':
      if (state.isAnswered || state.timeLeft <= 0) return state;
      return { ...state, timeLeft: state.timeLeft - 1 };

    case 'TIMEOUT': {
      if (state.isAnswered) return state;
      const next = [...state.userAnswers];
      next[state.currentIndex] = null;
      return { ...state, isAnswered: true, reflectionVisible: false, userAnswers: next };
    }

    case 'NEXT_QUESTION': {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= questions.length) return { ...state, screen: 'results' };
      return {
        ...state,
        currentIndex: nextIndex,
        isAnswered: false,
        reflectionVisible: false,
        timeLeft: TIMER_DURATION,
      };
    }

    case 'RESTART':
      return initialState;

    default:
      return state;
  }
}

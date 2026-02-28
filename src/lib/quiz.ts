import type { Question } from "../data/questions";

export const QUIZ_SIZE = 5;
export const MASTERY_THRESHOLD = 3;
export const TIMER_DURATION = 30;

// Partial Fisher-Yates shuffle: swap specific number of random picks to the front, then slice.
// only iterates as many times as questions we need.
export function pickRandomQuestions(questions: Question[]) {
  const pool = [...questions];
  const quizSize = Math.min(QUIZ_SIZE, pool.length);
  for (let i = 0; i < quizSize; i++) {
    // j is a random index from the unpicked remainder (from i to pool.length-1)
    const j = i + Math.floor(Math.random() * (pool.length - i));
    // Swap the elements at index i and j
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, quizSize);
}

import type { Question } from '../data/questions';

export type Screen = 'start' | 'quiz' | 'results';

export interface QuizState {
  screen: Screen;
  currentIndex: number;
  score: number;
  userAnswers: (string | null)[];
  isAnswered: boolean;
  reflectionVisible: boolean;
  timeLeft: number;
  quizQuestions: Question[];
}

export type Action =
  | { type: 'START_QUIZ' }
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'TICK' }
  | { type: 'TIMEOUT' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESTART' };

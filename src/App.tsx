import { useReducer, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { quizReducer, initialState } from './store/quizReducer';
import { useQuizTimer } from './hooks/useQuizTimer';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';

export default function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useQuizTimer(state, dispatch);

  const handleStart = useCallback(() => dispatch({ type: 'START_QUIZ' }), []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {state.screen === 'start' && (
          <StartScreen key="start" onStart={handleStart} />
        )}
        {state.screen === 'quiz' && (
          <QuizScreen key={`quiz-${state.currentIndex}`} state={state} dispatch={dispatch} />
        )}
        {state.screen === 'results' && (
          <ResultsScreen key="results" state={state} dispatch={dispatch} />
        )}
      </AnimatePresence>
    </div>
  );
}

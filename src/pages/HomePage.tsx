import { useReducer, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { BarChart2 } from 'lucide-react';
import { quizReducer, initialState } from '../store/quizReducer';
import { useQuizTimer } from '../hooks/useQuizTimer';
import { StartScreen } from '../components/StartScreen';
import { QuizScreen } from '../components/QuizScreen';
import { ResultsScreen } from '../components/ResultsScreen';
import { saveRecord, updateQuestionStats } from '../lib/storage';


export function HomePage() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const savedRef = useRef(false);

  useQuizTimer(state, dispatch);

  const handleStart = useCallback(() => {
    savedRef.current = false;
    dispatch({ type: 'START_QUIZ' });
  }, []);

  useEffect(() => {
    if (state.screen === 'results' && !savedRef.current) {
      savedRef.current = true;
      
      saveRecord({
        date: new Date().toISOString(),
        total: state.quizQuestions.length,
        correct: state.score,
      });
      updateQuestionStats(
        state.quizQuestions.map((q, i) => ({
          id: q.id,
          correct: state.userAnswers[i] === q.correctAnswer,
        })),
      );
    }
  }, [state.screen]);


  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12">
      <Link
        to="/stats"
        className="fixed top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-xs font-semibold tracking-wide"
      >
        <BarChart2 className="w-3.5 h-3.5" />
        Stats
      </Link>
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

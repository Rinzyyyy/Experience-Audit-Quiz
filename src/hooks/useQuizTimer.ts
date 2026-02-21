import { useEffect, useRef } from 'react';
import type { QuizState, Action } from '../types/quiz';

export function useQuizTimer(
  state: QuizState,
  dispatch: React.Dispatch<Action>,
) {
  const dispatchRef = useRef(dispatch);

  useEffect(() => {
    dispatchRef.current = dispatch;
  });

  useEffect(() => {
    if (state.screen !== 'quiz' || state.isAnswered) return;

    if (state.timeLeft <= 0) {
      dispatchRef.current({ type: 'TIMEOUT' });
      return;
    }

    const id = setInterval(() => dispatchRef.current({ type: 'TICK' }), 1000);
    return () => clearInterval(id);
  }, [state.screen, state.isAnswered, state.timeLeft]);
}

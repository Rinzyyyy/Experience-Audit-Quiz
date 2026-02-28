import { useState, useMemo } from "react";
import type { Question } from "../data/questions";
import {
  loadQuizProgress,
  saveProgress,
  type QuizProgressMap,
} from "../lib/storage";
import { questions as allQuestions } from "../data/questions";
import { MASTERY_THRESHOLD } from "../lib/quiz";

export function useQuizManager() {
  const [progress, setProgress] = useState<QuizProgressMap>(loadQuizProgress);

  const { newBucket, learningBucket, masteredBucket } = useMemo(() => {
    const newBucket: Question[] = [];
    const learningBucket: Question[] = [];
    const masteredBucket: Question[] = [];

    for (const question of allQuestions) {
      const count = progress[question.id]?.correct ?? 0;
      if (count === 0) {
        newBucket.push(question);
      } else if (count < MASTERY_THRESHOLD) {
        learningBucket.push(question);
      } else {
        masteredBucket.push(question);
      }
    }

    return { newBucket, learningBucket, masteredBucket };
  }, [progress]);

  const activePool = useMemo(
    () => [...newBucket, ...learningBucket],
    [newBucket, learningBucket],
  );

  function updateProgress(answers: { id: number; correct: boolean }[]): void {
    setProgress((prev) => {
      const next = { ...prev };
      for (const { id, correct } of answers) {
        const entry = next[id] ?? { correct: 0, incorrect: 0 };
        next[id] = {
          correct: entry.correct + (correct ? 1 : 0),
          incorrect: entry.incorrect + (correct ? 0 : 1),
        };
      }
      saveProgress(next);
      return next;
    });
  }

  return {
    progress,
    newBucket,
    learningBucket,
    masteredBucket,
    activePool,
    updateProgress,
  };
}

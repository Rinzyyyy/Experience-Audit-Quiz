import { motion, AnimatePresence } from "motion/react";
import { Clock, Lightbulb } from "lucide-react";
import { cardVariants } from "../lib/motion";
import type { QuizState, Action } from "../types/quiz";
import { OptionButton } from "./OptionButton";
import { TimerRing } from "./TimerRing";
import { NextButton } from "./NextButton";

interface QuizScreenProps {
  state: QuizState;
  dispatch: React.Dispatch<Action>;
}

export function QuizScreen({ state, dispatch }: QuizScreenProps) {
  const {
    currentIndex,
    isAnswered,
    reflectionVisible,
    timeLeft,
    userAnswers,
    quizQuestions,
  } = state;
  const question = quizQuestions[currentIndex];
  const isLastQuestion = currentIndex === quizQuestions.length - 1;
  const progressPercent = ((currentIndex + 1) / quizQuestions.length) * 100;
  const isTimedOut = isAnswered && userAnswers[currentIndex] === null;

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-xl bg-mist-800/50 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden"
    >
      {/* Progress bar */}
      <div className="h-1 bg-stone-700">
        <motion.div
          className="h-full bg-indigo-300"
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Question
            </span>
            <span className="text-xs font-bold text-indigo-300">
              {currentIndex + 1}
              <span className="text-slate-600"> / {quizQuestions.length}</span>
            </span>
          </div>
          <TimerRing timeLeft={timeLeft} />
        </div>

        {/* tag */}
        <div className="flex items-center mb-2 w-fit border border-indigo-300/30 rounded-full py-1 px-2">
          <span className="text-[10px] text-slate-400">
            {question.id}-{question.tag}
          </span>
        </div>

        {/* Question text */}
        <motion.h2
          key={`q-${currentIndex}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-slate-300 leading-snug mb-6"
        >
          {question.question}
        </motion.h2>

        {/* Options */}
        <div className="space-y-2.5 mb-6">
          {question.options.map((option, i) => (
            <OptionButton
              key={option}
              index={i}
              option={option}
              isAnswered={isAnswered}
              isSelected={userAnswers[currentIndex] === option}
              isCorrect={option === question.correctAnswer}
              onClick={() =>
                dispatch({ type: "SELECT_ANSWER", payload: option })
              }
            />
          ))}
        </div>

        {/* Timeout notice — shown when time ran out */}
        <AnimatePresence>
          {isTimedOut && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 flex items-center gap-3 mb-4"
            >
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <p className="text-slate-400 text-sm">
                Time's up — the correct answer is highlighted above.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Personal reflection — slides in after answering */}
        <AnimatePresence>
          {reflectionVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-4"
            >
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
                    Personal Reflection
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{question.personalReflection}"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next / Finish button */}
        <AnimatePresence>
          {isAnswered && (
            <NextButton
              isLastQuestion={isLastQuestion}
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

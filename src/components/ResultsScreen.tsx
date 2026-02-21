import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, RotateCcw, XCircle } from 'lucide-react';
import { questions } from '../data/questions';
import { cardVariants, fadeUp } from '../lib/motion';
import type { QuizState, Action } from '../types/quiz';

interface ResultsScreenProps {
  state: QuizState;
  dispatch: React.Dispatch<Action>;
}

function gradeFor(percent: number) {
  if (percent >= 80)
    return { label: 'Expert Practitioner', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' };
  if (percent >= 60)
    return { label: 'Emerging Leader', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' };
  return { label: 'Developing Awareness', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' };
}

export function ResultsScreen({ state, dispatch }: ResultsScreenProps) {
  const { score, userAnswers } = state;
  const total = questions.length;
  const percent = Math.round((score / total) * 100);
  const grade = gradeFor(percent);

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden"
    >
      {/* Score hero */}
      <div className="bg-slate-900/60 px-8 pt-8 pb-6 border-b border-slate-700/50">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Audit Complete
          </span>
        </motion.div>

        <motion.div variants={fadeUp} initial="initial" animate="animate">
          <div className="flex items-end gap-3 mb-3">
            <span className="text-7xl font-black text-white tabular-nums leading-none">{score}</span>
            <span className="text-2xl font-light text-slate-500 mb-2">/ {total}</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${grade.bg}`}>
            <span className={grade.color}>{grade.label}</span>
            <span className="text-slate-500">· {percent}%</span>
          </div>
        </motion.div>
      </div>

      {/* Review list */}
      <div className="px-8 py-6">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
          Audit Review
        </p>

        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          {questions.map((q, i) => {
            const answered = userAnswers[i];
            const isCorrect = answered === q.correctAnswer;
            const timedOut = answered === null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.07 + 0.3 } }}
                className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {timedOut ? (
                      <Clock className="w-4 h-4 text-slate-500" />
                    ) : isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-xs leading-snug mb-2 font-medium">{q.question}</p>
                    <p className="text-xs text-emerald-400/80">
                      <span className="text-slate-500">Correct: </span>
                      {q.correctAnswer}
                    </p>
                    {!isCorrect && answered && (
                      <p className="text-xs text-red-400/70 mt-0.5">
                        <span className="text-slate-500">Your answer: </span>
                        {answered}
                      </p>
                    )}
                    {timedOut && (
                      <p className="text-xs text-slate-500 mt-0.5">No answer — timed out</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          variants={fadeUp}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => dispatch({ type: 'RESTART' })}
          className="mt-6 w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide border border-slate-600"
        >
          <RotateCcw className="w-4 h-4" />
          Retake Audit
        </motion.button>
      </div>
    </motion.div>
  );
}

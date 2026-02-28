import { motion } from "motion/react";
import { ChevronRight, Ghost } from "lucide-react";
import { cardVariants } from "../lib/motion";
import { QUIZ_SIZE } from "../lib/quiz";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const BULLETS = [
    `${QUIZ_SIZE} questions per quiz`,
    "30-second timer per question",
    "Personal reflection after each answer",
    "Score tracking and statistics",
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-xl bg-olive-800/50 rounded-2xl p-10 shadow-2xl border border-slate-700"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-olive-500/20 flex items-center justify-center">
          <Ghost className="w-5 h-5 text-olive-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest text-olive-400 uppercase">
          Experience Audit
        </span>
      </div>

      <h1 className="text-4xl font-bold text-olive-400 leading-tight mb-4">
        The Experience
        <br />
        Audit Quiz
      </h1>

      <div className="w-12 h-0.5 bg-olive-500 mb-6" />

      <div className="bg-taupe-950/60 rounded-xl p-5 mb-8 border border-slate-700/50">
        <p className="text-olive-500 text-sm leading-relaxed">
          This audit is designed to recall my experience and development skills.
        </p>
        <ul className="mt-4 space-y-2">
          {BULLETS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-olive-400 text-sm"
            >
              <ChevronRight className="w-3.5 h-3.5 text-olive-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full cursor-pointer bg-olive-400 hover:bg-violet-200 text-olive-900 font-bold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide"
      >
        Start Audit
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { ChevronRight, Target } from 'lucide-react';
import { questions } from '../data/questions';
import { cardVariants } from '../lib/motion';

interface StartScreenProps {
  onStart: () => void;
}

const BULLETS = [
  `${questions.length} scenario-based questions`,
  '30-second timer per question',
  'Personal reflection after each answer',
  'Manual progression — advance at your own pace',
];

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-xl bg-slate-800 rounded-2xl p-10 shadow-2xl border border-slate-700"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-blue-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
          Experience Audit
        </span>
      </div>

      <h1 className="text-4xl font-bold text-white leading-tight mb-4">
        The Experience<br />Audit Quiz
      </h1>

      <div className="w-12 h-0.5 bg-blue-500 mb-6" />

      <div className="bg-slate-900/60 rounded-xl p-5 mb-8 border border-slate-700/50">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
          The Goal
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          This audit is designed to challenge your thinking on employee experience design — from
          onboarding to recognition. Each question probes a real scenario; each reflection invites
          you to turn insight into action.
        </p>
        <ul className="mt-4 space-y-2">
          {BULLETS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
              <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide"
      >
        Start Audit
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}

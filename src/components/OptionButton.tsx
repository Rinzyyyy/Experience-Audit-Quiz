import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

interface OptionButtonProps {
  option: string;
  index: number;
  isAnswered: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  onClick: () => void;
}

const LABELS = ['A', 'B', 'C', 'D'];

export function OptionButton({
  option,
  index,
  isAnswered,
  isSelected,
  isCorrect,
  onClick,
}: OptionButtonProps) {
  let borderClass = 'border-slate-700 hover:border-slate-500';
  let bgClass = 'bg-slate-900/40 hover:bg-slate-700/40';
  let textClass = 'text-slate-300';
  let labelBg = 'bg-slate-800 text-slate-400';
  let Icon: React.ReactNode = null;

  if (isAnswered) {
    if (isCorrect) {
      borderClass = 'border-emerald-500/70';
      bgClass = 'bg-emerald-500/10';
      textClass = 'text-emerald-300';
      labelBg = 'bg-emerald-500/20 text-emerald-400';
      Icon = <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />;
    } else if (isSelected) {
      borderClass = 'border-red-500/70';
      bgClass = 'bg-red-500/10';
      textClass = 'text-red-300';
      labelBg = 'bg-red-500/20 text-red-400';
      Icon = <XCircle className="w-4 h-4 text-red-400 shrink-0" />;
    } else {
      borderClass = 'border-slate-700/40';
      bgClass = 'bg-slate-900/20';
      textClass = 'text-slate-500';
      labelBg = 'bg-slate-800/50 text-slate-600';
    }
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * index + 0.2 } }}
      whileHover={!isAnswered ? { scale: 1.01 } : {}}
      whileTap={!isAnswered ? { scale: 0.99 } : {}}
      onClick={onClick}
      disabled={isAnswered}
      className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer disabled:cursor-default ${borderClass} ${bgClass}`}
    >
      <span
        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors duration-200 ${labelBg}`}
      >
        {LABELS[index]}
      </span>
      <span className={`text-sm leading-snug flex-1 transition-colors duration-200 ${textClass}`}>
        {option}
      </span>
      {Icon}
    </motion.button>
  );
}

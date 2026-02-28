import { Clock } from 'lucide-react';
import { TIMER_DURATION } from '../lib/quiz';


interface TimerRingProps {
  timeLeft: number;
}

export function TimerRing({ timeLeft }: TimerRingProps) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / TIMER_DURATION) * circumference;
  const isUrgent = timeLeft <= 8;

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" width="48" height="48">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="#1e293b" strokeWidth="3" />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke={isUrgent ? '#ef4444' : '#3b82f6'}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.9s linear, stroke 0.3s ease' }}
        />
      </svg>
      <div className="flex items-center gap-0.5">
        <Clock className={`w-2.5 h-2.5 ${isUrgent ? 'text-red-400' : 'text-slate-400'}`} />
        <span className={`text-xs font-bold tabular-nums ${isUrgent ? 'text-red-400' : 'text-slate-300'}`}>
          {timeLeft}
        </span>
      </div>
    </div>
  );
}

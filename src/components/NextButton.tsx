import { motion } from "motion/react";
import { ArrowRight, Flag } from "lucide-react";

interface NextButtonProps {
  isLastQuestion: boolean;
  onClick: () => void;
}

export function NextButton({ isLastQuestion, onClick }: NextButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }}
      className="mt-5"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className="w-full cursor-pointer bg-olive-400 hover:bg-violet-200 text-olive-900 font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm tracking-wide"
      >
        {isLastQuestion ? (
          <>
            <Flag className="w-4 h-4" />
            Finish Audit
          </>
        ) : (
          <>
            Next Question
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </motion.div>
  );
}

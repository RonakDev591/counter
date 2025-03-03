import { motion, AnimatePresence } from "framer-motion";

interface CounterDisplayProps {
  count: number;
  isIncrement: boolean;
}

const CounterDisplay = ({ count, isIncrement }: CounterDisplayProps) => {
  return (
    <div className="mb-4 text-black font-anton text-[80px] not-italic font-normal leading-normal">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={count}
          custom={isIncrement}
          variants={{
            initial: (isIncrement: boolean) => ({
              opacity: 0,
              x: isIncrement ? 30 : -30,
              scale: 0.95,
              color: isIncrement ? "#8BC34A" : "#FF7043",
            }),
            animate: {
              opacity: 1,
              x: 0,
              scale: [1.1, 1],
              color: "#000",
            },
            exit: (isIncrement: boolean) => ({
              opacity: 0,
              x: isIncrement ? -30 : 30,
              scale: 1.05,
            }),
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 20 },
            scale: { type: "spring", stiffness: 250, damping: 15 },
            opacity: { duration: 0.2, ease: "easeOut" },
          }}
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CounterDisplay;

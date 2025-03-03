import { motion } from "framer-motion";

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  count: number;
}

const CounterControls = ({
  onIncrement,
  onDecrement,
  count,
}: CounterControlsProps) => {
  return (
    <div className="mb-[9px]">
      <motion.button
        onClick={onIncrement}
        whileTap={{ scale: 0.9 }}
        className="bg-[#2B2B2B] font-steradin rounded-lg px-5 py-2 mr-[10px] text-white cursor-pointer"
      >
        Increment
      </motion.button>
      <motion.button
        onClick={onDecrement}
        whileTap={{ scale: 0.9 }}
        disabled={count === 0}
        className={`bg-[#2B2B2B] font-steradin rounded-lg px-5 py-2 text-white ${
          count === 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Decrement
      </motion.button>
    </div>
  );
};

export default CounterControls;

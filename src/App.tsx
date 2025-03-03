import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import StepInput from "./components/StepInput";
import Logo from "./components/Logo";
import { motion } from "framer-motion";
import "./App.css";
import useInterval from "./hooks/useInterval";
import { useCounter } from "./context/CounterContext";

function App() {
  // const [count, setCount] = useState<number>(0);
  const { count, setCount } = useCounter();
  const [step, setStep] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>(String(step));
  const [isIncrement, setIsIncrement] = useState<boolean>(true);
  const [isAutoIncrementing, setIsAutoIncrementing] = useState<boolean>(false);
  const [intervalTime, setIntervalTime] = useState<number>(1000);
  const handleIncrement = () => {
    setIsIncrement(true);
    setCount((prevCount) => prevCount + step);
  };

  const handleDecrement = () => {
    setIsIncrement(false);
    setCount((prevCount) => Math.max(0, prevCount - step));
  };

  useInterval(
    () => {
      if (isAutoIncrementing) {
        setCount((prev) => prev + step);
      }
    },
    isAutoIncrementing ? intervalTime : null
  );

  return (
    <div className="">
      <Logo />
      <div className="flex bg-[#E0FF32] h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <CounterDisplay count={count} isIncrement={isIncrement} />
          <CounterControls
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            count={count}
          />
          <StepInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            setStep={setStep}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`bg-[#2B2B2B] font-steradin rounded-lg px-5 py-2 text-white my-2 cursor-pointer
            }`}
            onClick={() => setIsAutoIncrementing((prev) => !prev)}
          >
            {isAutoIncrementing
              ? "stop auto increment"
              : "start auto increment"}
          </motion.button>

          <input
            type="range"
            min="100"
            max="3000"
            value={intervalTime}
            onChange={(e) => setIntervalTime(Number(e.target.value))}
          />
          <div>Interval time: {intervalTime} ms</div>
        </div>
      </div>
    </div>
  );
}

export default App;

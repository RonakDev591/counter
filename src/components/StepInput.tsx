import React from "react";

interface StepInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  setStep: (value: number) => void;
}

const StepInput = ({ inputValue, setInputValue, setStep }: StepInputProps) => {
  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const parsedValue = Number(newValue);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setStep(parsedValue);
    }
  };

  const handleBlur = () => {
    const parsedValue = Number(inputValue);
    if (isNaN(parsedValue) || parsedValue < 1) {
      setInputValue("1");
      setStep(1);
    }
  };
  return (
    <div className="relative">
      <input
        type="number"
        value={inputValue}
        onChange={handleStepChange}
        onBlur={handleBlur}
        min="1"
        className="rounded-lg border  border-black/22 bg-black/5 p-2 text-black font-medium text-lg w-full pr-[35%] focus:outline-none"
      />
      <span className="ml-auto  text-[rgba(0,0,0,0.42)] absolute right-[11px] top-[13px] font-steradian text-[12px] font-medium leading-normal tracking-[-0.6px] pointer-events-none">
        increment by
      </span>
    </div>
  );
};

export default StepInput;

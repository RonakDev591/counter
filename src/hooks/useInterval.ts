import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallBack = useRef<() => void>(undefined);
  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;
    const tick = () => {
      if (savedCallBack.current) savedCallBack.current();
    };

    const interval = setInterval(tick, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

export default useInterval;

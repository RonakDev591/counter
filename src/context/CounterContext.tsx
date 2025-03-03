import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({children} : {children: ReactNode}) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    const context = useContext(CounterContext);

    if(!context){
        throw new Error("something wrong")
    }

    return context
}

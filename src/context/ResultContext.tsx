import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react";
import ResponseComponents from "../components/ResponseComponents";

interface ResultContextType {
  resultValue: boolean | null;
  setResultValue: Dispatch<SetStateAction<boolean | null>>;
  updateTrigger: number;
  setUpdateTrigger: Dispatch<SetStateAction<number>>;
}

export const ResultContext = createContext<ResultContextType>({
  resultValue: null,
  setResultValue: () => {},
  updateTrigger: 0,
  setUpdateTrigger: () => {},
});

export function ResultProvider({ children }: { readonly children: ReactNode }) {
  const [resultValue, setResultValue] = useState<boolean | null>(null);
  const [updateTrigger, setUpdateTrigger] = useState<number>(0);

  useEffect(() => {
    if (resultValue === null) return;
    setTimeout(() => {
      setResultValue(null);
      setUpdateTrigger(prev => prev + 1);
    }, 2000);
  }
  , [resultValue]);


  const contextValue = useMemo(() => ({ resultValue, setResultValue, updateTrigger, setUpdateTrigger }), [resultValue, setResultValue, updateTrigger, setUpdateTrigger]);

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
      {resultValue !== null && <ResponseComponents />}
    </ResultContext.Provider>
  );
}

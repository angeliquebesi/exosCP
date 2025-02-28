import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";
import ResponseComponents from "../components/ResponseComponents";

interface ResultContextType {
  resultValue: boolean | null;
  setResultValue: Dispatch<SetStateAction<boolean | null>>;
}

export const ResultContext = createContext<ResultContextType>({
  resultValue: null,
  setResultValue: () => {},
});

export function ResultProvider({ children }: { readonly children: ReactNode }) {
  const [resultValue, setResultValue] = useState<boolean | null>(null);

  const contextValue = useMemo(() => ({ resultValue, setResultValue }), [resultValue, setResultValue]);

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
      {resultValue !== null && <ResponseComponents />}
    </ResultContext.Provider>
  );
}

import { useEffect, useMemo, useState } from "react";
import getRandomIntInclusive from "../utils/getRandomIntInclusive";
import NumberButton from "./AtomicComponents/NumberButton";

interface MoreHighComponentsProps {
  setResult: (result: boolean | null) => void;
  compareSymbol: string;
}

function MoreLessComponents({ setResult, compareSymbol }: Readonly<MoreHighComponentsProps>) {
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [updateTrigger, setUpdateTrigger] = useState<number>(0);
  const ButtonValue1 = useMemo(() => getRandomIntInclusive(0, 100), [updateTrigger]);
  const ButtonValue2 = useMemo(() => getRandomIntInclusive(0, 100, ButtonValue1), [updateTrigger]);

  useEffect(() => {
    if (!disabledButton) {
      setUpdateTrigger(prev => prev + 1);
    }
  }, [disabledButton]);
  

  const compareValue = (buttonValue: number, otherValue: number) => {
    if (compareSymbol === 'more') {
      setResult(buttonValue > otherValue );
    } else {
      setResult(buttonValue < otherValue );
    }
    setDisabledButton(prev => !prev);
    setTimeout(() => {
      setDisabledButton(prev => !prev)
      setResult(null)
    }, 2000)  
  }

  return (
    <div>
      <NumberButton value={ButtonValue1} onClick={() => compareValue(ButtonValue1, ButtonValue2)} disabled={disabledButton} />
      <NumberButton value={ButtonValue2} onClick={() => compareValue(ButtonValue2, ButtonValue1)} disabled={disabledButton} />
    </div>
  )
}

export default MoreLessComponents

import { useMemo, useState } from "react";
import getRandomIntInclusive from "../utils/getRandomIntInclusive";
import NumberButton from "./AtomicComponents/NumberButton";

interface MoreHighComponentsProps {
  setResult: (result: boolean | null) => void;
  compareSymbol: string;
}

function MoreLessComponents({ setResult, compareSymbol }: Readonly<MoreHighComponentsProps>) {
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const ButtonValue1 = useMemo(() => getRandomIntInclusive(0, 50), [disabledButton]);
  const ButtonValue2 = useMemo(() => getRandomIntInclusive(0, 50, ButtonValue1), [disabledButton]);

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

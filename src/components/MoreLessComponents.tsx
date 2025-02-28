import { useContext, useEffect, useMemo, useState } from "react";
import { ResultContext } from "../context/ResultContext";
import getRandomIntInclusive from "../utils/getRandomIntInclusive";
import ChoiceResponseButton from "./AtomicComponents/ChoiceResponseButton";

interface MoreHighComponentsProps {
  compareSymbol: string;
}

function MoreLessComponents({ compareSymbol }: Readonly<MoreHighComponentsProps>) {
  const { setResultValue } = useContext(ResultContext);
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
      setResultValue(buttonValue > otherValue );
    } else {
      setResultValue(buttonValue < otherValue );
    }
    setDisabledButton(prev => !prev);
    setTimeout(() => {
      setDisabledButton(prev => !prev)
      setResultValue(null)
    }, 2000)  
  }

  return (
    <div>
      <ChoiceResponseButton value={ButtonValue1} onClick={() => compareValue(ButtonValue1, ButtonValue2)} disabled={disabledButton} />
      <ChoiceResponseButton value={ButtonValue2} onClick={() => compareValue(ButtonValue2, ButtonValue1)} disabled={disabledButton} />
    </div>
  )
}

export default MoreLessComponents

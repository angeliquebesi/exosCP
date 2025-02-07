import { useEffect, useMemo, useState } from "react";
import NumericKeypad from "../../components/AtomicComponents/NumericKeypad";
import ResponseInput from "../../components/AtomicComponents/ResponseInput";
import ResponseComponents from "../../components/ResponseComponents";
import getRandomIntInclusive from "../../utils/getRandomIntInclusive";

function Addition() {
  const [result, setResult] = useState<boolean | null>(null);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [updateTrigger, setUpdateTrigger] = useState<number>(0);

  const Value1 = useMemo(() => getRandomIntInclusive(0, 10), [updateTrigger]);
  const Value2 = useMemo(() => getRandomIntInclusive(0, 30), [updateTrigger]);

  useEffect(() => {
    if (result === null) {
      setUpdateTrigger(prev => prev + 1);
    }
  }, [result]);

  const checkResult = () => {
    setResult(Value1 + Value2 === parseInt((document.querySelector('input') as HTMLInputElement).value));
    setDisabledButton(true);
    setTimeout(() => {
      setDisabledButton(false);
      setResult(null);
      document.querySelector('input')!.value = '';
    }, 2000);
  }

  return (
    <div className="page-container">
      <h1>Quel est le résultat de l'addition ?</h1>
      <ResponseInput label={`${Value1} + ${Value2} =`} checkResult={checkResult} disabledButton={disabledButton} />
      <NumericKeypad disabledButton={disabledButton} />
      <ResponseComponents result={result} />
    </div>
  )
}

export default Addition;

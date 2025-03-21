import { useContext, useMemo, useState } from "react";
import NumericKeypad from "../../components/AtomicComponents/NumericKeypad";
import ResponseInput from "../../components/AtomicComponents/ResponseInput";
import { ResultContext } from "../../context/ResultContext";
import getRandomIntInclusive from "../../utils/getRandomIntInclusive";

function Addition() {
  const { setResultValue, updateTrigger } = useContext(ResultContext);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const Value1 = useMemo(() => getRandomIntInclusive(0, 10), [updateTrigger]);
  const Value2 = useMemo(() => getRandomIntInclusive(0, 30), [updateTrigger]);

  const checkResult = () => {
    setResultValue(Value1 + Value2 === parseInt((document.querySelector('input') as HTMLInputElement).value));
    setDisabledButton(true);
    setTimeout(() => {
      setDisabledButton(false);
      setResultValue(null);
      document.querySelector('input')!.value = '';
    }, 2000);
  }

  return (
    <div className="page-container">
      <h1>Quel est le résultat de l'addition ?</h1>
      <ResponseInput label={`${Value1} + ${Value2} =`} checkResult={checkResult} disabledButton={disabledButton} />
      <NumericKeypad />
    </div>
  )
}

export default Addition;

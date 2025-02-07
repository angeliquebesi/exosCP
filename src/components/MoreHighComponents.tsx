import getRandomIntInclusive from "../utils/getRandomIntInclusive";
import NumberButton from "./NumberButton";

function MoreHighComponents({ setResult }: {readonly setResult: (result: boolean) => void}) {
  const ButtonValue1 = getRandomIntInclusive(0, 50);
  const ButtonValue2 = getRandomIntInclusive(0, 50);

  const compareValue = (buttonValue: number, otherValue: number) => {
    return buttonValue > otherValue ? setResult(true) : setResult(false)
  }
  
  return (
    <div>
      <NumberButton value={ButtonValue1} onClick={() => compareValue(ButtonValue1, ButtonValue2)}/>
      <NumberButton value={ButtonValue2} onClick={() => compareValue(ButtonValue2, ButtonValue1)}/>
    </div>
  )
}

export default MoreHighComponents

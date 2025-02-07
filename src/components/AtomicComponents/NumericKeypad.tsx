import NumberButton from "./NumberButton";

interface NumericKeypadProps {
  disabledButton: boolean;
}

function NumericKeypad({ disabledButton }: Readonly<NumericKeypadProps>) {
  const addNumberToInput = (value: number) => {
    const input = document.querySelector('input') as HTMLInputElement;
    input.value += value;
  }

  return (
    <div className="numeric-keypad">
      {[1,2,3,4,5,6,7,8,9,0].map(number => {
        return (
          <NumberButton key={number} value={number} onClick={() => addNumberToInput(number)} disabled={disabledButton} />
        )}
      )}
    </div>
  )
}

export default NumericKeypad

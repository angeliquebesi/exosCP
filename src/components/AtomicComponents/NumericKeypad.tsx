import ChoiceResponseButton from "./ChoiceResponseButton";

function NumericKeypad() {
  const addNumberToInput = (value: number) => {
    const input = document.querySelector('input') as HTMLInputElement;
    input.value += value;
  }

  return (
    <div className="numeric-keypad">
      {[1,2,3,4,5,6,7,8,9,0].map(number => {
        return (
          <ChoiceResponseButton key={number} value={number} onClick={() => addNumberToInput(number)} />
        )}
      )}
    </div>
  )
}

export default NumericKeypad

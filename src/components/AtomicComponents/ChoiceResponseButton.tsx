import './ChoiceResponseButton.css'

interface ChoiceResponseButtonProps {
  readonly value: number | string
  readonly onClick: () => void
  readonly disabled: boolean
}

function ChoiceResponseButton({ value, onClick, disabled }: Readonly<ChoiceResponseButtonProps>) {
  return (
    <button onClick={onClick} className="choice-response-button" disabled={disabled}>
      {value}
    </button>
  )
}

export default ChoiceResponseButton

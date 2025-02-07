import './NumberButton.css'

interface NumberButtonProps {
  readonly value: number
  readonly onClick: () => void
  readonly disabled: boolean
}

function NumberButton({ value, onClick, disabled }: Readonly<NumberButtonProps>) {
  return (
    <button onClick={onClick} className="number-button" disabled={disabled}>
      {value}
    </button>
  )
}

export default NumberButton

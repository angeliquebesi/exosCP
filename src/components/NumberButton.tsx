import './NumberButton.css'

function NumberButton({ value, onClick }: {readonly value: number, readonly onClick: () => void}) {
  return (
    <button onClick={onClick} className="number-button">
      {value}
    </button>
  )
}

export default NumberButton

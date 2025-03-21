import './ChoiceResponseButton.css'

interface ChoiceResponseButtonProps {
  value: number | string
  onClick: () => void
}

function ChoiceResponseButton({ value, onClick }: Readonly<ChoiceResponseButtonProps>) {
  return (
    <button onClick={onClick} className="choice-response-button" >
      {value}
    </button>
  )
}

export default ChoiceResponseButton

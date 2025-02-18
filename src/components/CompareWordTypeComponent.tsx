import ChoiceResponseButton from "./AtomicComponents/ChoiceResponseButton"

function CompareWordTypeComponent({ setResult }: Readonly<{setResult: (result: boolean) => void}>) {


  // function onClick pour vérifier si la réponse est correcte

  return (
    <div>
      <ChoiceResponseButton />
      <ChoiceResponseButton />
    </div>
  )
}

export default CompareWordTypeComponent

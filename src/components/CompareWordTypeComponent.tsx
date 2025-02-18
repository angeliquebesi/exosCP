import { useMemo } from "react"
import { getRandomWord, Word } from "../utils/getRandomWord"
import ChoiceResponseButton from "./AtomicComponents/ChoiceResponseButton"

function CompareWordTypeComponent({ setResult, genre }: Readonly<{setResult: (result: boolean) => void, genre: string}>) {
  const firstWord = useMemo(() => getRandomWord(), [])
  const secondWord = useMemo(() => getRandomWord(firstWord), [firstWord])

  const checkResponse = (response: Word) => {
    setResult(response.genre === genre)
  }

  return (
    <div>
      <ChoiceResponseButton value={firstWord.nom} onClick={()=> checkResponse(firstWord)}/>
      <ChoiceResponseButton value={secondWord.nom} onClick={() => checkResponse(secondWord)}/>
    </div>
  )
}

export default CompareWordTypeComponent

import { useContext, useMemo } from "react"
import { ResultContext } from "../context/ResultContext"
import { getRandomWord, Word } from "../utils/getRandomWord"
import ChoiceResponseButton from "./AtomicComponents/ChoiceResponseButton"

function CompareWordTypeComponent({ genre }: Readonly<{genre: string}>) {
  const { setResultValue } = useContext(ResultContext)
  const firstWord = useMemo(() => getRandomWord(), [])
  const secondWord = useMemo(() => getRandomWord(firstWord), [firstWord])

  const checkResponse = (response: Word) => {
    setResultValue(response.genre === genre)
  }

  return (
    <div>
      <ChoiceResponseButton value={firstWord.nom} onClick={()=> checkResponse(firstWord)}/>
      <ChoiceResponseButton value={secondWord.nom} onClick={() => checkResponse(secondWord)}/>
    </div>
  )
}

export default CompareWordTypeComponent

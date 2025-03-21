import { useContext, useMemo } from "react"
import { ResultContext } from "../context/ResultContext"
import { WordType } from "../Pages/Compare/CompareWordType"
import getRandomWord, { Condition, Word } from "../utils/getRandomWord"
import ChoiceResponseButton from "./AtomicComponents/ChoiceResponseButton"

function CompareWordTypeComponent({ wordType, condition }: Readonly<{wordType: WordType, condition: Condition}>) {
  const { setResultValue, updateTrigger } = useContext(ResultContext)
  const firstWord = useMemo(() => getRandomWord(), [updateTrigger])
  const secondWord = useMemo(() => getRandomWord(firstWord, condition), [firstWord, condition])

  const checkResponse = (response: Word) => {
    setResultValue(response[condition] === wordType)
  }

  return (
    <div className="choice-response-container">
      <ChoiceResponseButton value={firstWord.nom} onClick={()=> checkResponse(firstWord)}/>
      <ChoiceResponseButton value={secondWord.nom} onClick={() => checkResponse(secondWord)}/>
    </div>
  )
}

export default CompareWordTypeComponent

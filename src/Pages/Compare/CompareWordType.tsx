import { useContext, useEffect, useState } from "react";
import CompareWordTypeComponent from "../../components/CompareWordTypeComponent";
import { ResultContext } from "../../context/ResultContext";

export type WordType = 'masculin' | 'féminin' | 'singulier' | 'pluriel';

function CompareWordType() {
  const { updateTrigger } = useContext(ResultContext);
  const [wordType, setWordType] = useState<WordType>('masculin');

  useEffect(() => {
    const random = Math.random();
    if (random < 0.25) {
      setWordType('masculin');
    }
    if (random >= 0.25 && random < 0.5) {
      setWordType('féminin');
    }
    if (random >= 0.5 && random < 0.75) {
      setWordType('singulier');
    }
    if (random >= 0.75) {
      setWordType('pluriel');
    }
  }, [updateTrigger]);
  
  return (
    <div className="page-container">
      <h1>Trouve le mot {wordType}</h1>
      <CompareWordTypeComponent wordType={wordType} condition={wordType === 'féminin' || wordType === 'masculin' ? 'genre' : 'nombre'}/>
    </div>
  )
}

export default CompareWordType

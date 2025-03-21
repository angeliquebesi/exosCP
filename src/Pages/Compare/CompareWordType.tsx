import { useContext, useEffect, useState } from "react";
import CompareWordTypeComponent from "../../components/CompareWordTypeComponent";
import { ResultContext } from "../../context/ResultContext";

function CompareWordType() {
  const { updateTrigger } = useContext(ResultContext);
  const [genre, setGenre] = useState<string>('');

  useEffect(() => {
    const randomGenre = Math.random() > 0.5 ? 'masculin' : 'féminin';    
    setGenre(randomGenre);
  }, [updateTrigger]);
  
  return (
    <div className="page-container">
      <h1>Trouve le mot {genre}</h1>
      <CompareWordTypeComponent genre={genre} />
    </div>
  )
}

export default CompareWordType

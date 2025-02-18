import { useState } from "react";
import CompareWordTypeComponent from "../../components/CompareWordTypeComponent";
import ResponseComponents from "../../components/ResponseComponents";

function CompareWordType() {
  const [result, setResult] = useState<boolean | null>(null);
  const [genre, setGenre] = useState<string>('masculin');
  
  return (
    <div className="page-container">
      <h1>Trouve le mot {genre}</h1>
      <CompareWordTypeComponent setResult={setResult} genre={genre} />
      <ResponseComponents result={result}/>
    </div>
  )
}

export default CompareWordType

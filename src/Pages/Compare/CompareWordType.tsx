import { useState } from "react";
import CompareWordTypeComponent from "../../components/CompareWordTypeComponent";
import ResponseComponents from "../../components/ResponseComponents";

function CompareWordType() {
  const [result, setResult] = useState<boolean | null>(null);
  
  return (
    <div className="page-container">
      <h1>Trouve le mot féminin</h1>
      <CompareWordTypeComponent setResult={setResult} />
      <ResponseComponents result={result}/>
    </div>
  )
}

export default CompareWordType

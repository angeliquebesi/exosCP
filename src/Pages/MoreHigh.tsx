import { useState } from "react";
import MoreHighComponents from "../components/MoreHighComponents";
import ResponseComponents from "../components/ResponseComponents";
import './MoreHigh.css';

function MoreHigh() {
  const [result, setResult] = useState<boolean | null>(null);

  return (
    <div className="more-high">
      <h1>Qui est le plus grand ?</h1>
      <MoreHighComponents setResult={setResult}/>
      <ResponseComponents result={result}/>
    </div>
  )
}

export default MoreHigh

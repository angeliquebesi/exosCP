import { useState } from "react";
import MoreHighComponents from "../../components/MoreHighComponents";
import ResponseComponents from "../../components/ResponseComponents";
import './CompareNumbers.css';

function CompareNumbersTitle({ compareValue }: Readonly<{compareValue: string}>) {
  return compareValue === 'more' ? <h1>Qui est le plus grand ?</h1> : <h1>Qui est le plus petit ?</h1>
}

function CompareNumbers({ compareValue }: Readonly<{compareValue: string}>) {
  const [result, setResult] = useState<boolean | null>(null);

  return (
    <div className="compare-numbers-container">
      <CompareNumbersTitle compareValue={compareValue} />
      <MoreHighComponents setResult={setResult} compareSymbol={compareValue}/>
      <ResponseComponents result={result}/>
    </div>
  )
}

export default CompareNumbers

import { useState } from "react";
import MoreLessComponents from "../../components/MoreLessComponents";
import ResponseComponents from "../../components/ResponseComponents";

function CompareNumbersTitle({ compareValue }: Readonly<{compareValue: string}>) {
  return compareValue === 'more' ? <h1>Qui est le plus grand ?</h1> : <h1>Qui est le plus petit ?</h1>
}

function CompareNumbers({ compareValue }: Readonly<{compareValue: string}>) {
  const [result, setResult] = useState<boolean | null>(null);

  return (
    <div className="page-container">
      <CompareNumbersTitle compareValue={compareValue} />
      <MoreLessComponents setResult={setResult} compareSymbol={compareValue}/>
      <ResponseComponents result={result}/>
    </div>
  )
}

export default CompareNumbers

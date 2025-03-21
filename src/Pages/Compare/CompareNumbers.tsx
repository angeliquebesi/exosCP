import MoreLessComponents from "../../components/MoreLessComponents";

function CompareNumbersTitle({ compareValue }: Readonly<{compareValue: string}>) {
  return compareValue === 'more' ? <h1>Qui est le plus grand ?</h1> : <h1>Qui est le plus petit ?</h1>
}

function CompareNumbers({ compareValue }: Readonly<{compareValue: string}>) {

  return (
    <div className="page-container">
      <CompareNumbersTitle compareValue={compareValue} />
      <MoreLessComponents compareSymbol={compareValue}/>
    </div>
  )
}

export default CompareNumbers

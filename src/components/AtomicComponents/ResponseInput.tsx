interface ResponseInputProps {
  label: string;
  checkResult: () => void;
  disabledButton: boolean;
}
function ResponseInput({ label, checkResult, disabledButton }: Readonly<ResponseInputProps>) {
  return (
    <div className="response-input">
      <label htmlFor="solution">{label}</label>
      <input type="number" name="solution" className="input-large"/>
      <button onClick={() => checkResult()} disabled={disabledButton}>Valider</button>
    </div>
  )
}

export default ResponseInput

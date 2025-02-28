import { useState } from "react";
import CompareWordTypeComponent from "../../components/CompareWordTypeComponent";

function CompareWordType() {
  const [genre, setGenre] = useState<string>('masculin');
  
  return (
    <div className="page-container">
      <h1>Trouve le mot {genre}</h1>
      <CompareWordTypeComponent genre={genre} />
    </div>
  )
}

export default CompareWordType

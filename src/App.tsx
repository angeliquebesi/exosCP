import { Link } from 'react-router'
import './App.css'
function App() {
  return (
    <div className="page-container">
      <header>
        <h1>Bienvenue à l'école des petits ours !</h1>
        <p>Choisis un exercice pour commencer à apprendre !</p>
      </header>
      <div className="exercises">
        <Link to='/compare/less'>Le Plus Petit</Link>
        <Link to='/compare/more'>Le Plus Grand</Link>
        <Link to='/addition'>Addition</Link>
      </div>
    </div>
  )
}

export default App

import { useContext } from 'react';
import BearKing from '../assets/bearKing.jpeg';
import BearSad from '../assets/bearSad.jpeg';
import { ResultContext } from '../context/ResultContext';
import './ResponseComponents.css';

function ResponseComponents() {
  const { resultValue } = useContext(ResultContext);

  if (resultValue === null) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        {resultValue ?
          <img src={BearKing} alt="Bear King" height='150vh'/>
          :
          <img src={BearSad} alt="Bear Sad" height='150vh'/>
        }
      </div>
    </div>
  );
}

export default ResponseComponents;

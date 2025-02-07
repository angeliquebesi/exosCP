import BearKing from '../assets/bearKing.jpeg';
import BearSad from '../assets/bearSad.jpeg';

function ResponseComponents({ result }: {readonly result: boolean | null}) {
  if (result === null) return;
  return (
    <>
      {result ?
        <img src={BearKing} alt="Bear King" height='150vh'/>
        :
        <img src={BearSad} alt="Bear King" height='150vh'/>
      }
    </>
  )
}

export default ResponseComponents

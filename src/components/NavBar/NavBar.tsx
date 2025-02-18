import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/'>Accueil</Link>
      <Link to='/compare/more'>Plus Grand</Link>
      <Link to='/compare/less'>Plus Petit</Link>
      <Link to='/addition'>Addition</Link>
      <Link to='/wordType'>Genre du Mot</Link>
    </nav>
  );
}

export default Navbar;

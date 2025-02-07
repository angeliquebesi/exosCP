import { Link } from 'react-router';
import './Navbar.css'; // Assurez-vous de créer un fichier CSS pour le style de la navbar

function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/compare/more'>Plus Grand</Link>
    </nav>
  );
}

export default Navbar;

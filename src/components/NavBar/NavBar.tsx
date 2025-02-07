import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/compare/more'>Plus Grand</Link>
      <Link to='/compare/less'>Plus Petit</Link>
      <Link to='/addition'>Addition</Link>
    </nav>
  );
}

export default Navbar;

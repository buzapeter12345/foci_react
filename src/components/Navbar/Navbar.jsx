import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Kezdőlap</Link>
      <Link to="/jatekosokma">Manchester City</Link>
      <Link to="/jatekosokfc">FC Inter</Link>
    </div>
  );
};

export default Navbar;

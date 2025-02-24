import { Link } from 'react-router-dom';
import './CSS/navbar.css';

const Nav = () => {
  return (
    <header className='navbar'>
      <nav>
        <ul>
          <li><Link className="li" to="/">Home</Link></li>
          <li><Link className="li" to="/about">About</Link></li>
          <li><Link className="li" to="/project">Projects</Link></li>
          <li><Link className="li" to="/achievement">Achievement</Link></li>
          <li><Link className="li" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

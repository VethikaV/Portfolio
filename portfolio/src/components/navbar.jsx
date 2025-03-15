import { Link } from "react-router-dom";
import { useState } from "react";
import "./CSS/navbar.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Navbar Button for Mobile */}
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰ Menu
      </button>

      {/* Navbar Links (Hidden by default on mobile) */}
      <nav className={isOpen ? "active" : ""}>
        <ul>
          <li><Link className="li" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link className="li" to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link className="li" to="/project" onClick={() => setIsOpen(false)}>Project</Link></li>
          <li><Link className="li" to="/achievement" onClick={() => setIsOpen(false)}>Achievement</Link></li>
          <li><Link className="li" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

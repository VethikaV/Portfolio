import { useState, useEffect } from "react";
import './CSS/style.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
  

      {/* Mobile Menu Button */}
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navbar Links */}
      <nav className={isOpen ? "active" : ""}>
        <ul>
          <li><button onClick={() => handleScrollTo("home")}>Home</button></li>
          <li><button onClick={() => handleScrollTo("about")}>About</button></li>
          <li><button onClick={() => handleScrollTo("project")}>Project</button></li>
          <li><button onClick={() => handleScrollTo("achievement")}>Achievement</button></li>
          <li><button onClick={() => handleScrollTo("contact")}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

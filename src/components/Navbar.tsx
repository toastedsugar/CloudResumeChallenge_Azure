import { useState } from "react";

interface NavbarProps {
  isStartButtonClicked: boolean;
  setIsStartButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}




const Navbar: React.FC<NavbarProps> = ({isStartButtonClicked, setIsStartButtonClicked}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsStartButtonClicked(!isStartButtonClicked)
    setIsMenuOpen(!isMenuOpen);
  };

  const clearMenu = () => {
    setIsStartButtonClicked(false)
    setIsMenuOpen(false)
  }

  const NavbarMenu = () => (
    <>
    <div className="nav-menu-underlay" onClick={clearMenu}>
    </div>

    <div className="nav-menu-container">
      <div className="nav-menu-side-header">Cloud Resume Challenge</div>
      <div className="nav-menu-item-container">
        <a href="#Resume" className="nav-menu-item">
          Home
        </a>
        <a href="#about" className="nav-menu-item">
          About
        </a>
        <a href="#Blog" className="nav-menu-item">
          Contact
        </a>
      </div>
    </div>
    </>
  );

  return (
    <nav className="nav-navbar">
      <button className={isStartButtonClicked ? "button-pressed": "button"} onClick={toggleMenu}>
        S T A R T
      </button>
      {isMenuOpen && NavbarMenu()}
    </nav>
  );
}

export default Navbar

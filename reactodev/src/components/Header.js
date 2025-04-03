import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/img/logo.png"; 

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll ? "header scrolled" : "header"}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#trainer">Trainer</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#joinus" className="join-btn">JOIN US</a>
      </nav>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;

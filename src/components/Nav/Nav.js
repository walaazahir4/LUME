import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" style={{ position: "fixed" }}>
      <a href="#home" className="logo" onClick={closeMenu}>
        LUMÉ<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" 
             onClick={() => {
               closeMenu();
               setActiveLink("home");
             }} 
             style={{ fontSize: "20px" }}  
             className={activeLink === "home" ? "active-link" : ""}>
            Home
          </a>
        </li>
        {/* <li><a href="#header" onClick={closeMenu}>Shop</a></li> */}
        <li>
          <a href="#cat" 
             onClick={() => {
               closeMenu();
               setActiveLink("Products");
             }} 
             style={{ fontSize: "20px" }}  
             className={activeLink === "Products" ? "active-link" : ""}>
            Products
          </a>
        </li>
        <li>
          <a
            href="#newArrivals"
            onClick={() => {
              closeMenu();
              setActiveLink("News");
            }}
            style={{ fontSize: "20px" }}
            className={activeLink === "News" ? "active-link" : ""}>
            News
          </a>
        </li>
        <li>
          <a href="#about" 
             onClick={() => {
               closeMenu();
               setActiveLink("About");
             }} 
             style={{ fontSize: "20px" }}  
             className={activeLink === "About" ? "active-link" : ""}>
            About
          </a>
        </li>
        <li>
          <a
            href="#newsletter"
            onClick={() => {
              closeMenu();
              setActiveLink("Contact");
            }}
            style={{ fontSize: "20px" }}  className={activeLink === "Contact" ? "active-link" : ""}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button aria-label="Search">⌕</button>
        <button aria-label="Wishlist">♡</button>
        <button aria-label="Shopping cart">♧</button>
      </div>
    </nav>
  );
}

export default Nav;

import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const closeMenu = () => setMenuOpen(false);

  const searchProducts = (event) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const matchingProduct = [...document.querySelectorAll(".header-product-card, .new-product-card")]
      .find((card) => card.textContent.toLowerCase().includes(query));

    if (matchingProduct) {
      matchingProduct.scrollIntoView({ behavior: "smooth", block: "center" });
      setActivePanel(null);
      setSearchOpen(false);
    } else {
      setActivePanel("no-results");
    }
  };

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
        <button
          aria-label="Search products"
          aria-expanded={searchOpen}
          onClick={() => {
            setSearchOpen(!searchOpen);
            setActivePanel(null);
          }}
        >⌕</button>
        <button
          aria-label="Wishlist"
          aria-expanded={activePanel === "wishlist"}
          onClick={() => {
            setActivePanel(activePanel === "wishlist" ? null : "wishlist");
            setSearchOpen(false);
          }}
        >♡</button>
        <button
          aria-label="Shopping cart"
          aria-expanded={activePanel === "cart"}
          onClick={() => {
            setActivePanel(activePanel === "cart" ? null : "cart");
            setSearchOpen(false);
          }}
        >♧</button>
      </div>

      {searchOpen && (
        <form className="nav-popover nav-search" onSubmit={searchProducts}>
          <label htmlFor="product-search">Search products</label>
          <input
            id="product-search"
            type="search"
            placeholder="Try serum or perfume"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            autoFocus
          />
          <button type="submit">Search</button>
        </form>
      )}

      {activePanel && (
        <div className="nav-popover nav-status" role="status">
          {activePanel === "wishlist" && <><strong>Wishlist</strong><p>Your wishlist is empty.</p></>}
          {activePanel === "cart" && <><strong>Shopping cart</strong><p>Your cart is empty.</p></>}
          {activePanel === "no-results" && <><strong>No products found</strong><p>Try a different product name.</p></>}
        </div>
      )}
    </nav>
  );
}

export default Nav;

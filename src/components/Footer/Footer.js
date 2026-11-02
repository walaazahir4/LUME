import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <h2>LUMÉ</h2>

          <p>
            Beauty made simple, elegant,
            and effortlessly yours.
          </p>

          <div className="socials">
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Pinterest</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>

          <a href="/">Skincare</a>
          <a href="/">Makeup</a>
          <a href="/">Fragrance</a>
          <a href="/">New Arrivals</a>
        </div>

        <div className="footer-column">
          <h3>About</h3>

          <a href="/">Our Story</a>
          <a href="/">Contact Us</a>
          <a href="/">FAQ</a>
          <a href="/">Shipping</a>
        </div>

        <div className="footer-column">
          <h3>Help</h3>

          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Returns</a>
          <a href="/">Support</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 LUMÉ. All rights reserved.
        </p>

        <span>
          Made with ♡
        </span>
      </div>

    </footer>
  );
}

export default Footer;
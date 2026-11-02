function Header(){
    return(
 <section className="hero" style={{height: "100vh"}}>
      <div className="hero-content">
        <span className="hero-subtitle">NEW BEAUTY COLLECTION</span>

        <h1>
          Beauty that
          <span> feels like you.</span>
        </h1>

        <p>
          Discover our carefully curated collection of skincare,
          makeup and beauty essentials designed to make you glow.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Collection</button>
          <button className="secondary-btn">Explore Products</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow"></div>

        <div className="product-card product-one">
          <div className="bottle"></div>
          <span>Glow Serum</span>
        </div>

        <div className="product-card product-two">
          <div className="jar"></div>
          <span>Skin Cream</span>
        </div>

        <div className="floating-circle circle-one"></div>
        <div className="floating-circle circle-two"></div>
      </div>
    </section>    )
}

export default Header;
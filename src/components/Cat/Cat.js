import "./Cat.css";
const products = [
  {
    id: 1,
    name: "Glow Serum",
    category: "Skincare",
    price: 28,
    image: "/images/serum.png",
  },
  {
    id: 2,
    name: "Velvet Lipstick",
    category: "Makeup",
    price: 22,
    image: "/images/lipstick.png",
  },
  {
    id: 3,
    name: "Hydrating Cream",
    category: "Skincare",
    price: 32,
    image: "/images/cream.png",
  },
  {
    id: 4,
    name: "Rose Perfume",
    category: "Fragrance",
    price: 45,
    image: "/images/perfume.png",
  },
];
function Cat(){
    return(
 <section className="best-sellers">
      <div className="section-header">
        <div>
          <span>OUR FAVORITES</span>
          <h2>Best Sellers</h2>
        </div>

        <button className="view-all">
          View All →
        </button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="header-product-card" key={product.id}>
            
            <div className="product-image">
              <img src={product.image} alt={product.name} />

              <button className="wishlist">
                ♡
              </button>
            </div>

            <div className="product-info">
              <p>{product.category}</p>

              <h3>{product.name}</h3>

              <div className="product-bottom">
                <span>${product.price}</span>

                <button className="add-btn">
                  +
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
    )
}

export default Cat;

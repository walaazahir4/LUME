import "./NewArrivals.css";

function NewArrivals() {
  
  const newProducts = [
    {
      id: 1,
      name: "Silk Face Oil",
      category: "Skincare",
      price: 35,
      image: "/images/faceOil.png",
    },
    {
      id: 2,
      name: "Nude Blush",
      category: "Makeup",
      price: 24,
      image: "/images/blusher.png",
    },
    {
      id: 3,
      name: "Vanilla Mist",
      category: "Fragrance",
      price: 30,
      image: "/images/mist.png",
    },
  ];
  
  return (
    <section className="new-arrivals">
      <div className="new-arrivals-header">
        <div>
          <span>JUST IN</span>
          <h2>New Arrivals</h2>
        </div>

        <p>
          Discover our latest beauty essentials, carefully selected for you.
        </p>
      </div>

      <div className="new-products-grid">
        {newProducts.map((product) => (
          <div className="new-product-card" key={product.id}>
            <div className="new-product-image">
              <img src={product.image} alt={product.name} />

              <span className="new-badge">NEW</span>
            </div>

            <div className="new-product-info">
              <p>{product.category}</p>

              <h3>{product.name}</h3>

              <div className="new-product-bottom">
                <span>${product.price}</span>

                <button>Shop Now →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default NewArrivals;

import "./NewArrivals.css";
import Crud from "../shared/Crud/Crud";

function NewArrivals() {
  const sayHello = () => {
    return "Hello Lolo";
  };

  const sayEngez = () => {
    return "Hello Engez";
  };
  const newProducts = [
    {
      id: 1,
      name: "Silk Face Oil",
      category: "Skincare",
      price: 35,
      image: "🌸",
    },
    {
      id: 2,
      name: "Nude Blush",
      category: "Makeup",
      price: 24,
      image: "🩷",
    },
    {
      id: 3,
      name: "Vanilla Mist",
      category: "Fragrance",
      price: 30,
      image: "🌷",
    },
  ];
  const Posts = [
    { id: 1, title: "title one", desc: "desc one" },
    { id: 2, title: "title two", desc: "desc two" },
    { id: 3, title: "title three", desc: "desc three" },
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
              <span>{product.image}</span>

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

      <div>
        <Crud />
      </div>
    </section>
  );
}

export default NewArrivals;

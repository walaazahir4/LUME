import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <span>STAY IN THE GLOW</span>

        <h2>Beauty delivered to your inbox.</h2>

        <p>
          Get beauty tips, new arrivals, and exclusive offers
          straight to your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
          />

          <button>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
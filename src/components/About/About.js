import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <span>WHY LUMÉ</span>

        <h2>
          Beauty that feels
          <em> effortless.</em>
        </h2>

        <p>
          At LUMÉ, we believe beauty should be simple, elegant,
          and made for every day. Our carefully selected products
          bring together quality ingredients and timeless beauty.
        </p>

        <button className="about-btn">
          Discover Our Story →
        </button>
      </div>

      <div className="about-features">
        <div className="feature">
          <span>✦</span>
          <h3>Quality First</h3>
          <p>
            Carefully selected products you can trust.
          </p>
        </div>

        <div className="feature">
          <span>♡</span>
          <h3>Made With Love</h3>
          <p>
            Beauty essentials chosen with care.
          </p>
        </div>

        <div className="feature">
          <span>✧</span>
          <h3>Simple Beauty</h3>
          <p>
            Effortless products for your everyday routine.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
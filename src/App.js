import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Header from "./components/Header/Header.js";
import Cat from "./components/Cat/Cat.js";
import NewArrivals from "./components/NewArrivals/NewArrivals.js";
import About from "./components/About/About.js";
import Newsletter from "./components/Newsletter/Newsletter.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <section id="home">
        <Nav />
      </section>

      <section id="header">
        <Header />
      </section>

      <section id="cat">
        <Cat />
      </section>

      <section id="newArrivals">
        <NewArrivals />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="newsletter">
        <Newsletter />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;

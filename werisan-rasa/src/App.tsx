import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import RegionExplorer from "./components/RegionExplorer";
import Menu from "./components/Menu";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="hero-divider" aria-hidden="true">
          <div className="container hero-divider__inner">
            <span className="hero-divider__brand">Wérisan Rasa</span>
          </div>
        </div>
        <About />
        <RegionExplorer />
        <Menu />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

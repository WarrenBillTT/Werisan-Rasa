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

import Blog from "./components/Blog";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Travel from "./components/Travel";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Blog />
      <Gallery />
      <Travel />
      <Footer />
    </>
  );
}

export default App;

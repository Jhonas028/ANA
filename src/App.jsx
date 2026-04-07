import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Travel from "./components/Travel";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import TravelDetail from "./pages/TravelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <About />
              <Blog />
              <Gallery />
              <Travel />
              <Footer />
            </>
          }
        />
        {/* Travel Detail Page */}
        <Route path="/travel/:slug" element={<TravelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
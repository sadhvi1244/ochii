import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Features />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

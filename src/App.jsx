import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Ready from "./components/Ready";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-700 text-white ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Features />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
};

export default App;

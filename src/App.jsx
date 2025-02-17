import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
    </div>
  );
};

export default App;

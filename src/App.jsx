import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { partnersLogo } from "./data/partners";
import Slider from "./components/Slider";
import RoadMapSection from "./components/RoadMapSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15"></div>
        <img
          src="/mesh.svg"
          alt="Mesh"
          className="absolute bottom-1 h-[600px] opacity-15 z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20">
        <NavBar />
        <div className="container mx-auto">
          <HeroSection />
          <Slider images={partnersLogo} />
          <RoadMapSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

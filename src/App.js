import Contact from "./components/contact/Contact";
import Counters from "./components/counters/Counters";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import LatestPro from "./components/latest-pro/LatestPro";
import Navbar from "./components/navbar/Navbar";
import OurExperties from "./components/our-experties/OurExperties";
import OurWork from "./components/our-work/OurWork";
import Pricing from "./components/pricing/Pricing";
import Sponsors from "./components/sponsors/Sponsors";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import WeAreWavex from "./components/we-are-wavex/WeAreWavex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WeAreWavex />
      <OurExperties />
      <Team />
      <Counters />
      <OurWork />
      <LatestPro />
      <Testimonials />
      <Pricing />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

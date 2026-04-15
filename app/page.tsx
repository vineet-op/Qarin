import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Growth from "./components/Growth";
import Meet from "./components/Meet";
import Features from "./components/Features";
import Works from "./components/Works";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import News from "./components/News";
import Footer from "./components/Footer";
import Integrations from "./components/Integrations";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <Hero />
      <Meet />
      <Growth />
      <Features />
      <Works />
      <HowItWorks />
      <Testimonials />
      <Integrations />
      <Pricing />
      <Questions />
      <News />
      <Footer />
    </div>
  );
}

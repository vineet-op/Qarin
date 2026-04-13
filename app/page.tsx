import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Growth from "./components/Growth";
import Meet from "./components/Meet";
import Features from "./components/Features";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <Hero />
      <Meet />
      <Growth />
      <Features />
      <Works />
    </div>
  );
}

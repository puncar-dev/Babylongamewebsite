import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { ProblemStatement } from "./components/ProblemStatement";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Technology } from "./components/Technology";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Whitepaper } from "./components/Whitepaper";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  if (currentPath === '/whitepaper') {
    return <Whitepaper />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Story />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Technology />
      <CTA />
      <Footer />
    </div>
  );
}
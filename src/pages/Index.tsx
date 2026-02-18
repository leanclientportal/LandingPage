import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import TrustSection from "@/components/TrustSection";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <UseCases />
      <Features />
      <TrustSection />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

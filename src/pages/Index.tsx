import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import PricingSnapshot from "@/components/PricingSnapshot";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import LeadCapture from "@/components/LeadCapture";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowWeWork />
        <PricingSnapshot />
        <Portfolio />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

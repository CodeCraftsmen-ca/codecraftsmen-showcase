import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Insurers from "@/components/Insurers";
import FAQ from "@/components/FAQ";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Insurers />
      <FAQ />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

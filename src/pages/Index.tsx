import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StudioSection from "@/components/StudioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-orange-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StudioSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

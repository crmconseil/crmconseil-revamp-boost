import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

const IndexEN = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="CRM Conseil | Commercial Performance & CSR Consulting - Nice, Monaco, Cannes"
        description="Expert consultant in commercial performance and CSR for SMEs. Carbon footprint, sustainable strategy, commercial development. Personalized support in Nice, Monaco, Cannes."
        keywords="commercial consultant, CSR consultant, carbon footprint SME, sustainable development, commercial strategy, Nice Monaco Cannes"
        canonical="/en"
      />
      <StructuredData type="organization" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExpertiseSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexEN;
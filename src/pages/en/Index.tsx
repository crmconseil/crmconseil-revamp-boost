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
        title="CRM Conseil | Commercial Performance & CSR Expert - Nice, Monaco, Cannes"
        description="15 years of expertise in sustainable commercial development. ADEME Carbon Footprint certification. Personalized CSR support for innovative startups and SMEs across Europe."
        keywords="commercial CSR consulting, sustainable commercial strategy, ADEME carbon footprint, sustainable business development, CSR startup SME, commercial consultant Nice Monaco, ethical commercial performance, environmental certification"
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
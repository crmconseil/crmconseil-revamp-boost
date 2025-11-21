import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="CRM Conseil - Expert Développement Commercial & RSE | Optimisation CRM Business"
        description="Expert en développement commercial durable et RSE depuis 15 ans. Conseil en optimisation commerciale, CRM, business development, bilan carbone et transition durable pour startups et PME. Solutions écologie et durabilité certifiées."
        keywords="développement commercial, optimisation commerciale, CRM, business development, RSE, transition durable, durabilité, écologie, bilan carbone, conseil commercial, consultant CRM, stratégie RSE, accompagnement durable"
        canonical="/"
      />
      <StructuredData type="organization" />
      <Header />
      <main role="main">
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

export default Index;
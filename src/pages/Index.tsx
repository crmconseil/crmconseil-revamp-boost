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
        title="CRM Conseil - Expert Stratégie Commerciale & RSE | Nice Monaco Cannes"
        description="Expert en stratégie commerciale durable depuis 15 ans. Accompagnement RSE, bilan GES, développement commercial pour startups et PME. Certification environnementale garantie."
        keywords="conseil commercial RSE, stratégie commerciale durable, bilan GES, développement durable entreprise, RSE startup PME, consultant commercial Nice Monaco, performance commerciale éthique, certification environnementale"
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
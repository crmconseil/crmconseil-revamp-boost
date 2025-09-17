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
        title="CRM Conseil - Performance Commerciale Durable | Accompagnement Startups & PME"
        description="CRM Conseil accompagne les startups et PME innovantes avec une approche unique alliant performance commerciale et développement durable. Expertise RSE, bilan carbone, stratégie commerciale à Nice, Cannes, Monaco."
        keywords="conseil commercial, RSE, développement durable, startup, PME, performance commerciale, bilan carbone, stratégie commerciale, accompagnement entreprise, Nice, Cannes, Monaco"
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
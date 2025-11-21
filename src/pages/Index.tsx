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
        title="CRM Conseil Monaco Nice Cannes | Expert Développement Commercial & RSE PACA"
        description="Expert développement commercial et RSE à Monaco, Nice, Cannes, Menton, Grasse, Toulon. Conseil en optimisation commerciale, CRM, business development, bilan carbone et transition durable pour startups et PME en région PACA. Solutions durabilité certifiées."
        keywords="développement commercial Monaco, optimisation commerciale Nice, CRM Cannes, business development PACA, RSE Monaco, transition durable Côte d'Azur, conseil commercial Nice, consultant CRM Monaco, bilan carbone région PACA, durabilité Cannes, écologie Monaco Nice, stratégie RSE Alpes-Maritimes, accompagnement durable Menton Grasse Toulon"
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
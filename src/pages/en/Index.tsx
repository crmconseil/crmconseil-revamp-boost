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
        title="CRM Conseil | Commercial Development & CSR Expert - CRM Business Optimization"
        description="15 years of expertise in sustainable commercial development and CSR. Business development consulting, CRM optimization, carbon assessment, sustainable transition. Certified ecology and sustainability solutions for startups and SMEs."
        keywords="commercial development, business optimization, CRM, business development, CSR, sustainable transition, sustainability, ecology, carbon assessment, business consulting, CRM consultant, CSR strategy"
        canonical="/en"
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

export default IndexEN;
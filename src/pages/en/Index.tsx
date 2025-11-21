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
        title="CRM Conseil | Sales Optimization & CSR Expert - Business Development Consulting"
        description="15 years of expertise in sales optimization, business development and sustainable transition. CRM consulting, sales automation, climate change action, sustainability strategy. Certified sales results and sustainability solutions for startups and SMEs."
        keywords="sales optimization, business development, CRM, sales results, sales automation, climate change, sustainability, sustainable transition, CSR, business consulting"
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
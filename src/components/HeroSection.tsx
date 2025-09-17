import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-business-sustainability.jpg";

export const HeroSection = () => {
  const { language, t } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Section principale - Performance commerciale durable"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="CRM Conseil - Performance commerciale durable et stratégie RSE pour startups innovantes"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <header className="max-w-4xl mx-auto">
          {/* Tagline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('hero.title')}{" "}
            <span className="text-primary-glow">{t('hero.title_highlight')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="text-commercial-light" size={20} />
              <span className="text-white font-medium">{t('hero.commercial_performance')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="text-sustainable-light" size={20} />
              <span className="text-white font-medium">{t('hero.sustainable_development')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Actions principales">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToServices}
              className="group"
              aria-label="Découvrir nos services de conseil commercial et RSE"
            >
              {t('common.discover_services')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="outline-sustainable" 
              size="lg"
              onClick={() => window.location.href = getLocalizedPath('/contact')}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              aria-label="Contacter CRM Conseil pour un accompagnement personnalisé"
            >
              {t('common.contact_us')}
            </Button>
          </nav>
        </header>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
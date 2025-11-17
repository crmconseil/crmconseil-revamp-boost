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
          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="block">
              Et si vos engagements de{" "}
              <span className="text-sustainable-light">Durabilité</span>
            </span>
            <span className="block">
              devenaient l'accélérateur de vos{" "}
              <span className="text-sustainable-light">résultats commerciaux</span>
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="text-commercial-light" size={20} />
              <span className="text-white font-medium">{t('hero.commercial_performance')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="text-sustainable-light" size={20} />
              <span className="text-white font-medium">{t('hero.sustainable_development')}</span>
            </div>
          </div>
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
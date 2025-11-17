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
      className="relative pt-20 md:pt-24 min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <header className="max-w-4xl mx-auto py-8 md:py-0">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight px-2">
            <span className="block mb-1 md:mb-2">
              Et si vos engagements de{" "}
              <span className="text-sustainable-light">Durabilité</span>
            </span>
            <span className="block">
              devenaient l'accélérateur de vos{" "}
              <span className="text-sustainable-light">résultats commerciaux</span> ?
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {t('hero.description')}
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-2">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
              <TrendingUp className="text-commercial-light" size={18} />
              <span className="text-white font-medium">{t('hero.commercial_performance')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
              <Leaf className="text-sustainable-light" size={18} />
              <span className="text-white font-medium">{t('hero.sustainable_development')}</span>
            </div>
          </div>
        </header>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
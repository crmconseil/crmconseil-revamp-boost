import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import crmLogo from "@/assets/crm-conseil-logo.jpg";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, t } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-primary/20" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href={getLocalizedPath('/')} aria-label="CRM Conseil - Retour à l'accueil">
              <img 
                src={crmLogo} 
                alt="CRM Conseil - Logo de l'entreprise spécialisée en performance commerciale durable" 
                className="h-16 w-auto"
                width="64"
                height="64"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navigation principale">
            <a
              href={getLocalizedPath('/')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </a>
            <a
              href={getLocalizedPath('/nos-services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.services')}
            </a>
            <a
              href={getLocalizedPath('/a-propos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </a>
            <a
              href={getLocalizedPath('/contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = getLocalizedPath('/book-appointment')}
            >
              {t('nav.appointment')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href={getLocalizedPath('/')}
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a
                href={getLocalizedPath('/nos-services')}
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href={getLocalizedPath('/a-propos')}
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href={getLocalizedPath('/contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="flex items-center justify-center py-2">
                <LanguageSelector />
              </div>
              <Button 
                variant="outline" 
                className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = getLocalizedPath('/book-appointment');
                }}
              >
                {t('nav.appointment')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
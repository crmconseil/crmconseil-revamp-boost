import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import logoImage from "@/assets/crm-conseil-logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (type: 'services' | 'about') => {
    if (isHomePage) {
      // On homepage, scroll to anchor
      const sectionId = type === 'services' ? 'services' : 'expertise';
      scrollToSection(sectionId);
    } else {
      // On other pages, navigate to dedicated page
      const path = type === 'services' ? '/nos-services' : '/a-propos';
      window.location.href = path;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="CRM Conseil Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </a>
            <button
              onClick={() => handleNavigation('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              À Propos
            </button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Nous contacter
            </Button>
          </nav>

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
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <button
                onClick={() => handleNavigation('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                À Propos
              </button>
              <Button 
                variant="outline"
                className="w-fit border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '/contact';
                }}
              >
                Nous contacter
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
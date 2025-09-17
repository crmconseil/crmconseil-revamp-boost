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


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-primary/20" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" aria-label="CRM Conseil - Retour à l'accueil">
              <img 
                src={logoImage} 
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
              href="/"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Page d'accueil CRM Conseil"
            >
              Accueil
            </a>
            <a
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Nos services de conseil commercial et RSE"
            >
              Services
            </a>
            <a
              href="/a-propos"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="À propos de CRM Conseil et notre expertise"
            >
              Qui sommes-nous
            </a>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = '/rendez-vous'}
            >
              Prendre rendez-vous
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
              <a
                href="/services"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/a-propos"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Qui sommes-nous
              </a>
              <Button 
                variant="outline"
                className="w-fit border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '/rendez-vous';
                }}
              >
                Prendre rendez-vous
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/crm-conseil-logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-foreground hover:text-primary transition-colors"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Références
            </button>
            <a
              href="/engagements-rse"
              className="text-foreground hover:text-primary transition-colors"
            >
              Nos engagements RSE
            </a>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = '/#contact'}
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
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('expertise')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection('references')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Références
              </button>
              <a
                href="/engagements-rse"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos engagements RSE
              </a>
              <Button 
                variant="outline"
                className="w-fit border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = '/#contact'}
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
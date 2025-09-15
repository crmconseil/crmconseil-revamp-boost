import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-business-sustainability.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Votre partenaire pour une{" "}
            <span className="text-primary-glow">Performance commerciale durable</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accompagnement commercial stratégique et opérationnel pour startups et PME innovantes, 
            alliant optimisation commerciale et valorisation d'une stratégie RSE tangible.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="text-commercial-light" size={20} />
              <span className="text-white font-medium">Performance Commerciale</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="text-sustainable-light" size={20} />
              <span className="text-white font-medium">Développement Durable</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToServices}
              className="group"
            >
              Découvrir nos services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="outline-sustainable" 
              size="lg"
              onClick={scrollToContact}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Nous contacter
            </Button>
          </div>
        </div>
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
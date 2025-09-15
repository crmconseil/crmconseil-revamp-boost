import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Brain, 
  Heart, 
  Monitor,
  Building2,
  Users,
  ArrowRight
} from "lucide-react";
import portfolioBackground from "@/assets/portfolio-background.jpg";
import actionAirLogo from "@/assets/logos/action-air.jpg";
import mycophytoLogo from "@/assets/logos/mycophyto.png";
import tethysLogo from "@/assets/logos/tethys.jpg";
import hydroLogo from "@/assets/logos/hydro.jpeg";
import inalveLogo from "@/assets/logos/inalve.png";
import laPousseraieLogo from "@/assets/logos/la-pousseraie.jpg";
import lumataLogo from "@/assets/logos/lumata.png";
import daiaLogo from "@/assets/logos/daia.jpg";
import himydataLogo from "@/assets/logos/himydata.png";
import arcanSecurityLogo from "@/assets/logos/arcan-security.jpg";
import lifescientisLogo from "@/assets/logos/lifescientis.png";
import poleScsLogo from "@/assets/logos/pole-scs.png";
import incubateurPacaLogo from "@/assets/logos/incubateur-paca.png";
import monacoTechLogo from "@/assets/logos/monacotech.png";
import poleMerLogo from "@/assets/logos/pole-mer.png";
import terresAzurLogo from "@/assets/logos/terres-azur.png";
import metropoleNiceLogo from "@/assets/logos/metropole-nice.png";

export const PortfolioSection = () => {
  const sectors = [
    {
      icon: Leaf,
      title: "GreenTech",
      color: "text-sustainable",
      bgColor: "bg-sustainable-light",
      companies: ["ActionAir", "Mycophyto", "Tethys", "Hydro", "Inalve", "La Pousseraie"],
      description: "Technologies environnementales et solutions durables"
    },
    {
      icon: Brain,
      title: "DeepTech / IA",
      color: "text-commercial",
      bgColor: "bg-commercial-light",
      companies: ["Lumata", "Daia", "HimyData", "Arcan Security"],
      description: "Intelligence artificielle et technologies avancées"
    },
    {
      icon: Heart,
      title: "HealthTech",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      companies: ["LifeScientis", "Laselis", "Centre Laser Esthétique"],
      description: "Technologies médicales et e-santé"
    },
    {
      icon: Monitor,
      title: "IT / Digital",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      companies: ["Tekoway", "Make IT Simple", "Buongiorno", "Orange"],
      description: "Solutions digitales et transformation numérique"
    }
  ];

  const partners = [
    { name: "Pôle SCS", type: "Réseau Innovation" },
    { name: "Incubateur Paca-Est", type: "Incubateur" },
    { name: "MonacoTech", type: "Startup Program" },
    { name: "Pôle Mer", type: "Financement" },
    { name: "Initiative Terres d'Azur Grasse", type: "Hub Innovation" },
    { name: "Innovation Hub Nice Côte d'Azur", type: "Collectivité" }
  ];

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portfolioBackground})` }}
      >
        <div className="absolute inset-0 bg-background/92"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Références
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portfolio diversifié d'accompagnements réussis dans l'innovation et la durabilité
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${sector.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className={sector.color} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{sector.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{sector.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {sector.companies.map((company, idx) => {
                      const getCompanyLogo = (companyName: string) => {
                        switch(companyName) {
                          case "ActionAir":
                            return actionAirLogo;
                          case "Mycophyto":
                            return mycophytoLogo;
                          case "Tethys":
                            return tethysLogo;
                          case "Hydro":
                            return hydroLogo;
                          case "Inalve":
                            return inalveLogo;
                          case "La Pousseraie":
                            return laPousseraieLogo;
                          case "Lumata":
                            return lumataLogo;
                          case "Daia":
                            return daiaLogo;
                          case "HimyData":
                            return himydataLogo;
                          case "Arcan Security":
                            return arcanSecurityLogo;
                          case "LifeScientis":
                            return lifescientisLogo;
                          default:
                            return null;
                        }
                      };
                      
                      const logoSrc = getCompanyLogo(company);
                      
                      return logoSrc ? (
                        <div key={idx} className="flex items-center justify-center h-16 bg-white/50 rounded-lg p-3">
                          <img 
                            src={logoSrc} 
                            alt={`${company} logo`}
                            className="max-h-12 max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <Badge key={idx} variant="secondary" className="text-sm justify-center py-2">
                          {company}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nos Partenaires
          </h3>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {partners.map((partner, index) => {
                // Map partner names to imported logos
                const getPartnerLogo = (name: string) => {
                  switch(name) {
                    case "Pôle SCS":
                      return poleScsLogo;
                    case "Incubateur Paca-Est":
                      return incubateurPacaLogo;
                    case "MonacoTech":
                      return monacoTechLogo;
                    case "Pôle Mer":
                      return poleMerLogo;
                    case "Initiative Terres d'Azur Grasse":
                      return terresAzurLogo;
                    case "Innovation Hub Nice Côte d'Azur":
                      return metropoleNiceLogo;
                    default:
                      return null;
                  }
                };

                const logoSrc = getPartnerLogo(partner.name);
                
                return (
                  <div key={index} className="flex items-center justify-center h-16 w-32 hover:scale-110 transition-transform group">
                    {logoSrc ? (
                      <img 
                        src={logoSrc} 
                        alt={`${partner.name} logo`}
                        className="max-h-14 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <Building2 className="text-muted-foreground group-hover:text-primary transition-colors" size={32} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Startups accompagnées</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sustainable mb-2">4</div>
            <p className="text-muted-foreground">Secteurs d'expertise</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-commercial mb-2">25+</div>
            <p className="text-muted-foreground">Années d'expérience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">16M€</div>
            <p className="text-muted-foreground">Financements cumulés pour un client fidèle</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Rejoignez notre portfolio de clients innovants
          </p>
          <Button variant="sustainable" size="lg" className="group">
            Devenir client
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
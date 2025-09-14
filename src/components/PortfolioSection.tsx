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

export const PortfolioSection = () => {
  const sectors = [
    {
      icon: Leaf,
      title: "GreenTech",
      color: "text-sustainable",
      bgColor: "bg-sustainable-light",
      companies: ["ActionAir", "Mycophyto", "Tethys", "Hydro"],
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
    { name: "Initiative", type: "Financement" },
    { name: "Terres d'Azur Hub", type: "Hub Innovation" },
    { name: "Métropole Nice Côte d'Azur", type: "Collectivité" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
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
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Clients accompagnés :</h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.companies.map((company, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {company}
                      </Badge>
                    ))}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-center justify-center mb-3">
                  <Building2 className="text-primary group-hover:scale-110 transition-transform" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{partner.name}</h4>
                <Badge variant="outline" className="text-xs">{partner.type}</Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
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
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <p className="text-muted-foreground">Partenaires stratégiques</p>
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
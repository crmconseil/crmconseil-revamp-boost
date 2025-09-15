import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Settings, 
  Leaf, 
  BarChart3, 
  Shield,
  ArrowRight,
  Users,
  Lightbulb,
  Award
} from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions personnalisées pour votre croissance et développement durable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Commercial Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-commercial mb-4 leading-tight">
                Optimisation<br />commerciale
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Target className="text-commercial" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Ciblage / Acquisition</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Optimisation du discours et ciblage commercial</li>
                      <li>• Étude de marché</li>
                      <li>• Génération de leads externalisée</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-commercial" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Accélération / Valorisation</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Levée de fonds</li>
                      <li>• Choix d'outils CRM/ERP</li>
                      <li>• Accélération du pipeline</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Settings className="text-commercial" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Optimisation des process</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Audit des outils et process commerciaux</li>
                      <li>• Accompagnement au changement</li>
                      <li>• Formation des équipes commerciales</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* En savoir plus button for Commercial */}
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/services#commercial-services'}
              >
                En savoir plus
                <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
              </Button>
            </div>
          </div>

          {/* RSE/Sustainability Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sustainable mb-4">
                Accompagnement RSE / Durabilité
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-sustainable" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Bilan Emissions Directes - Scope 1</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Analyse Impact Carbone direct</li>
                      <li>• Analyse Impact Social</li>
                      <li>• Modélisation de scénarios</li>
                      <li>• Suivi d'impacts</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Shield className="text-sustainable" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Bilan RSE Complet - Scope 1, 2, 3</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Impacts Carbone et Sociaux Directs/Indirects</li>
                      <li>• Double matérialité - impacts et vulnérabilité</li>
                      <li>• Scénarios et calcul de ROI</li>
                      <li>• Suivi plan d'action</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Leaf className="text-sustainable" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Bilan Impact Biodiversité</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Impacts directs et indirects sur la biodiversité</li>
                      <li>• Matrice de matérialité Biodiversité</li>
                      <li>• Modélisation de scénarios</li>
                      <li>• Suivi d'impacts</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* En savoir plus button for RSE */}
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/services#rse-services'}
              >
                En savoir plus
                <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-muted mt-16 pt-16"></div>

        {/* Statistics moved from Portfolio */}
        <div className="grid md:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};
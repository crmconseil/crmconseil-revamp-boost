import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Target,
  Handshake,
  Calendar,
  Leaf,
  ArrowRight,
  Lightbulb,
  Award,
  CheckCircle,
  Zap,
  Cpu,
  Activity,
  Cog,
  Globe,
  BarChart3,
  Settings,
  FileText,
  Presentation,
  MessageSquare,
  Phone
} from "lucide-react";
import servicesImage from "@/assets/services-background.jpg";

const Services = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const commercialServices = [
    {
      icon: Target,
      title: "Ciblage / Acquisition",
      description: "Identification et qualification de prospects qualifiés pour optimiser votre taux de conversion",
      features: ["Analyse de marché", "Segmentation clients", "Stratégies d'acquisition", "Qualification prospects"]
    },
    {
      icon: TrendingUp,
      title: "Accélération / Valorisation",
      description: "Optimisation du cycle de vente et valorisation de votre proposition de valeur",
      features: ["Optimisation du tunnel de vente", "Argumentation commerciale", "Techniques de closing", "Suivi performance"]
    },
    {
      icon: Settings,
      title: "Optimisation des process",
      description: "Structuration et automatisation de vos processus commerciaux pour une efficacité maximale",
      features: ["Mise en place CRM", "Automatisation workflow", "KPIs commerciaux", "Formation équipes"]
    }
  ];

  const rseServices = [
    {
      icon: BarChart3,
      title: "Bilan Emissions Directes - Scope 1",
      description: "Mesure précise de vos émissions directes pour un premier niveau de diagnostic environnemental",
      features: ["Audit énergétique", "Calcul empreinte carbone", "Plan d'action immédiat", "Reporting réglementaire"]
    },
    {
      icon: Globe,
      title: "Bilan RSE Complet - Scope 1, 2, 3",
      description: "Analyse complète de votre impact environnemental et social avec stratégie d'amélioration",
      features: ["Bilan carbone complet", "Matrice de matérialité", "Stratégie RSE", "ROI développement durable"]
    },
    {
      icon: Leaf,
      title: "Bilan Impact Biodiversité",
      description: "Évaluation de votre impact sur la biodiversité avec plan d'action concret",
      features: ["Diagnostic biodiversité", "Mesure d'impact", "Plan d'amélioration", "Compensation carbone"]
    }
  ];

  const operationalServices = [
    {
      icon: Handshake,
      title: "Audit externe et accompagnement terrain",
      description: "Analyse neutre de vos processus + accompagnement opérationnel lors de rendez-vous prospects"
    },
    {
      icon: Cog,
      title: "Configuration pratique d'outils CRM/ERP",
      description: "Installation, paramétrage et formation sur site pour une prise en main immédiate"
    },
    {
      icon: FileText,
      title: "Création de supports commerciaux sur mesure",
      description: "Slides de présentation, argumentaires et outils de vente adaptés à vos prospects"
    },
    {
      icon: Users,
      title: "Formations terrain et coaching",
      description: "Formation de vos équipes directement sur leurs projets réels avec suivi personnalisé"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnostic Initial",
      description: "Audit complet de votre situation commerciale et RSE actuelle",
      icon: Presentation
    },
    {
      step: "02", 
      title: "Stratégie Personnalisée",
      description: "Élaboration d'un plan d'action sur mesure adapté à vos objectifs",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Mise en Œuvre Terrain",
      description: "Accompagnement opérationnel direct avec vos équipes",
      icon: Settings
    },
    {
      step: "04",
      title: "Suivi & Optimisation",
      description: "Mesure des résultats et ajustements pour une amélioration continue",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesImage})` }}
        >
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services alliant performance commerciale et responsabilité environnementale. 
              Un accompagnement terrain et opérationnel pour transformer vos défis en opportunités durables.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section id="commercial-services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Services Commerciaux</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Optimisez votre performance commerciale avec nos méthodes éprouvées adaptées aux entreprises innovantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {commercialServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* RSE Services Section */}
      <section id="rse-services" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Services RSE & Durabilité</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intégrez une démarche RSE performante et mesurable pour faire de la durabilité votre avantage concurrentiel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-sustainable/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-sustainable" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="text-sustainable mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Notre Approche Opérationnelle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un accompagnement concret et personnalisé pour des résultats mesurables immédiatement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {operationalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="text-primary" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Notre Processus d'Accompagnement</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une méthodologie éprouvée en 4 étapes pour garantir votre succès.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sustainable/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à booster votre performance ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrons ensemble comment nos services peuvent transformer votre approche commerciale et RSE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="sustainable" 
              size="lg" 
              className="group"
              onClick={scrollToContact}
            >
              Réserver une consultation gratuite
              <Calendar className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={scrollToContact}
            >
              Discuter de votre projet
              <MessageSquare className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
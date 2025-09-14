import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Target,
  Euro,
  CheckCircle,
  Handshake,
  Calendar,
  Leaf,
  ArrowRight,
  Lightbulb,
  Award,
  Heart,
  Zap,
  Cpu,
  Activity,
  Cog
} from "lucide-react";
import heroImage from "@/assets/hero-sustainable-business.jpg";
import evolutionImage from "@/assets/evolution-histoire.png";

const About = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const keyStats = [
    { icon: Users, number: "100+", label: "Startups et PME innovantes accompagnées" },
    { icon: TrendingUp, number: "+27%", label: "Augmentation des résultats commerciaux" },
    { icon: Target, number: "4", label: "Secteurs d'expertise" },
    { icon: Euro, number: "16M€", label: "Financements cumulés pour un client fidèle" }
  ];

  const methods = [
    {
      title: "Audit externe et accompagnement terrain",
      description: "Analyse neutre de vos processus + accompagnement opérationnel lors de rendez-vous prospects"
    },
    {
      title: "Configuration pratique d'outils CRM/ERP",
      description: "Installation, paramétrage et formation sur site pour une prise en main immédiate"
    },
    {
      title: "Création de supports commerciaux sur mesure",
      description: "Slides de présentation, argumentaires et outils de vente adaptés à vos prospects"
    },
    {
      title: "Formations terrain et coaching opérationnel",
      description: "Formation de vos équipes directement sur leurs projets réels avec suivi personnalisé"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence Opérationnelle",
      description: "Nous nous engageons à livrer des résultats concrets et mesurables, en optimisant chaque aspect de votre stratégie commerciale."
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Nous intégrons les dernières technologies et méthodologies pour vous donner un avantage concurrentiel durable."
    },
    {
      icon: Heart,
      title: "Impact Durable",
      description: "Au-delà des performances commerciales, nous vous aidons à construire une entreprise responsable et pérenne."
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Création de CRM Conseil",
      description: "Fondation de l'entreprise avec un focus sur la performance commerciale de startups en utilisant des méthodes de grands comptes."
    },
    {
      year: "2018",
      title: "Tournant vers le Développement Durable",
      description: "Évolution naturelle vers l'accompagnement de sociétés orientées développement durable et greentech."
    },
    {
      year: "2019",
      title: "Expertise Levées de Fonds",
      description: "Développement de notre expertise en préparation et accompagnement aux levées de fonds."
    },
    {
      year: "2024",
      title: "Spécialisation RSE & Durabilité",
      description: "Spécialisation dans l'accompagnement des transformations RSE et stratégies de durabilité."
    }
  ];

  const sectors = [
    { icon: Leaf, title: "GreenTech", description: "Expertise sectorielle approfondie" },
    { icon: Activity, title: "HealthTech", description: "Expertise sectorielle approfondie" },
    { icon: Cog, title: "Industrie 4.0", description: "Expertise sectorielle approfondie" },
    { icon: Cpu, title: "Dev-AI", description: "Expertise sectorielle approfondie" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Développement Commercial B2B et{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                RSE Opérationnelle
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Depuis 2014, nous transformons votre croissance en alliant performance commerciale et impact durable. 
              Accompagnement terrain, création de supports sur mesure, configuration CRM/ERP et stratégies RSE concrètes : 
              nous faisons de la durabilité votre avantage concurrentiel.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-sustainable/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <IconComponent className="text-primary mx-auto mb-4" size={32} />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Notre Histoire</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  CRM Conseil a été créée en 2014 avec pour objectif d'appliquer les méthodes commerciales des grands comptes aux startups en phase de croissance. 
                  Cette approche innovante permettait aux jeunes entreprises de structurer efficacement leur développement commercial.
                </p>
                <p>
                  Vers 2018, nous avons naturellement évolué vers l'accompagnement de sociétés orientées développement durable et greentech, 
                  anticipant les enjeux de demain. Cette transition reflétait notre conviction que les entreprises responsables seraient les leaders de demain.
                </p>
                <p>
                  Aujourd'hui, après 10 ans d'évolution, nous sommes devenus les spécialistes de l'accompagnement commercial pour les entreprises 
                  qui placent la durabilité au cœur de leur stratégie de croissance.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-sustainable/10 p-4 rounded-lg">
              <img 
                src={evolutionImage} 
                alt="Évolution de CRM Conseil du commercial traditionnel vers l'approche RSE et durable"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  Chez CRM Conseil, nous ne donnons pas seulement des conseils : nous travaillons concrètement avec vous sur le terrain pour optimiser vos ventes.
                </p>
                <h3 className="text-xl font-bold text-foreground mb-4">Notre différence ?</h3>
                <p className="text-muted-foreground mb-4">
                  Nous créons vos slides, vous accompagnons en rendez-vous, configurons vos outils et formons vos équipes sur leurs projets réels.
                </p>
                <p className="text-primary font-semibold">
                  Un accompagnement 100% opérationnel pour des résultats immédiats.
                </p>
              </Card>
              
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  Finis les conseils théoriques sans mise en pratique !
                </p>
                <p className="text-muted-foreground">
                  CRM Conseil s'intègre à votre équipe pour transformer vos défis commerciaux en succès concrets : 
                  supports de vente personnalisés, accompagnement terrain et configuration d'outils adaptés à vos besoins.
                </p>
              </Card>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-sustainable/10 p-8 rounded-lg">
              <div className="aspect-square bg-background/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Handshake className="text-primary mx-auto mb-4" size={64} />
                  <p className="text-muted-foreground">2 personnes professionnelles qui se tapent dans la main</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Notre méthode d'accompagnement opérationnel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous travaillons main dans la main avec vos équipes pour des actions concrètes et des résultats mesurables immédiatement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {methods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/5 to-sustainable/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">Notre engagement terrain</h3>
            <p className="text-muted-foreground text-lg">
              Nous copilotons concrètement vos actions commerciales : création de supports, accompagnement en rendez-vous, 
              configuration d'outils et formations pratiques pour des résultats garantis.
            </p>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground">
              Ces principes fondamentaux guident chacune de nos actions et nous permettent de créer de la valeur durable pour nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Notre Évolution</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez les étapes clés qui ont façonné CRM Conseil et notre expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-4">{item.year}</div>
                <h3 className="text-lg font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Secteurs d'Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Nous concentrons notre expertise sur quatre secteurs d'avenir où innovation et durabilité se rencontrent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{sector.title}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
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
            Prêt à transformer votre approche commerciale ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous accompagner dans votre croissance tout en intégrant une démarche RSE performante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="sustainable" 
              size="lg" 
              className="group"
              onClick={scrollToContact}
            >
              Réserver une consultation
              <Calendar className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={scrollToContact}
            >
              Nous contacter
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
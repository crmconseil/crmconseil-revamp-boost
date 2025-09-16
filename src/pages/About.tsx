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
  Cog,
  Globe,
  Settings
} from "lucide-react";
import heroImage from "@/assets/hero-sustainable-business.jpg";
import evolutionImage from "@/assets/evolution-histoire.png";
import partenaireImage from "@/assets/partenariat-handshake.png";

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
      icon: Zap,
      title: "Création de supports commerciaux sur mesure",
      description: "Slides de présentation, argumentaires et outils de vente adaptés à vos prospects"
    },
    {
      icon: Users,
      title: "Formations terrain et coaching",
      description: "Formation de vos équipes directement sur leurs projets réels avec suivi personnalisé"
    },
    {
      icon: Globe,
      title: "Bilan RSE",
      description: "Analyse de vos process interne pour calcul de l'impact carbone, Matrice de double matérialité, modélisation de scénarii plus durable avec calcul ROI"
    },
    {
      icon: Leaf,
      title: "Bilan Biodiversité",
      description: "Calcul de votre impact Biodiversité et modélisation de plan d'action d'amélioration"
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
    { icon: Leaf, title: "GreenTech" },
    { icon: Activity, title: "HealthTech" },
    { icon: Cog, title: "Industrie 4.0" },
    { icon: Cpu, title: "Dev-AI" }
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

      {/* Expertise par secteurs */}
      <section id="expertise" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              Notre Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Des solutions éprouvées adaptées à votre secteur d'activité et à vos enjeux spécifiques, pour des résultats durables et mesurables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Leaf className="w-8 h-8 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">GreenTech</h3>
              <p className="text-sm text-muted-foreground text-center">
                Accompagnement des entreprises innovantes dans les technologies vertes et le développement durable pour optimiser leur impact commercial et environnemental.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">HealthTech</h3>
              <p className="text-sm text-muted-foreground text-center">
                Solutions commerciales dédiées aux entreprises de technologies de santé, dispositifs médicaux et innovations pharmaceutiques.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Settings className="w-8 h-8 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Industrie</h3>
              <p className="text-sm text-muted-foreground text-center">
                Optimisation des processus commerciaux et transformation digitale pour les acteurs industriels et manufacturiers.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Globe className="w-8 h-8 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Dev-AI</h3>
              <p className="text-sm text-muted-foreground text-center">
                Stratégies commerciales spécialisées pour les entreprises de développement logiciel et d'intelligence artificielle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20 relative">
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
            
            {/* Ligne verticale séparatrice */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-64 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            <div className="relative">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Notre Approche Terrain et Opérationnelle</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <p className="text-muted-foreground mb-4">
                  Chez CRM Conseil, nous ne donnons pas seulement des conseils : nous travaillons concrètement avec vous sur le terrain pour optimiser vos ventes.
                </p>
                <h3 className="text-xl font-bold text-foreground mb-4">Notre différence ?</h3>
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <p className="text-muted-foreground mb-4">
                    Nous créons vos slides, vous accompagnons en rendez-vous, configurons vos outils et formons vos équipes sur leurs projets réels.
                  </p>
                  <p className="text-primary font-semibold">
                    Un accompagnement 100% opérationnel pour des résultats immédiats.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Finis les conseils théoriques sans mise en pratique !</h3>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-muted-foreground">
                    CRM Conseil s'intègre à votre équipe pour transformer vos défis commerciaux en succès concrets : 
                    supports de vente personnalisés, accompagnement terrain et configuration d'outils adaptés à vos besoins.
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="relative">
              <img 
                src={partenaireImage} 
                alt="Deux professionnels se tapent dans la main pour célébrer leur partenariat"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Notre méthode d'accompagnement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous travaillons main dans la main avec vos équipes pour des actions concrètes et des résultats mesurables immédiatement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {methods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="text-primary" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{method.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{method.description}</p>
                </Card>
              );
            })}
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
      <section className="py-20 relative overflow-hidden">
        {/* Background with gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Notre Évolution</h2>
            <p className="text-xl text-white/90">
              Découvrez les étapes clés qui ont façonné CRM Conseil et notre expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-3xl font-bold text-sustainable-light mb-4">{item.year}</div>
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </Card>
            ))}
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
              onClick={() => window.location.href = '/contact'}
            >
              Nous contacter
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Section RSE - Nos Engagements */}
      <section className="py-20 bg-gradient-to-br from-sustainable/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
                Nos Engagements RSE et Développement Durable
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Chez CRM Conseil, nous ne nous contentons pas de conseiller : nous incarnons nos valeurs au quotidien
              </p>
            </div>

            {/* Nos Actions RSE en 4 piliers */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Pilier 1: Clients & Stratégie RSE */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Handshake className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    1. Clients & Stratégie RSE
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Ciblage clients / partenaires / fournisseurs avec engagements RSE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Adhérent Pacte National Transition Énergétique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Accompagnement et formation des équipes (MIT)</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 2: Transports Durables */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-full mr-4">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    2. Transports Durables
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Limitation des déplacements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Abonnements transports partagés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Vélo électrique d'entreprise</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 3: Sourcing Énergétique Propre */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Zap className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    3. Sourcing Énergétique Propre
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Électricité 100% renouvelable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Équipements/Matières 1ères recyclables/recyclés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>LED / Thermostats intelligents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Digitalisation des documents</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 4: Gestion des Déchets */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    4. Gestion des Déchets
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Tri sélectif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Compostage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>No Plastic</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services RSE */}
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
                  Nos Services d'Accompagnement RSE
                </h2>
                <p className="text-muted-foreground text-lg">
                  Des solutions concrètes pour mesurer et améliorer votre impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-primary/10 rounded-xl bg-muted/30">
                  <div className="p-4 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                    <Target className="w-8 h-8 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Bilan Émissions Directes - Scope 1</h3>
                  <div className="text-left text-xs space-y-2">
                    <h4 className="font-semibold">Livrables :</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Bilan carbone initial</li>
                      <li>• Rapport d'impact scénarii</li>
                      <li>• Matrice de suivi d'impact</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center p-6 border border-primary/10 rounded-xl bg-muted/30">
                  <div className="p-4 bg-primary/20 rounded-full w-fit mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Bilan RSE Complet</h3>
                  <div className="text-left text-xs space-y-2">
                    <h4 className="font-semibold">Livrables :</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Bilan Scope 1, 2, 3 initial</li>
                      <li>• Rapport des vulnérabilités ESG</li>
                      <li>• Rapport impact Scénarii+ROI</li>
                      <li>• Matrice de suivi d'impact</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center p-6 border border-primary/10 rounded-xl bg-muted/30">
                  <div className="p-4 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Impact Biodiversité</h3>
                  <div className="text-left text-xs space-y-2">
                    <h4 className="font-semibold">Approche :</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Double matérialité</li>
                      <li>• Impacts écologiques</li>
                      <li>• Impacts sociaux</li>
                      <li>• Gouvernance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                  Nos Certifications & Partenariats
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-sustainable mb-2">MIT Certification</h4>
                    <p className="text-xs text-muted-foreground">Sustainable Strategy Design</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">ADEME</h4>
                    <p className="text-xs text-muted-foreground">Partenaire Officiel</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-sustainable mb-2">Pacte National</h4>
                    <p className="text-xs text-muted-foreground">Transition Énergétique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
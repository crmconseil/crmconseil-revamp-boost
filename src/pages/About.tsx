import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
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
    { icon: TrendingUp, number: "+37%", label: "Augmentation des résultats commerciaux" },
    { icon: Target, number: "4", label: "Secteurs d'expertise" },
    { icon: Euro, number: "16M€", label: "Financements cumulés pour un client fidèle" }
  ];

  const methods = [
    {
      icon: Handshake,
      title: "Audit externe",
      points: [
        "1. Analyse neutre de vos processus",
        "2. Propositions d'optimisations",
        "3. Support à la mise en place",
        "4. Suivi des impacts"
      ]
    },
    {
      icon: Cog,
      title: "Configuration pratique d'outils",
      points: [
        "1. Analyse de vos outils existants",
        "2. Propositions d'outils complémentaires ou optimisations d'usages",
        "3. Configuration des outils",
        "4. Formation et suivi d'usage des équipes"
      ]
    },
    {
      icon: Zap,
      title: "Création de supports commerciaux",
      points: [
        "1. Analyse de vos supports existants",
        "2. Propositions d'optimisations",
        "3. Co-production des nouveaux supports",
        "4. Test des supports en RDV client"
      ]
    },
    {
      icon: Users,
      title: "Formation et coaching des équipes",
      points: [
        "1. Evaluation des compétences et méthodes des équipes commerciales",
        "2. Proposition de coaching ou formations spécifiques aux enjeux de l'équipe",
        "3. Déroulé de la formation",
        "4. Suivi d'impact terrain sur les ventes"
      ]
    },
    {
      icon: Globe,
      title: "Bilan Carbone",
      points: [
        "1. Analyse des impacts carbone existants",
        "2. Brainstorming corporate des changements plus durables",
        "3. Modélisation et analyse des impacts et ROI de chaque scénario",
        "4. Suivi de mise en place et impact KPIs"
      ]
    },
    {
      icon: Leaf,
      title: "Bilan Biodiversité",
      points: [
        "1. Analyse de l'impact biodiversité existant",
        "2. Co-Construction d'une feuille de route d'évolution",
        "3. Modélisation et analyse des impacts et ROI de chaque option",
        "4. Suivi de mise en place et impacts KPIs"
      ]
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
      <SEOHead 
        title="À Propos - CRM Conseil | Expertise Performance Commerciale Durable"
        description="Découvrez CRM Conseil et Sabrina Broggini. Expert certifié en accompagnement commercial et RSE pour startups et PME. Plus de 100 entreprises accompagnées vers la performance durable."
        keywords="à propos CRM conseil, Sabrina Broggini, expert commercial RSE, accompagnement PME startups, consultant développement durable"
        canonical="/a-propos"
      />
      <StructuredData type="organization" />
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
              De l'optimisation commerciale à la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                valorisation RSE
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Depuis 2014, CRM Conseil accompagne la croissance de startups et PMEs innovantes et engagées. 
              Passez dès aujourd'hui à l'étape d'après en faisant de votre engagement RSE une levier d'accélération commerciale pour l'avenir.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Expertise Section avec chiffres clés */}
      <section id="expertise" className="py-6 bg-gradient-to-r from-primary/10 to-sustainable/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              Notre Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-32 flex flex-col justify-center">
                    <IconComponent className="text-primary mx-auto mb-4" size={24} />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secteurs d'activité - dans le même bloc */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors h-40 flex flex-col justify-center">
              <div className="p-2 bg-sustainable/20 rounded-full w-fit mx-auto mb-3">
                <Leaf className="w-5 h-5 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">GreenTech</h3>
              <p className="text-xs text-muted-foreground text-justify leading-tight line-clamp-4">
                Accompagnement des entreprises innovantes dans les technologies vertes et développement durable.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors h-40 flex flex-col justify-center">
              <div className="p-2 bg-sustainable/20 rounded-full w-fit mx-auto mb-3">
                <Activity className="w-5 h-5 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">HealthTech</h3>
              <p className="text-xs text-muted-foreground text-justify leading-tight line-clamp-4">
                Solutions commerciales dédiées aux entreprises de technologies de santé et dispositifs médicaux innovants.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors h-40 flex flex-col justify-center">
              <div className="p-2 bg-sustainable/20 rounded-full w-fit mx-auto mb-3">
                <Cog className="w-5 h-5 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Industrie</h3>
              <p className="text-xs text-muted-foreground text-justify leading-tight line-clamp-4">
                Optimisation des processus commerciaux et transformation digitale pour les acteurs industriels modernes.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors h-40 flex flex-col justify-center">
              <div className="p-2 bg-sustainable/20 rounded-full w-fit mx-auto mb-3">
                <Cpu className="w-5 h-5 text-sustainable" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Dev-AI</h3>
              <p className="text-xs text-muted-foreground text-justify leading-tight line-clamp-4">
                Stratégies commerciales pour les entreprises de développement logiciel et intelligence artificielle.
              </p>
            </div>
          </div>

          {/* Nos certifications & Partenariats */}
          <div className="bg-background rounded-2xl p-6 shadow-lg border border-primary/10">
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
      </section>

      {/* Notre Histoire Section */}
      <section className="py-6 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Notre Histoire</h2>
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


      {/* Notre Évolution - remonté après Notre histoire */}
      <section className="py-6 bg-gradient-to-r from-sustainable/10 to-sustainable/20 relative">
        <div className="container mx-auto px-4 relative">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {timeline.map((item, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-lg relative">
                <div className="text-3xl font-bold text-sustainable mb-4">{item.year}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {/* Flèche entre les vignettes sauf pour la dernière */}
                {index < timeline.length - 1 && (
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden lg:block z-20">
                    <ArrowRight className="w-8 h-8 text-sustainable drop-shadow-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-8 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Notre méthode d'accompagnement terrain</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous travaillons main dans la main avec vos équipes pour des actions concrètes et des résultats mesurables immédiatement.
            </p>
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

      {/* Method Section - Schéma en 4 étapes */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-left">Comment se déroulent nos missions ?</h3>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center relative space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Étape 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Analyse de l'existant</h3>
                <p className="text-sm text-muted-foreground max-w-xs">Audit complet de vos processus commerciaux actuels</p>
              </div>

              {/* Flèche 1 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Étape 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Propositions argumentées</h3>
                <p className="text-sm text-muted-foreground max-w-xs">Solutions chiffrées et adaptées à vos besoins</p>
              </div>

              {/* Flèche 2 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Étape 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mise en place<br/>collaborative</h3>
                <p className="text-sm text-muted-foreground max-w-xs">Implémentation avec vos équipes</p>
              </div>

              {/* Flèche 3 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Étape 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Suivi<br/>d'impacts</h3>
                <p className="text-sm text-muted-foreground max-w-xs">Mesure des résultats et optimisation continue</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                  <div className="space-y-2 text-muted-foreground text-sm">
                    {method.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start">
                        <span className="font-bold text-primary mr-2">{pointIndex + 1}.</span>
                        <span>{point.replace(/^\d+\.\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-12 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nos engagements d'excellence et de durabilité</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-justify">{value.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Phrase déplacée ici */}
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground">
              Chez CRM Conseil, nous ne nous contentons pas de vous conseiller : nous incarnons nos valeurs au quotidien par des actions de durabilité concrètes.
            </p>
          </div>

          {/* Nos Actions RSE en 4 piliers - remontés ici */}
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* CTA Section - Prêt à transformer activité durablement */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-sustainable/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à transformer activité durablement ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous accompagner dans votre croissance tout en intégrant une démarche RSE performante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="sustainable" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/rendez-vous'}
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

      <Footer />
    </div>
  );
};

export default About;
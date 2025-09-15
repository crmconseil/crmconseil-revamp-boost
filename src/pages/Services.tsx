import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Users, Briefcase, Target, Settings, TrendingUp, CheckCircle, Globe, Handshake, Award } from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${servicesBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sustainable/20 to-primary/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-12 text-center">
              Nos services détaillés
            </h1>
            
            {/* Citation et schéma */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
              {/* Citation à gauche */}
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-sustainable/20 flex items-center">
                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  "Chez CRM Conseil, nous sommes profondément convaincus que <strong className="text-sustainable font-semibold">l'alignement de la performance commerciale avec une démarche concrète de durabilité</strong> est la seule voie viable pour l'avenir."
                </blockquote>
              </div>
              
              {/* Schéma à droite */}
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-sustainable/20 flex items-center">
                <div className="flex items-center justify-between w-full">
                  {/* Performance commerciale */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="p-4 bg-primary/20 rounded-full mb-4">
                      <div className="flex space-x-1">
                        <Users className="w-6 h-6 text-primary" />
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Performance et durabilité commerciale</h3>
                  </div>
                  
                  {/* Flèches bidirectionnelles */}
                  <div className="flex flex-col items-center mx-6">
                    <div className="flex items-center">
                      <div className="w-8 h-0.5 bg-sustainable"></div>
                      <div className="w-0 h-0 border-l-4 border-l-sustainable border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-0 h-0 border-r-4 border-r-sustainable border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                      <div className="w-8 h-0.5 bg-sustainable"></div>
                    </div>
                  </div>
                  
                  {/* Durabilité écologique */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="p-4 bg-sustainable/20 rounded-full mb-4">
                      <div className="relative">
                        <Leaf className="w-8 h-8 text-sustainable" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Durabilité écologique et sociétale</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sous-titre et Boutons d'ancrage */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-8">Découvrez nos services</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href="#missions-commerciales" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors text-lg"
                >
                  Missions d'optimisation commerciale
                </a>
                <a 
                  href="#accompagnements-rse" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-sustainable text-sustainable hover:bg-sustainable hover:text-white rounded-lg font-medium transition-colors text-lg"
                >
                  Accompagnements et Bilans RSE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche terrain */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                Notre Approche Terrain
              </h2>
            </div>

            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-sustainable/20">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  CRM Conseil vous accompagne concrètement sur le terrain, à la fois dans votre développement commercial B2B et dans la mise en œuvre de votre stratégie RSE.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-sustainable">Nous ne nous contentons pas de donner des recommandations : nous nous intégrons temporairement à vos équipes pour agir à vos côtés.</strong>
                </p>
                <p className="text-muted-foreground">
                  Sur le plan commercial, notre approche opérationnelle inclut l'optimisation de vos supports commerciaux, l'accompagnement lors de rendez-vous clients stratégiques, la mise en place et configuration d'outils de pilotage (CRM/ERP) et l'optimisation de vos processus commerciaux avec la formation de vos équipes à des méthodes de vente B2B éprouvées.
                </p>
                <p className="text-muted-foreground">
                  Sur le plan RSE, nous vous aidons à passer de la stratégie à l'action avec un accompagnement concret : réalisation de votre bilan carbone, définition et implémentation d'une stratégie RSE globale intégrant les actions directes et indirectes, la double matérialité de votre entreprise, et l'évaluation de votre impact biodiversité. L'objectif est d'aligner performance commerciale et performance durable pour renforcer votre compétitivité.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-sustainable">Finis les cabinets qui vous laissent seuls après leurs recommandations : CRM Conseil reste à vos côtés jusqu'à l'obtention de résultats concrets, mesurables et durables. avec un suivi de l'évolution de vos KPIs</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sustainable mr-3" />
                    <span>Experts en CRM, ERP, développement commercial B2B</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sustainable mr-3" />
                    <span>Accompagnement opérationnel terrain</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sustainable mr-3" />
                    <span>Intégration temporaire dans vos équipes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-sustainable mr-3" />
                    <span>Formations pratiques et stratégies RSE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section id="missions-commerciales" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              Accompagnement Terrain CRM, ERP et Développement Commercial B2B
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CRM Conseil vous accompagne concrètement sur le terrain avec des services opérationnels : création de supports sur mesure, accompagnement lors de rendez-vous prospects, configuration pratique d'outils et formations directement sur vos projets réels pour des résultats immédiats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Optimisation commerciale */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <TrendingUp className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Optimisation Commerciale Terrain</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Création de slides personnalisées, accompagnement lors de rendez-vous prospects, optimisation de vos processus de vente B2B et formations opérationnelles de vos équipes sur leurs projets réels.
              </p>
            </div>

            {/* Configuration CRM/ERP */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Settings className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Configuration CRM, ERP & IA</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Installation, paramétrage et formation sur site de vos outils CRM, ERP et IA. Accompagnement terrain pour une prise en main immédiate et une optimisation de vos processus commerciaux B2B.
              </p>
            </div>

            {/* Stratégies RSE */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Leaf className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Stratégies RSE Commerciales</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Création de supports de communication RSE, accompagnement terrain pour intégrer la durabilité dans vos argumentaires commerciaux B2B et formation de vos équipes aux enjeux environnementaux.
              </p>
            </div>

            {/* Levée de fonds */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Target className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Valorisation pour Levée de Fonds</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Création de slides de présentation sur mesure, coaching pour vos rendez-vous investisseurs et préparation opérationnelle aux questions critiques pour maximiser vos chances de succès.
              </p>
            </div>

            {/* Prospection */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Users className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Prospection & Leads B2B</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Accompagnement opérationnel dans vos actions de prospection grands comptes, création d'argumentaires personnalisés et qualification terrain de vos prospects pour optimiser votre taux de conversion.
              </p>
            </div>

            {/* Transformation digitale */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Transformation Digitale</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Formation sur site de vos équipes, accompagnement dans l'adoption de nouveaux outils et coaching opérationnel pour faciliter la transformation de vos processus commerciaux B2B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement RSE */}
      <section id="accompagnements-rse" className="py-16 bg-sustainable/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              Notre Engagement RSE et Développement Durable
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Chez CRM Conseil, nous appliquons nos propres conseils en stratégie RSE. Nos initiatives durables ne sont pas seulement un engagement, mais aussi un laboratoire d'expérimentation pour développer des stratégies RSE performantes que nous transmettons à nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 text-center">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Leaf className="w-6 h-6 text-sustainable" />
              </div>
              <h3 className="font-semibold mb-2">Énergie 100% Renouvelable</h3>
              <p className="text-sm text-muted-foreground">Nos locaux fonctionnent exclusivement avec de l'énergie verte</p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 text-center">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Globe className="w-6 h-6 text-sustainable" />
              </div>
              <h3 className="font-semibold mb-2">Mobilité Douce</h3>
              <p className="text-sm text-muted-foreground">Vélos électriques et programme de recyclage complet</p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 text-center">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Award className="w-6 h-6 text-sustainable" />
              </div>
              <h3 className="font-semibold mb-2">Formation MIT</h3>
              <p className="text-sm text-muted-foreground">Équipes formées par MIT sur les stratégies durables</p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 text-center">
              <div className="p-3 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                <Handshake className="w-6 h-6 text-sustainable" />
              </div>
              <h3 className="font-semibold mb-2">Pacte National Monaco</h3>
              <p className="text-sm text-muted-foreground">5 ans d'engagement pour la Transition Énergétique</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              <strong className="text-sustainable">Transformez votre RSE en Avantage Commercial</strong><br />
              Nos propres initiatives RSE nous permettent de comprendre concrètement les enjeux et opportunités.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-sustainable hover:bg-sustainable/90 text-white rounded-lg font-medium transition-colors"
            >
              Développer votre stratégie RSE commerciale
            </a>
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

      {/* CTA Final */}
      <section id="contact" className="py-16 bg-sustainable/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
              Prêt à transformer votre organisation ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Basé à Monaco - Intervention Monaco, France, Europe, International
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="/#contactez-nous" 
                className="inline-flex items-center px-8 py-3 bg-sustainable hover:bg-sustainable/90 text-white rounded-lg font-medium transition-colors"
              >
                Réserver une consultation
              </a>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <a 
                  href="tel:+33622953137" 
                  className="text-sustainable hover:text-sustainable/80 font-medium"
                >
                  +33 6 22 95 31 37
                </a>
                <a 
                  href="mailto:contact@crmconseil.com" 
                  className="text-sustainable hover:text-sustainable/80 font-medium"
                >
                  contact@crmconseil.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Link } from "react-router-dom";
import { Leaf, Users, Briefcase, Target, Settings, TrendingUp, CheckCircle, Globe, Handshake, Award, ArrowRight, Rocket, Clock, Calendar, BarChart3, Zap, Sparkles } from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Services - CRM Conseil | Accompagnement Commercial & RSE pour PME"
        description="Découvrez nos services d'accompagnement commercial et RSE : bilan GES, stratégie commerciale, conseil développement durable. Expertise certifiée pour startups et PME à Nice, Monaco, Cannes."
        keywords="services conseil commercial, bilan GES PME, accompagnement RSE, stratégie commerciale, développement durable entreprise, consultant Nice Monaco"
        canonical="/nos-services"
      />
      <StructuredData type="service" />
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
              Nos Services
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

      {/* Services principaux */}
      <section id="missions-commerciales" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              Optimisation commerciale
            </h2>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-lg text-muted-foreground text-justify mb-4">
                Moins de 40 % du temps des commerciaux est dédié à la vente. CRM Conseil aide les startups et PME à éliminer les blocages, réduire leur cycle de vente et maximiser leur efficacité commerciale. Simplifiez vos outils, perfectionnez vos pitchs et votre qualification prospects, et atteignez des résultats durables.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                Notre approche combine analyse des performances actuelles, formation pratique et accompagnement sur le terrain pour transformer vos équipes commerciales en forces de vente performantes. Nos missions sont courtes et pratiques pour respecter les budgets et le temps rapide de nos clients startups et PMEs. Vous récupérez des éléments utilisables immédiatement pour continuer votre prospection en toute autonomie.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Optimisation des process commerciaux */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <TrendingUp className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Optimisation des process et supports commerciaux</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">Early stage</span>
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                Vos ventes bloquent toujours à la même étape? Vos cycles sont longs? CRM Conseil accompagne ses clients sur des actions concrètes d'optimisation commerciale :
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>Révision de votre process commercial</li>
                <li>Co-optimisation de vos supports de vente</li>
                <li>Automatisation de tâches de relances répétitives</li>
                <li>Accompagnement lors de RDV clients stratégiques</li>
                <li>Optimisation de la qualification des leads et opportunités pour maximiser votre efficacité commerciale</li>
              </ul>
              <p className="text-muted-foreground text-justify mb-4">
                <strong>Vos gains : Signature de deals plus rapide</strong>
              </p>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-primary/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Augmentation du taux de conversion</span>
                  <span className="text-xl font-bold text-primary">+30 à 50%</span>
                </div>
              </div>
            </div>

            {/* Choix et Configuration d'outils de pilotage */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Settings className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Choix et Configuration d'outils de pilotage (CRM/ERP)</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">Early stage</span>
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                De bons outils CRM/ERP peuvent avoir un réel impact sur vos résultats et votre productivité. Agnostique de tout outil, CRM Conseil vous oriente vers les solutions les plus adaptées aux besoins, budget et perspectives de scalabilité pour éviter les changements d'outils coûteux. Notre accompagnement inclut :
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>Sélection d'outils adaptés à votre secteur et taille</li>
                <li>Configuration de workflows, automatisations et suivi de chiffres clés</li>
                <li>Engagement et formation de vos équipes</li>
              </ul>
              <p className="text-muted-foreground text-justify mb-4">
                <strong>Vos gains : Des semaines d'analyses et des mois de déploiement d'outils inadaptés économisés</strong>
              </p>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-sustainable/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Accélération du cycle de vente</span>
                  <span className="text-xl font-bold text-sustainable">+25 à 40%</span>
                </div>
              </div>
            </div>

            {/* Générations de leads B2B */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Users className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Génération de leads B2B externalisée</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">Early stage</span>
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                Boostez votre pipeline commercial en moins d'un mois grâce à nos campagnes externalisées. Nous alimentons en continu vos équipes avec des opportunités hautement qualifiées :
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>Ciblage précis de vos prospects idéaux</li>
                <li>Qualification rigoureuse des opportunités</li>
                <li>Prise de rendez-vous qualifiés pour vos commerciaux</li>
                <li>Reporting détaillé des campagnes et résultats</li>
              </ul>
              <p className="text-muted-foreground text-justify mb-4">
                <strong>Vos gains : Plus de leads, plus de signatures, plus rapidement!</strong>
              </p>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-primary/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Rendez-vous qualifiés obtenus</span>
                  <span className="text-xl font-bold text-primary">+20 à 35%</span>
                </div>
              </div>
            </div>

            {/* Valorisation commerciale pour levée de fonds */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Target className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Préparation à la levée de fonds</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                Maximisez vos chances de convaincre investisseurs, fonds et family offices. Notre accompagnement complet vous prépare à transformer l'intérêt en investissement :
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>Pitch deck ultra-design et percutant</li>
                <li>Valorisation solide de vos KPIs et modèle économique</li>
                <li>Coaching du discours dirigeant</li>
                <li>Accroches investisseurs personnalisées par profil</li>
              </ul>
              <p className="text-muted-foreground text-justify mb-4">
                <strong>Vos gains : Augmentation de vos chances de financement</strong>
              </p>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-accent/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Taux de succès de la levée de fonds</span>
                  <span className="text-xl font-bold text-accent">+45 à 55%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nos livrables */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-6xl mx-auto mt-8">
            <h3 className="text-2xl font-bold text-center mb-8">Nos livrables</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Slides de présentation commerciale révisée</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Slides Deck investisseur révisé</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Outils CRM/ERP implémentés et personnalisés</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Questionnaire de qualification et process de vente optimisé</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Listes de leads qualifiés</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Pipeline et marché cible valorisé et sécurisé</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-sustainable bg-clip-text text-transparent">
                1 à 8 JH ~ 950€ - 7,600€
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnement RSE et Durabilité */}
      <section id="accompagnements-rse" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              Valorisation RSE et Durabilité
            </h2>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-lg text-muted-foreground text-justify mb-4">
                Et si intégrer des pratiques durables dans votre stratégie devenait un atout commercial?
              </p>
              <p className="text-lg text-muted-foreground text-justify mb-4">
                Notre expertise combine performance économique et responsabilité sociétale pour créer une stratégie durable qui renforce votre positionnement concurrentiel.
              </p>
              <p className="text-lg text-muted-foreground text-justify mb-4">
                Nous vous aidons à passer de la stratégie à l'action avec un accompagnement concret : Réalisation de votre bilan GES, Implémentation d'une stratégie RSE globale intégrant les actions directes et indirectes, la double matérialité de votre entreprise, et l'évaluation de votre impact biodiversité.
              </p>
              <div className="text-lg text-muted-foreground text-left">
                <p className="font-semibold mb-3">Résultats :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Réduction directe de vos coûts énergétiques</li>
                  <li>Réduction de votre impact carbone et biodiversité</li>
                  <li>Fidélisation de vos équipes et clients</li>
                  <li>Ventes accrues et accès à de nouveaux marchés</li>
                  <li>Augmentation des options d'investisseurs à la recherche de sociétés engagées RSE</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bilan GES Durabilité / Bilan Carbone® */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Bilan GES Durabilité / Bilan Carbone®</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">Early stage</span>
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                Le Bilan GES ou Bilan Carbone® analyse l'ensemble de vos émissions carbone, incluant par ailleurs une analyse des risques climatiques qui pèsent sur votre entreprise et les impacts climatiques que vous générez et définit un plan de transition plus durable. Cette démarche volontaire permet de repositionner votre entreprise dans une démarche valorisable, de durabilité.
                <br /><strong>Vos gains :</strong>
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>Réduction de vos coûts et votre dépendance énergétique carbonée</li>
                <li>Développement de nouveaux marchés</li>
                <li>Attractivité renforcée auprès des talents et d'investisseurs</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-sustainable/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Réduction des coûts énergétiques/an</span>
                  <span className="text-xl font-bold text-sustainable">Jusqu'à -30%</span>
                </div>
              </div>
            </div>

            {/* Mise en place, suivi et formation des équipes aux actions durables */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Users className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Accompagnement opérationnel des équipes aux actions durables</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">Early stage</span>
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                La transition vers des pratiques durables nécessite l'engagement actif de vos équipes. CRM Conseil vous accompagne sur le pilotage opérationnel de votre stratégie de durabilité avec un support de suivi des objectifs et des formations motivationnelles aux gestes essentiels de votre secteur :
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>Mise en place et suivi de la stratégie définie</li>
                <li>Formation aux actions durables sectorielles</li>
                <li>Accompagnement du changement organisationnel</li>
              </ul>
              <p className="text-muted-foreground text-justify mb-4">
                <strong>Vos gains : Des équipes impliquées et des objectifs respectés</strong>
              </p>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-primary/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Engagement collaborateurs RSE</span>
                  <span className="text-xl font-bold text-primary">+40%</span>
                </div>
              </div>
            </div>

            {/* Valorisation commerciale de la démarche RSE */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Award className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-xl font-bold">Valorisation commerciale de la démarche RSE</h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">Early stage</span>
                <span className="inline-block px-3 py-1 bg-sustainable/20 text-sustainable text-xs font-medium rounded-full">Startups & PME établies</span>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                CRM Conseil considère à juste titre que l'engagement dans la durabilité d'une entreprise apporte de réelles retombées commerciales et financières. Nous modélisons le ROI de vos actions sur plusieurs années tant par rapport aux réductions de couts, au repositionnement de produits, aux nouveaux marchés. Nous pilotons pour nos clients des campagnes de générations de leads sur ces nouveaux marchés permettant de rapidement valider les retombées commerciales.
                <br /><strong>Vos gains :</strong>
              </p>
              <ul className="text-muted-foreground text-justify mb-4 list-disc list-inside space-y-1">
                <li>ROI chiffré de votre démarche de durabilité</li>
                <li>Augmentation concrète de vos résultats commerciaux</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-sustainable/20">
                <div className="flex items-center justify-between bg-accent/5 rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">Croissance via marchés RSE</span>
                  <span className="text-xl font-bold text-accent">+20 à 35%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nos livrables RSE */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-bold text-center mb-8">Nos livrables</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Rapport d'analyse carbone chiffré valorisable au niveau de l'ADEME</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Rapport de bilans et stratégie RSE chiffré avec ROI</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Rapport d'Impact Biodiversité chiffré</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Formation des équipes à la stratégie RSE</span>
              </div>
            </div>
            <div className="text-center">
               <span className="text-2xl font-bold bg-gradient-to-r from-primary to-sustainable bg-clip-text text-transparent">
                 5 - 15JH ~ 6,000€ et 12,000€ avec possibilité de subventions BPI France de 40 à 50%, si dossier éligible
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à transformer votre activité durablement ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous accompagner dans votre croissance tout en intégrant une démarche RSE performante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="sustainable" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/book-appointment'}
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

      {/* Découvrez plus */}
      <section className="py-16 bg-gradient-to-r from-sustainable/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/a-propos"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sustainable to-primary hover:from-sustainable/90 hover:to-primary/90 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Découvrez plus qui nous sommes
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
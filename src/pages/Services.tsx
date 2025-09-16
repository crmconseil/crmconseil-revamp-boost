import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Users, Briefcase, Target, Settings, TrendingUp, CheckCircle, Globe, Handshake, Award, ArrowRight, Rocket, Clock, Calendar, BarChart3, Zap } from "lucide-react";
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
                Moins de 40 % du temps des commerciaux est dédié à la vente. CRM Conseil aide les startups et PME à éliminer les blocages, optimiser leurs processus de vente et maximiser leur efficacité commerciale. Simplifiez vos outils, perfectionnez vos pitchs et atteignez des résultats durables.
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                Notre approche combine analyse des performances actuelles, formation pratique et accompagnement sur le terrain pour transformer vos équipes commerciales en forces de vente performantes. Nos missions sont courtes et pratiques pour respecter les budgets et le temps rapide de nos clients startups et PMEs. Vous récupérez des éléments utilisables immédiatement pour continuer votre prospection en toute autonomie.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Optimisation des process commerciaux */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <TrendingUp className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Optimisation des process commerciaux</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Analyse et restructuration de vos processus de vente, amélioration du cycle commercial, accompagnement lors de RDV clients stratégiques, optimisation des argumentaires et méthodes de prospection pour maximiser votre efficacité commerciale.
                </p>
            </div>

            {/* Choix et Configuration d'outils de pilotage */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Settings className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Choix et Configuration d'outils de pilotage (CRM/ERP)</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Sélection et configuration d'outils (CRM/ERP) adaptés à vos besoins, budget et perspectives de croissance. CRM Conseil vous oriente vers les outils les plus scalable pour éviter d'avoir à multiplier ou changer d'outils au fil de votre développement. Nous formons vos équipes, configurons vos tableaux de bord de pilotage commercial.
                </p>
            </div>

            {/* Générations de leads B2B */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Users className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Générations de leads B2B</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Stratégies de prospection multicanales, qualification de leads, mise en place de campagnes ciblées et accompagnement dans la génération de prospects qualifiés pour développer votre portefeuille clients.
                </p>
            </div>

            {/* Valorisation commerciale pour levée de fonds */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Target className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Valorisation commerciale pour levée de fonds</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Préparation de pitchs investisseurs, valorisation de votre modèle économique, coaching pour les présentations et optimisation de votre approche commerciale pour séduire les investisseurs.
                </p>
            </div>
          </div>

          {/* Ce que nous vous apportons - Infographie */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-6xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Ce que nous vous apportons:</h3>
            
            {/* Infographie visuelle améliorée */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Phase 1 - Acquisition */}
                <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 rounded-2xl p-8 border-2 border-primary/30 shadow-xl overflow-hidden">
                  {/* Éléments décoratifs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-4">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-primary mb-2">Phase 1 – Ciblage / Acquisition</h4>
                      <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                        <p className="text-sm font-medium text-primary">Startups early stage</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-primary mb-1">+30 à +50%</div>
                            <p className="text-sm text-muted-foreground">d'augmentation du taux de conversion prospects → clients</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                              <Clock className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-primary mb-1">+25 à +40%</div>
                            <p className="text-sm text-muted-foreground">d'accélération du cycle de vente</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                              <Calendar className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-primary mb-1">+20 à +35%</div>
                            <p className="text-sm text-muted-foreground">de rendez-vous qualifiés obtenus</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase 2 - Accélération */}
                <div className="relative bg-gradient-to-br from-sustainable/5 via-sustainable/10 to-sustainable/20 rounded-2xl p-8 border-2 border-sustainable/30 shadow-xl overflow-hidden">
                  {/* Éléments décoratifs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sustainable/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-sustainable/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-sustainable to-sustainable/80 rounded-2xl shadow-lg mb-4">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-sustainable mb-2">Phase 2 – Accélération / Valorisation</h4>
                      <div className="inline-block px-4 py-2 bg-sustainable/20 rounded-full">
                        <p className="text-sm font-medium text-sustainable">Startups & PME établies</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-sustainable/20 rounded-lg flex items-center justify-center">
                              <BarChart3 className="w-6 h-6 text-sustainable" />
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-sustainable mb-1">+40 à +60%</div>
                            <p className="text-sm text-muted-foreground">d'augmentation de la valeur du pipeline</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-sustainable/20 rounded-lg flex items-center justify-center">
                              <Zap className="w-6 h-6 text-sustainable" />
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-sustainable mb-1">+25 à +50%</div>
                            <p className="text-sm text-muted-foreground">d'opportunités additionnelles générées</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-sustainable/20 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-6 h-6 text-sustainable" />
                            </div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-sustainable mb-1">+50 à +60%</div>
                            <p className="text-sm text-muted-foreground">de taux de succès de la levée de fonds</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                Nous vous aidons à passer de la stratégie à l'action avec un accompagnement concret : Réalisation de votre bilan carbone ADEME, Implémentation d'une stratégie RSE globale intégrant les actions directes et indirectes, la double matérialité de votre entreprise, et l'évaluation de votre impact biodiversité.
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
            {/* Bilan - Emissions Directes - Scope 1 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Bilan - Emissions Directes - Scope 1</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Le Bilan Scope 1 évalue vos émissions directes de gaz à effet de serre issues de vos consommations énergétiques et activités propres. Il met en lumière vos leviers d'efficacité, propose des scénarios d'optimisation énergétiques chiffrés et accompagne la mise en œuvre. Résultat : économies énergétiques mesurables directes, ROI clair et rapide, et réduction immédiate de vos impacts.
                </p>
            </div>

            {/* Bilan RSE Complet – Scope 1, 2, 3 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Leaf className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Bilan Carbone ADEME® - Scope 1, 2, 3</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Le bilan carbone RSE ADEME® analyse vos émissions directes et indirectes sur l'ensemble de la chaîne de valeur, tout en évaluant les impacts sociétaux sur vos employés, vos clients et la société. Il intègre la double matérialité : les risques climatiques subis par votre entreprise et les impacts qu'elle génère sur l'environnement et la société. Résultats : transformation durable, ouverture de nouveaux marchés, réduction profonde de votre impact carbone, repositionnement compétitif de votre entreprise, et attractivité renforcée vis-à-vis d'employés et investisseurs.
                </p>
            </div>

            {/* Bilan Impact Biodiversité */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Award className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Bilan Impact Biodiversité</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  Le bilan biodiversité permet aux TPE et PME d'identifier leurs impacts et dépendances vis-à-vis des écosystèmes. Il offre une vision claire des risques et opportunités, aide à réduire les pressions sur la nature et à construire un plan d'action concret. Résultat : plus de résilience, de valeur et d'alignement réglementaire.
                </p>
            </div>
          </div>

          {/* Ce que nous vous apportons */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Ce que nous vous apportons:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Réalisation de bilans carbone complets</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Stratégie RSE globale et double matérialité</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Évaluation d'impact biodiversité</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Intégration RSE dans les supports commerciaux</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Formation des équipes à la stratégie RSE</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Suivi et pilotage des KPIs durabilité</span>
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
                5 - 15JH ~ 6,000€ et 12,000€ avec possibilité de subventions BPI France, si dossier éligible
              </span>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chez CRM Conseil, nous ne nous contentons pas de conseiller : nous incarnons nos valeurs au quotidien
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
              Discutons de vos enjeux et trouvons ensemble les solutions adaptées à vos besoins
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Prenez rendez-vous</h3>
                <p className="text-muted-foreground mb-4">
                  Un premier échange gratuit de 30 minutes pour comprendre vos défis
                </p>
                <a 
                  href="https://calendly.com/crmconseil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
                >
                  Réserver un créneau
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Contactez-nous</h3>
                <p className="text-muted-foreground mb-4">
                  Une question ? Parlons de votre projet
                </p>
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
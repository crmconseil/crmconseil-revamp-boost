import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Leaf, Users, Briefcase, Target, Settings, TrendingUp, CheckCircle, Globe, Handshake, Award, ArrowRight, Rocket, Clock, Calendar, BarChart3, Zap, Sparkles } from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

const ServicesEN = () => {
  const { t, language } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };
  
  return (
    <div className="min-h-screen">
      <SEOHead 
        title={t('services.page_title')}
        description={t('services.page_description')}
        keywords={t('services.page_keywords')}
        canonical="/en/nos-services"
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
              {t('services.title')}
            </h1>
            
            {/* Citation et schéma */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
              {/* Citation à gauche */}
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-sustainable/20 flex items-center">
                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: t('services.quote') }} />
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
                    <h3 className="text-lg font-semibold text-foreground">{t('services.performance_sustainability')}</h3>
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
                    <h3 className="text-lg font-semibold text-foreground">{t('services.ecological_sustainability')}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sous-titre et Boutons d'ancrage */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-8">{t('services.discover_services')}</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href="#missions-commerciales" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors text-lg"
                >
                  {t('services.commercial_optimization_missions')}
                </a>
                <a 
                  href="#accompagnements-rse" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-sustainable text-sustainable hover:bg-sustainable hover:text-white rounded-lg font-medium transition-colors text-lg"
                >
                  {t('services.rse_support_bilans')}
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
              {t('services.commercial_optimization')}
            </h2>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-lg text-muted-foreground text-justify mb-4">
                {t('services.commercial_intro_1')}
              </p>
              <p className="text-lg text-muted-foreground text-justify">
                {t('services.commercial_intro_2')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <TrendingUp className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">{t('services.process_optimization_title')}</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  {t('services.process_optimization_desc')}
                </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Settings className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">{t('services.tools_configuration_title')}</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  {t('services.tools_configuration_desc')}
                </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Users className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">{t('services.lead_generation_title')}</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  {t('services.lead_generation_desc')}
                </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Target className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">{t('services.valorization_title')}</h3>
              </div>
                <p className="text-muted-foreground text-justify mb-4">
                  {t('services.valorization_desc')}
                </p>
            </div>
          </div>

          {/* Ce que nous vous apportons - Infographie */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-6xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Expected Results: Commercial Performance</h3>
            
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 rounded-2xl p-8 border-2 border-primary/30 shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-4">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-primary mb-2">{t('services.phase_1_title')}</h4>
                      <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                        <p className="text-sm font-medium text-primary">{t('services.phase_1_subtitle')}</p>
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
                            <div className="text-3xl font-bold text-primary mb-1">+30 to +50%</div>
                            <p className="text-sm text-muted-foreground">{t('services.conversion_increase')}</p>
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
                            <div className="text-3xl font-bold text-primary mb-1">+25 to +40%</div>
                            <p className="text-sm text-muted-foreground">{t('services.cycle_acceleration')}</p>
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
                            <div className="text-3xl font-bold text-primary mb-1">+20 to +35%</div>
                            <p className="text-sm text-muted-foreground">{t('services.qualified_meetings')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-br from-sustainable/5 via-sustainable/10 to-sustainable/20 rounded-2xl p-8 border-2 border-sustainable/30 shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sustainable/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-sustainable/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-sustainable to-sustainable/80 rounded-2xl shadow-lg mb-4">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-sustainable mb-2">{t('services.phase_2_title')}</h4>
                      <div className="inline-block px-4 py-2 bg-sustainable/20 rounded-full">
                        <p className="text-sm font-medium text-sustainable">{t('services.phase_2_subtitle')}</p>
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
                            <div className="text-3xl font-bold text-sustainable mb-1">+40 to +60%</div>
                            <p className="text-sm text-muted-foreground">{t('services.pipeline_value_increase')}</p>
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
                             <div className="text-3xl font-bold text-sustainable mb-1">+25 to +50%</div>
                             <p className="text-sm text-muted-foreground">additional opportunities generated</p>
                           </div>
                        </div>
                      </div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center">
                          <div className="mr-4">
                            <div className="w-12 h-12 bg-sustainable/20 rounded-lg flex items-center justify-center">
                              <Award className="w-6 h-6 text-sustainable" />
                            </div>
                          </div>
                           <div>
                             <div className="text-3xl font-bold text-sustainable mb-1">+50 to +60%</div>
                             <p className="text-sm text-muted-foreground">fundraising success rate</p>
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
            <h3 className="text-2xl font-bold text-center mb-8">{t('services.deliverables')}</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">{t('services.deliverable_1')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">{t('services.deliverable_2')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">{t('services.deliverable_3')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">{t('services.deliverable_4')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">{t('services.deliverable_5')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">{t('services.deliverable_6')}</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-sustainable bg-clip-text text-transparent">
                {t('services.pricing_commercial')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section RSE */}
      <section id="accompagnements-rse" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              CSR & Sustainability Enhancement
            </h2>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-lg text-muted-foreground text-justify mb-4">
                What if integrating sustainable practices into your strategy became a commercial asset?
              </p>
              <p className="text-lg text-muted-foreground text-justify mb-4">
                Our expertise combines economic performance and societal responsibility to create a sustainable strategy that strengthens your competitive positioning.
              </p>
              <p className="text-lg text-muted-foreground text-justify mb-4">
                We help you move from strategy to action with concrete support: Completion of your GHG assessment, Implementation of a comprehensive CSR strategy integrating direct and indirect actions, your company's double materiality, and evaluation of your biodiversity impact.
              </p>
              <div className="text-lg text-muted-foreground text-left">
                <p className="font-semibold mb-3">Results:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Direct reduction of your energy costs</li>
                  <li>Reduction of your carbon and biodiversity impact</li>
                  <li>Loyalty of your teams and clients</li>
                  <li>Increased sales and access to new markets</li>
                  <li>Increased options for investors seeking CSR-committed companies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Carbon Assessment® - Scope 1, 2 and/or 3 */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">Carbon Assessment® - Scope 1, 2 and/or 3</h3>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                The CSR GHG Assessment analyzes all your direct and indirect emissions and integrates double materiality to measure both the climate risks facing your company and the impacts you generate. The result: significant reduction of your carbon footprint, new markets, strategic repositioning and enhanced attractiveness to talents and investors.
              </p>
            </div>


            {/* Biodiversité */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Award className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-xl font-bold">{t('services.biodiversity_title')}</h3>
              </div>
              <p className="text-muted-foreground text-justify mb-4">
                The biodiversity assessment allows SMEs to identify their impacts and dependencies regarding ecosystems. It provides a clear vision of risks and opportunities, helps reduce pressures on nature and build a concrete action plan. Result: more resilience, value and regulatory alignment.
              </p>
            </div>
          </div>

          {/* Ce que nous vous apportons - Infographie RSE */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-6xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Expected Results: Sustainable Development Impacts</h3>
            
            {/* Infographie visuelle RSE sur 3 colonnes */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Colonne 1 - Bilan Carbone Scope 1 */}
              <div className="relative bg-gradient-to-br from-sustainable/5 via-sustainable/10 to-sustainable/20 rounded-2xl p-8 border-2 border-sustainable/30 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sustainable/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-sustainable/5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-sustainable to-sustainable/80 rounded-2xl shadow-lg mb-4">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-sustainable mb-2">Direct Emissions Assessment Scope 1</h4>
                    <div className="inline-block px-3 py-1 bg-sustainable/20 rounded-full">
                      <p className="text-xs font-medium text-sustainable">Direct impacts</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                         <div className="text-2xl font-bold text-sustainable mb-1">Up to -30%</div>
                         <p className="text-xs text-muted-foreground">reduction in energy costs / year through energy efficiency</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                         <div className="text-2xl font-bold text-sustainable mb-1">-20%</div>
                         <p className="text-xs text-muted-foreground">operating costs through waste reduction and valorization</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-sustainable/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-sustainable/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                         <div className="text-2xl font-bold text-sustainable mb-1">Direct ROI</div>
                         <p className="text-xs text-muted-foreground">2 to 3x the investment from the 1st year (for TPE/SME with €200K to €2M annual revenue)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colonne 2 - Formation et accompagnement équipes */}
              <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 rounded-2xl p-8 border-2 border-primary/30 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">Team Training & Sustainable Practices Support</h4>
                    <div className="inline-block px-3 py-1 bg-primary/20 rounded-full">
                      <p className="text-xs font-medium text-primary">Engagement & Training</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-primary mb-1">+40%</div>
                        <p className="text-xs text-muted-foreground">employee engagement on CSR issues</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-primary mb-1">-25%</div>
                        <p className="text-xs text-muted-foreground">turnover through an engaged corporate culture</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-primary mb-1">+15%</div>
                        <p className="text-xs text-muted-foreground">productivity through adoption of sustainable best practices</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-primary mb-1">Transformation</div>
                        <p className="text-xs text-muted-foreground">deeply rooted and sustainable cultural change throughout the organization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colonne 3 - Valorisation commerciale RSE */}
              <div className="relative bg-gradient-to-br from-accent/5 via-accent/10 to-accent/20 rounded-2xl p-8 border-2 border-accent/30 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-lg mb-4">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-accent mb-2">CSR Approach Commercial Valorization</h4>
                    <div className="inline-block px-3 py-1 bg-accent/20 rounded-full">
                      <p className="text-xs font-medium text-accent">Business impact</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-accent/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-accent mb-1">+20 to 35%</div>
                        <p className="text-xs text-muted-foreground">commercial growth through access to CSR-sensitive markets</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-accent/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-accent mb-1">+30%</div>
                        <p className="text-xs text-muted-foreground">valuation in fundraising through strong CSR positioning</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-accent/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-accent mb-1">Enhanced image</div>
                        <p className="text-xs text-muted-foreground">Competitive differentiation and employer brand attractiveness</p>
                      </div>
                    </div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-accent/20 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <div className="text-2xl font-bold text-accent mb-1">Resilience</div>
                        <p className="text-xs text-muted-foreground">Better access to financing and anticipated regulatory compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nos livrables RSE */}
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-sustainable/20 max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-bold text-center mb-8">{t('services.deliverables')}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Quantified carbon analysis report valuable at ADEME level</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Quantified CSR assessment and strategy report with ROI</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Quantified Biodiversity Impact Report</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-sustainable mr-3 mt-0.5" />
                <span className="text-muted-foreground">Team training on CSR strategy</span>
              </div>
            </div>
            <div className="text-center">
               <span className="text-2xl font-bold bg-gradient-to-r from-primary to-sustainable bg-clip-text text-transparent">
                 5 - 15 person-days ~ €6,000 to €12,000 with possibility of BPI France subsidies of 40 to 50%, if eligible
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-sustainable/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('services.ready_transform')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('services.transform_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group"
              onClick={() => window.location.href = getLocalizedPath('/book-appointment')}
            >
              {t('common.book_appointment')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = getLocalizedPath('/contact')}
            >
              {t('common.contact_us')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesEN;
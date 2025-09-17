import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";
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

const AboutEN = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    window.location.href = "/en/contact";
  };

  const keyStats = [
    { icon: Users, number: "100+", label: t('about.stat_startups') },
    { icon: TrendingUp, number: "+37%", label: t('about.stat_growth') },
    { icon: Target, number: "4", label: t('about.stat_sectors') },
    { icon: Euro, number: "16M€", label: t('about.stat_funding') }
  ];

  const methods = [
    {
      icon: Handshake,
      title: t('about.external_audit'),
      points: [
        t('about.external_audit_step_1'),
        t('about.external_audit_step_2'),
        t('about.external_audit_step_3'),
        t('about.external_audit_step_4')
      ]
    },
    {
      icon: Cog,
      title: t('about.tools_config'),
      points: [
        t('about.tools_config_step_1'),
        t('about.tools_config_step_2'),
        t('about.tools_config_step_3'),
        t('about.tools_config_step_4')
      ]
    },
    {
      icon: Zap,
      title: t('about.commercial_materials'),
      points: [
        t('about.commercial_materials_step_1'),
        t('about.commercial_materials_step_2'),
        t('about.commercial_materials_step_3'),
        t('about.commercial_materials_step_4')
      ]
    },
    {
      icon: Users,
      title: t('about.team_training'),
      points: [
        t('about.team_training_step_1'),
        t('about.team_training_step_2'),
        t('about.team_training_step_3'),
        t('about.team_training_step_4')
      ]
    },
    {
      icon: Globe,
      title: t('about.carbon_assessment'),
      points: [
        t('about.carbon_assessment_step_1'),
        t('about.carbon_assessment_step_2'),
        t('about.carbon_assessment_step_3'),
        t('about.carbon_assessment_step_4')
      ]
    },
    {
      icon: Leaf,
      title: t('about.biodiversity_assessment'),
      points: [
        t('about.biodiversity_assessment_step_1'),
        t('about.biodiversity_assessment_step_2'),
        t('about.biodiversity_assessment_step_3'),
        t('about.biodiversity_assessment_step_4')
      ]
    }
  ];

  const values = [
    {
      icon: Award,
      title: t('about.excellence_operational'),
      description: t('about.excellence_operational_desc')
    },
    {
      icon: Lightbulb,
      title: t('about.innovation_continuous'),
      description: t('about.innovation_continuous_desc')
    },
    {
      icon: Heart,
      title: t('about.impact_sustainable'),
      description: t('about.impact_sustainable_desc')
    }
  ];

  const timeline = [
    {
      year: t('about.year_2014'),
      title: t('about.year_2014_title'),
      description: t('about.year_2014_desc')
    },
    {
      year: t('about.year_2018'),
      title: t('about.year_2018_title'),
      description: t('about.year_2018_desc')
    },
    {
      year: t('about.year_2019'),
      title: t('about.year_2019_title'),
      description: t('about.year_2019_desc')
    },
    {
      year: t('about.year_2024'),
      title: t('about.year_2024_title'),
      description: t('about.year_2024_desc')
    }
  ];

  const sectors = [
    { icon: Leaf, title: t('about.greentech'), desc: t('about.greentech_desc') },
    { icon: Activity, title: t('about.healthtech'), desc: t('about.healthtech_desc') },
    { icon: Cog, title: t('about.industry'), desc: t('about.industry_desc') },
    { icon: Cpu, title: t('about.dev_ai'), desc: t('about.dev_ai_desc') }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={t('about.page_title')}
        description="Discover CRM Conseil and Sabrina Broggini. Certified expert in commercial support and CSR for startups and SMEs. Over 100 companies supported towards sustainable performance."
        keywords="about CRM conseil, Sabrina Broggini, commercial CSR expert, SME startup support, sustainable development consultant"
        canonical="/en/about"
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
              From commercial optimization to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                CSR valorization
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Since 2014, CRM Conseil has supported the growth of innovative and committed startups and SMEs. 
              Take the next step today by making your CSR commitment a commercial acceleration lever for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section with key figures */}
      <section id="expertise" className="py-6 bg-gradient-to-r from-primary/10 to-sustainable/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
              {t('about.key_stats_title')}
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

          {/* Activity sectors - in the same block */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div key={index} className="bg-background rounded-xl p-6 shadow-lg border border-sustainable/20 hover:border-sustainable/40 transition-colors h-40 flex flex-col justify-center">
                  <div className="p-2 bg-sustainable/20 rounded-full w-fit mx-auto mb-3">
                    <IconComponent className="w-5 h-5 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{sector.title}</h3>
                  <p className="text-xs text-muted-foreground text-justify leading-tight line-clamp-4">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Our certifications & Partnerships */}
          <div className="bg-background rounded-2xl p-6 shadow-lg border border-primary/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                {t('about.certifications_title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-sustainable mb-2">{t('about.mit_cert')}</h4>
                  <p className="text-xs text-muted-foreground">{t('about.mit_cert_desc')}</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">{t('about.ademe_partner')}</h4>
                  <p className="text-xs text-muted-foreground">{t('about.ademe_partner_desc')}</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-sustainable mb-2">{t('about.pacte_national')}</h4>
                  <p className="text-xs text-muted-foreground">{t('about.pacte_national_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-6 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-center">{t('about.company_history')}</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>{t('about.story_desc_1')}</p>
                <p>{t('about.story_desc_2')}</p>
                <p>{t('about.story_desc_3')}</p>
              </div>
            </div>
            
            {/* Vertical separator line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-64 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            <div className="relative">
              <img 
                src={evolutionImage} 
                alt="Evolution of CRM Conseil from traditional commercial to CSR and sustainable approach"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Evolution - moved after Our story */}
      <section className="py-6 bg-gradient-to-r from-sustainable/10 to-sustainable/20 relative">
        <div className="container mx-auto px-4 relative">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {timeline.map((item, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-lg relative">
                <div className="text-3xl font-bold text-sustainable mb-4">{item.year}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {/* Arrow between vignettes except for the last */}
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
            <h2 className="text-4xl font-bold text-foreground mb-6">{t('about.method_title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.method_subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <p className="text-muted-foreground mb-4">
                  {t('about.method_approach')}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-4">{t('about.our_difference')}</h3>
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <p className="text-muted-foreground mb-4">
                    {t('about.difference_desc_1')}
                  </p>
                  <p className="text-primary font-semibold">
                    {t('about.difference_desc_2')}
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('about.no_theory_title')}</h3>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-muted-foreground">
                    {t('about.no_theory_desc')}
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="relative">
              <img 
                src={partenaireImage} 
                alt="Two professionals giving each other a high five to celebrate their partnership"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Flow Section - 4-step diagram */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-left">{t('about.mission_flow_title')}</h3>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center relative space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_1_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_1_desc')}</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_2_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_2_desc')}</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_3_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_3_desc')}</p>
              </div>

              {/* Arrow 3 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_4_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_4_desc')}</p>
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

      {/* Our commitments */}
      <section className="py-12 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t('about.commitments_title')}</h2>
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

          {/* Quote moved here */}
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground">
              {t('about.commitments_intro')}
            </p>
          </div>

          {/* Our CSR Actions in 4 pillars - moved here */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1: Clients & CSR Strategy */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Handshake className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_1_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_1_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_1_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_1_item_3')}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Sustainable Transport */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-full mr-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_2_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_2_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_2_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_2_item_3')}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Clean Energy Sourcing */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Zap className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_3_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_4')}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4: Waste Management */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_4_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_4_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_4_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_4_item_3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ready to transform business sustainably */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-sustainable/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t('about.transform_sustainably')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('about.transform_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-sustainable to-primary hover:from-sustainable/90 hover:to-primary/90"
              onClick={() => window.location.href = '/en/book-appointment'}
            >
              {t('about.book_consultation')}
              <Calendar className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/en/contact'}
            >
              {t('about.contact_us')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Flow Section - 4-step diagram */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-left">{t('about.mission_flow_title')}</h3>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center relative space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_1_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_1_desc')}</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_2_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_2_desc')}</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_3_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_3_desc')}</p>
              </div>

              {/* Arrow 3 */}
              <div className="hidden lg:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sustainable to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.step_4_title')}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{t('about.step_4_desc')}</p>
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

      {/* Our commitments */}
      <section className="py-12 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t('about.commitments_title')}</h2>
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

          {/* Quote moved here */}
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground">
              {t('about.commitments_intro')}
            </p>
          </div>

          {/* Our CSR Actions in 4 pillars - moved here */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1: Clients & CSR Strategy */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Handshake className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_1_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_1_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_1_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_1_item_3')}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Sustainable Transport */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-full mr-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_2_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_2_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_2_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_2_item_3')}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Clean Energy Sourcing */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                  <Zap className="w-6 h-6 text-sustainable" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_3_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_3_item_4')}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4: Waste Management */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                  {t('about.pillar_4_title')}
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_4_item_1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_4_item_2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>{t('about.pillar_4_item_3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ready to transform business sustainably */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-sustainable/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {t('about.transform_sustainably')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('about.transform_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-sustainable to-primary hover:from-sustainable/90 hover:to-primary/90"
              onClick={() => window.location.href = '/en/book-appointment'}
            >
              {t('about.book_consultation')}
              <Calendar className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/en/contact'}
            >
              {t('about.contact_us')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutEN;
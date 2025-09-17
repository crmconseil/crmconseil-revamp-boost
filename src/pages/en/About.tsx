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

      {/* Methods Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t('about.methods_title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/20 rounded-full mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{method.title}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {method.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm">{point}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t('about.our_values')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-8 bg-background/80 backdrop-blur-sm">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us for a free consultation and discover how we can support your company in its sustainable transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="group bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = '/en/rendez-vous'}
              >
                {t('about.meet_team')}
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/en/contact'}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutEN;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Settings, 
  Leaf, 
  BarChart3, 
  Shield,
  ArrowRight,
  Users,
  Lightbulb,
  Award
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesBackground from "@/assets/services-background.jpg";

export const ServicesSection = () => {
  const { language, t } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  const renderListItems = (items: string) => {
    return items.split('\n').map((item, index) => (
      <li key={index}>{item}</li>
    ));
  };

  return (
    <section id="services" className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Commercial Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-commercial mb-4 leading-tight">
                {t('services.commercial_optimization')}
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Target className="text-commercial" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{t('services.targeting_title')}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {renderListItems(t('services.targeting_items'))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-commercial" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{t('services.acceleration_title')}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {renderListItems(t('services.acceleration_items'))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Settings className="text-commercial" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{t('services.optimization_title')}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {renderListItems(t('services.optimization_items'))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* RSE/Sustainability Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sustainable mb-4">
                {t('services.rse_support')}
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-sustainable" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{t('services.scope1_title')}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {renderListItems(t('services.scope1_items'))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Shield className="text-sustainable" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{t('services.scope123_title')}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {renderListItems(t('services.scope123_items'))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Leaf className="text-sustainable" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{t('services.biodiversity_title')}</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {renderListItems(t('services.biodiversity_items'))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Single centered CTA button */}
        <div className="text-center mt-16 mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="group px-12 py-4 text-lg"
            onClick={() => window.location.href = getLocalizedPath('/nos-services')}
          >
            {t('common.learn_more_services')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={24} />
          </Button>
        </div>

        {/* Separator */}
        <div className="border-t border-muted mt-16 pt-16"></div>

        {/* Statistics moved from Portfolio */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">{t('services.stats_startups')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sustainable mb-2">4</div>
            <p className="text-muted-foreground">{t('services.stats_sectors')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-commercial mb-2">25+</div>
            <p className="text-muted-foreground">{t('services.stats_experience')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">16M€</div>
            <p className="text-muted-foreground">{t('services.stats_funding')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Award, 
  Users, 
  GraduationCap, 
  Building2,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import expertiseBackground from "@/assets/expertise-background.jpg";

export const ExpertiseSection = () => {
  const { language, t } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  return (
    <section id="expertise" className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${expertiseBackground})` }}
      >
        <div className="absolute inset-0 bg-background/95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('expertise.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('expertise.subtitle')}
          </p>
        </div>

        {/* Main Expertise Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Experience */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t('expertise.commercial_years')}</h3>
                  <p className="text-white/90">{t('expertise.commercial_experience')}</p>
                </div>
              </div>
              <p className="text-white/90 mb-4 whitespace-pre-line">
                {t('expertise.commercial_desc')}
              </p>
            </Card>

            <Card className="p-8 bg-gradient-sustainable text-sustainable-foreground">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t('expertise.consulting_years')}</h3>
                  <p className="text-white/90">{t('expertise.consulting_experience')}</p>
                </div>
              </div>
              <p className="text-white/90 mb-4 whitespace-pre-line">
                {t('expertise.consulting_desc')}
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Building2 className="text-primary" size={24} />
                <h4 className="text-xl font-semibold">{t('expertise.entrepreneurship')}</h4>
              </div>
              <p className="text-muted-foreground">
                {t('expertise.entrepreneurship_desc')}
              </p>
            </Card>
          </div>

          {/* Right Column - Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" size={28} />
                {t('expertise.certifications_title')}
              </h3>
              
              <div className="space-y-4">
                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{t('expertise.mit_title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('expertise.mit_desc')}
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      <Star size={14} className="mr-1" />
                      MIT
                    </Badge>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{t('expertise.ademe_title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('expertise.ademe_desc')}
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      ADEME
                    </Badge>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{t('expertise.sales_title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('expertise.sales_desc')}
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      Commercial
                    </Badge>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{t('expertise.mba_title')}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t('expertise.mba_desc')}
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      MBA
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>

            {/* Methodologies */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('expertise.methodologies')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-commercial">{t('expertise.commercial_optimization')}</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Business Model Canvas</Badge>
                    <Badge variant="secondary">BANT</Badge>
                    <Badge variant="secondary">ACDC</Badge>
                    <Badge variant="secondary">Miller Heiman</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sustainable">{t('expertise.rse_biodiversity')}</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">MIT</Badge>
                    <Badge variant="secondary">GBS</Badge>
                    <Badge variant="secondary">ENCORE</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Strengths */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">{t('expertise.unique_approach')}</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-light p-4 rounded-full mb-4">
                <CheckCircle className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2">{t('expertise.performance_sustainability')}</h4>
              <p className="text-muted-foreground">
                {t('expertise.performance_desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-commercial-light p-4 rounded-full mb-4">
                <Users className="text-commercial" size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2">{t('expertise.sector_expertise')}</h4>
              <p className="text-muted-foreground">
                {t('expertise.sector_desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-sustainable-light p-4 rounded-full mb-4">
                <Award className="text-sustainable" size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2">{t('expertise.recognized_certifications')}</h4>
              <p className="text-muted-foreground">
                {t('expertise.certifications_desc')}
              </p>
            </div>
          </div>
          
          <Button 
            variant="sustainable"
            size="lg"
            onClick={() => window.location.href = getLocalizedPath('/a-propos')}
            className="group px-12 py-4 text-lg"
          >
            {t('expertise.discover_about')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};
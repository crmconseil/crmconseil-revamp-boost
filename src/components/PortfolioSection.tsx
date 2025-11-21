import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { 
  Leaf, 
  Brain, 
  Heart, 
  Monitor,
  Building2,
  Users,
  ArrowRight
} from "lucide-react";
import portfolioBackground from "@/assets/portfolio-background-professional.jpg";
import actionAirLogo from "@/assets/logos/action-air.jpg";
import mycophytoLogo from "@/assets/logos/mycophyto.png";
import tethysLogo from "@/assets/logos/tethys.jpg";
import hydroLogo from "@/assets/logos/hydro.jpeg";
import inalveLogo from "@/assets/logos/inalve.png";
import laPousseraieLogo from "@/assets/logos/la-pousseraie.jpg";
import lumataLogo from "@/assets/logos/lumata.png";
import daiaLogo from "@/assets/logos/daia.jpg";
import himydataLogo from "@/assets/logos/himydata.png";
import arcanSecurityLogo from "@/assets/logos/arcan-security.jpg";
import lifescientisLogo from "@/assets/logos/lifescientis.png";
import laselisLogo from "@/assets/logos/laselis.png";
import sensoriaLogo from "@/assets/logos/sensoria.jpeg";
import azothSystemsLogo from "@/assets/logos/azoth-systems.jpg";
import toumaiLogo from "@/assets/logos/toumai.png";
import neurodecLogo from "@/assets/logos/neurodec.png";
import akidaiaLogo from "@/assets/logos/akidaia.jpg";
import plenesysLogo from "@/assets/logos/plenesys.jpg";
import tekowayLogo from "@/assets/logos/tekoway.jpg";
import orangeLogo from "@/assets/logos/orange.png";
import inovafiLogo from "@/assets/logos/inovafi.png";
import ononpayLogo from "@/assets/logos/ononpay.png";
import poleScsLogo from "@/assets/logos/pole-scs.png";
import incubateurPacaLogo from "@/assets/logos/incubateur-paca.png";
import monacoTechLogo from "@/assets/logos/monacotech.png";
import poleMerLogo from "@/assets/logos/pole-mer.png";
import terresAzurLogo from "@/assets/logos/terres-azur.png";
import metropoleNiceLogo from "@/assets/logos/metropole-nice.png";
import abcLogo from "@/assets/logos/abc.png";
import ademeLogo from "@/assets/logos/ademe.png";
import aktantisLogo from "@/assets/logos/aktantis.png";
import azupLogo from "@/assets/logos/azup.jpg";
import innovagrasseLogo from "@/assets/logos/innovagrasse.jpg";
import innovinLogo from "@/assets/logos/innovin.png";
import irceLogo from "@/assets/logos/irce.jpg";
import mteLogo from "@/assets/logos/mte.png";

export const PortfolioSection = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Leaf,
      title: t('portfolio.greentech'),
      color: "text-sustainable",
      bgColor: "bg-sustainable-light",
      companies: ["ActionAir", "Mycophyto", "Hydro", "Inalve", "La Pousseraie"],
      description: t('portfolio.greentech_desc')
    },
    {
      icon: Brain,
      title: t('portfolio.deeptech'),
      color: "text-commercial",
      bgColor: "bg-commercial-light",
      companies: ["Daia", "HimyData", "Toumai", "Neurodec", "Akidaia", "Plenesys"],
      description: t('portfolio.deeptech_desc')
    },
    {
      icon: Heart,
      title: t('portfolio.healthtech'),
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      companies: ["LifeScientis", "Laselis", "Sensoria", "Tethys", "Azoth Systems"],
      description: t('portfolio.healthtech_desc')
    },
    {
      icon: Monitor,
      title: t('portfolio.digital'),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      companies: ["Tekoway", "Orange", "Lumata", "Arcan Security", "Inovafi", "Ononpay"],
      description: t('portfolio.digital_desc')
    }
  ];

  const partners = [
    { name: "Incubateur Paca-Est", type: "Incubateur" },
    { name: "MonacoTech", type: "Startup Program" },
    { name: "Pôle Mer", type: "Financement" },
    { name: "Initiative Terres d'Azur Grasse", type: "Hub Innovation" },
    { name: "Innovation Hub Nice Côte d'Azur", type: "Collectivité" },
    { name: "ABC", type: "Partenaire" },
    { name: "ADEME", type: "Partenaire" },
    { name: "Aktantis", type: "Partenaire" },
    { name: "AZUP", type: "Partenaire" },
    { name: "Innova Grasse", type: "Partenaire" },
    { name: "Innovin", type: "Partenaire" },
    { name: "IRCE", type: "Partenaire" },
    { name: "MTE", type: "Partenaire" }
  ];

  return (
    <section id="references" className="relative py-12 pb-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portfolioBackground})` }}
      >
        <div className="absolute inset-0 bg-background/92"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${sector.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className={sector.color} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{sector.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {sector.companies.map((company, idx) => {
                      const getCompanyLogo = (companyName: string) => {
                        switch(companyName) {
                          case "ActionAir":
                            return actionAirLogo;
                          case "Mycophyto":
                            return mycophytoLogo;
                          case "Tethys":
                            return tethysLogo;
                          case "Hydro":
                            return hydroLogo;
                          case "Inalve":
                            return inalveLogo;
                          case "La Pousseraie":
                            return laPousseraieLogo;
                          case "Lumata":
                            return lumataLogo;
                          case "Daia":
                            return daiaLogo;
                          case "HimyData":
                            return himydataLogo;
                          case "Toumai":
                            return toumaiLogo;
                          case "Neurodec":
                            return neurodecLogo;
                          case "Akidaia":
                            return akidaiaLogo;
                          case "Plenesys":
                            return plenesysLogo;
                          case "Arcan Security":
                            return arcanSecurityLogo;
                          case "Tekoway":
                            return tekowayLogo;
                          case "Orange":
                            return orangeLogo;
                          case "Inovafi":
                            return inovafiLogo;
                          case "Ononpay":
                            return ononpayLogo;
                          case "LifeScientis":
                            return lifescientisLogo;
                          case "Laselis":
                            return laselisLogo;
                          case "Sensoria":
                            return sensoriaLogo;
                          case "Azoth Systems":
                            return azothSystemsLogo;
                          default:
                            return null;
                        }
                      };
                      
                      const logoSrc = getCompanyLogo(company);
                      
                      return logoSrc ? (
                        <div key={idx} className="flex items-center justify-center h-20 bg-white/50 rounded-lg p-4">
                          <img 
                            src={logoSrc} 
                            alt={`${company} logo`}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <Badge key={idx} variant="secondary" className="text-sm justify-center py-2">
                          {company}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('portfolio.partners')}
          </h3>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {partners.map((partner, index) => {
                  // Map partner names to imported logos
                  const getPartnerLogo = (name: string) => {
                    switch(name) {
                      case "Incubateur Paca-Est":
                        return incubateurPacaLogo;
                      case "MonacoTech":
                        return monacoTechLogo;
                      case "Pôle Mer":
                        return poleMerLogo;
                      case "Initiative Terres d'Azur Grasse":
                        return terresAzurLogo;
                      case "Innovation Hub Nice Côte d'Azur":
                        return metropoleNiceLogo;
                      case "ABC":
                        return abcLogo;
                      case "ADEME":
                        return ademeLogo;
                      case "Aktantis":
                        return aktantisLogo;
                      case "AZUP":
                        return azupLogo;
                      case "Innova Grasse":
                        return innovagrasseLogo;
                      case "Innovin":
                        return innovinLogo;
                      case "IRCE":
                        return irceLogo;
                      case "MTE":
                        return mteLogo;
                      default:
                        return null;
                    }
                  };

                  const logoSrc = getPartnerLogo(partner.name);
                  
                  return (
                    <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                      <div className="flex items-center justify-center h-20 hover:scale-110 transition-transform group">
                        {logoSrc ? (
                          <img 
                            src={logoSrc} 
                            alt={`${partner.name} logo`}
                            className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        ) : (
                          <Building2 className="text-muted-foreground group-hover:text-primary transition-colors" size={32} />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>

      </div>
    </section>
  );
};
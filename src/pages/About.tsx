import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award,
  Target,
  Leaf,
  ArrowRight 
} from "lucide-react";
import heroImage from "@/assets/hero-sustainable-business.jpg";

const About = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const qualifications = [
    {
      icon: GraduationCap,
      title: "Bachelor of Business Administration",
      description: "USA/SKEMA Business School",
      category: "Formation"
    },
    {
      icon: Award,
      title: "Certification Miller Heiman et SPI",
      description: "Vente stratégique avancée",
      category: "Certification"
    },
    {
      icon: Leaf,
      title: "MIT - Certification in Sustainable Strategy Design",
      description: "Stratégies durables et innovation",
      category: "Spécialisation"
    }
  ];

  const experience = [
    {
      years: "15 ans",
      title: "Responsable Marketing & Directrice Commerciale",
      description: "EMEA / USA au sein de startups et PMEs, spécialisée dans la vente d'innovation auprès de Grands comptes",
      color: "text-primary"
    },
    {
      years: "11 ans",
      title: "Conseil en Performances Commerciales",
      description: "Accompagnement de startups et PME innovantes avec forte dimension durable",
      color: "text-sustainable"
    },
    {
      years: "Depuis 2010",
      title: "Entreprenariat",
      description: "Expérience dans l'E-commerce, le conseil en innovation et le tourisme",
      color: "text-commercial"
    }
  ];

  return (
    <div className="min-h-screen">
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
              À Propos de 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                Sabrina Rebelo
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Fondatrice de CRM Conseil, experte en performance commerciale durable 
              avec plus de 25 ans d'expérience dans l'accompagnement d'entreprises innovantes.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Notre Vision
            </h2>
            <div className="text-xl text-muted-foreground leading-relaxed">
              <p className="mb-6">
                Chez CRM Conseil, nous sommes profondément convaincus que{" "}
                <span className="text-primary font-semibold">
                  l'alignement de la performance commerciale avec le développement durable
                </span>{" "}
                est la seule voie viable pour l'avenir.
              </p>
              <p>
                Notre approche unique combine{" "}
                <span className="text-sustainable font-semibold">performance</span>,{" "}
                <span className="text-sustainable font-semibold">durabilité écologique</span> et{" "}
                <span className="text-sustainable font-semibold">responsabilité sociétale</span>{" "}
                pour créer une valeur durable et mesurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Expérience & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Un parcours riche et diversifié au service de votre croissance durable
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {experience.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-card-sustainable transition-all duration-300">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${exp.color} mb-3`}>
                    {exp.years}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Formations & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Une expertise certifiée et reconnue internationalement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-card-sustainable transition-all duration-300 group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <Badge variant="outline" className="mb-4">{qual.category}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {qual.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {qual.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sustainable/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à transformer votre approche commerciale ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de vos défis et explorons ensemble comment allier 
            performance commerciale et développement durable.
          </p>
          <Button 
            variant="sustainable" 
            size="lg" 
            className="group"
            onClick={scrollToContact}
          >
            Planifier un échange
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
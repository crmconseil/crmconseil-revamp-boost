import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  GraduationCap, 
  Building2,
  CheckCircle,
  Star
} from "lucide-react";

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notre Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 25 ans d'expérience combinée en développement commercial et stratégie durable
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
                  <h3 className="text-2xl font-bold">15 ans</h3>
                  <p className="text-white/90">d'expérience commerciale</p>
                </div>
              </div>
              <p className="text-white/90 mb-4">
                Responsable marketing et directrice commerciale (EMEA / USA) au sein de startups et PMEs, 
                spécialisée dans la vente d'innovation auprès de Grands comptes.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-sustainable text-sustainable-foreground">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">11 ans</h3>
                  <p className="text-white/90">de conseil spécialisé</p>
                </div>
              </div>
              <p className="text-white/90 mb-4">
                Conseil en performances commerciales pour startups / PME innovantes 
                avec forte dimension durable.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Building2 className="text-primary" size={24} />
                <h4 className="text-xl font-semibold">Entrepreneuriat</h4>
              </div>
              <p className="text-muted-foreground">
                Expérience entrepreneuriale dans l'e-commerce, le conseil en innovation et le tourisme.
              </p>
            </Card>
          </div>

          {/* Right Column - Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary" size={28} />
                Certifications & Formation
              </h3>
              
              <div className="space-y-4">
                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">MIT - Certification in Sustainable Strategy Design</h4>
                      <p className="text-muted-foreground text-sm">
                        Stratégie de développement durable certifiée par le MIT
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
                      <h4 className="font-semibold text-lg mb-2">Certification en vente stratégique</h4>
                      <p className="text-muted-foreground text-sm">
                        Miller Heiman et SPI - Méthodes de vente avancées
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
                      <h4 className="font-semibold text-lg mb-2">Bachelor of Business Administration</h4>
                      <p className="text-muted-foreground text-sm">
                        USA/SKEMA - Formation business internationale
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
                Méthodologies & Outils
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-commercial">Optimisation commerciale</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Business Model Canvas</Badge>
                    <Badge variant="secondary">BANT</Badge>
                    <Badge variant="secondary">ACDC</Badge>
                    <Badge variant="secondary">Miller Heiman</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sustainable">Bilan RSE / Biodiversité</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">MIT</Badge>
                    <Badge variant="secondary">ADEME</Badge>
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
          <h3 className="text-2xl font-bold text-foreground mb-8">Notre approche unique</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-light p-4 rounded-full mb-4">
                <CheckCircle className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2">Performance & Durabilité</h4>
              <p className="text-muted-foreground">
                Alignement de la performance commerciale avec le développement durable
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-commercial-light p-4 rounded-full mb-4">
                <Users className="text-commercial" size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2">Expertise Sectorielle</h4>
              <p className="text-muted-foreground">
                Spécialisation GreenTech, DeepTech, HealthTech et innovations durables
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-sustainable-light p-4 rounded-full mb-4">
                <Award className="text-sustainable" size={32} />
              </div>
              <h4 className="font-semibold text-lg mb-2">Certifications Reconnues</h4>
              <p className="text-muted-foreground">
                Formations MIT, ADEME et outils certifiés de mesure d'impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
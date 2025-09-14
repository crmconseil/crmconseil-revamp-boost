import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Target, Users, Globe } from "lucide-react";

const EngagementsRSE = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nos Engagements{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                RSE
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Notre approche responsable pour un développement durable et une performance commerciale éthique
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Leaf className="w-6 h-6 text-sustainable" />
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    Développement Durable
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous intégrons les principes du développement durable dans toutes nos missions d'accompagnement commercial.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><span className="w-2 h-2 bg-sustainable rounded-full mr-3"></span>Certification MIT Sustainable Strategy</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-sustainable rounded-full mr-3"></span>Partenaire ADEME</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-sustainable rounded-full mr-3"></span>Approche éco-responsable</li>
                </ul>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-full mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    Objectifs RSE
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Des objectifs clairs pour mesurer notre impact et améliorer continuellement nos pratiques.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Réduction empreinte carbone</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Économie circulaire</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Innovation responsable</li>
                </ul>
              </div>
            </div>

            {/* Placeholder pour contenu supplémentaire */}
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
                  Notre Démarche RSE Complète
                </h2>
                <p className="text-muted-foreground text-lg">
                  Une approche structurée pour un impact positif durable
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-primary/10 rounded-xl">
                  <div className="p-4 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                    <Users className="w-8 h-8 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Engagement Social</h3>
                  <p className="text-sm text-muted-foreground">
                    Accompagnement équitable et inclusif de nos clients
                  </p>
                </div>

                <div className="text-center p-6 border border-primary/10 rounded-xl">
                  <div className="p-4 bg-primary/20 rounded-full w-fit mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Impact Environnemental</h3>
                  <p className="text-sm text-muted-foreground">
                    Mesure et réduction de notre empreinte écologique
                  </p>
                </div>

                <div className="text-center p-6 border border-primary/10 rounded-xl">
                  <div className="p-4 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                    <Target className="w-8 h-8 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Performance Éthique</h3>
                  <p className="text-sm text-muted-foreground">
                    Excellence commerciale respectueuse des valeurs
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-muted/50 rounded-xl">
                <p className="text-center text-muted-foreground italic">
                  <em>Cette page sera enrichie avec le contenu détaillé de nos engagements RSE. 
                  Merci de fournir les informations du PDF initial pour compléter cette section.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngagementsRSE;
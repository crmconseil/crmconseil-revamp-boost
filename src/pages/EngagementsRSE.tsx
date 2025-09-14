import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Target, Users, Globe, Handshake, Bike, Wind, Recycle } from "lucide-react";
import rseBackground from "@/assets/rse-photo-background.jpg";

const EngagementsRSE = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${rseBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sustainable/10 to-primary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
                Nos Actions RSE Concrètes
              </h2>
              <p className="text-muted-foreground text-lg">
                Une approche structurée en 4 piliers pour un impact positif durable
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Pilier 1: Clients & Stratégie RSE */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Handshake className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    1. Clients & Stratégie RSE
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Ciblage clients / partenaires / fournisseurs avec engagements RSE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Adhérent Pacte National Transition Énergétique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Accompagnement et formation des équipes (MIT)</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 2: Transports Durables */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-full mr-4">
                    <Bike className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    2. Transports Durables
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Limitation des déplacements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Abonnements transports partagés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Vélo électrique d'entreprise</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 3: Sourcing Énergétique Propre */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-sustainable/20 rounded-full mr-4">
                    <Wind className="w-6 h-6 text-sustainable" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    3. Sourcing Énergétique Propre
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Électricité 100% renouvelable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Équipements/Matières 1ères recyclables/recyclés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>LED / Thermostats intelligents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sustainable rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Digitalisation des documents</span>
                  </li>
                </ul>
              </div>

              {/* Pilier 4: Gestion des Déchets */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-full mr-4">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                    4. Gestion des Déchets
                  </h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Tri sélectif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Compostage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>No Plastic</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services RSE */}
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-4">
                  Nos Services d'Accompagnement RSE
                </h2>
                <p className="text-muted-foreground text-lg">
                  Des solutions concrètes pour mesurer et améliorer votre impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-primary/10 rounded-xl bg-muted/30">
                  <div className="p-4 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                    <Target className="w-8 h-8 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Bilan Émissions Directes - Scope 1</h3>
                  <div className="text-left text-xs space-y-2">
                    <h4 className="font-semibold">Livrables :</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Bilan carbone initial</li>
                      <li>• Rapport d'impact scénarii</li>
                      <li>• Matrice de suivi d'impact</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center p-6 border border-primary/10 rounded-xl bg-muted/30">
                  <div className="p-4 bg-primary/20 rounded-full w-fit mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Bilan RSE Complet</h3>
                  <div className="text-left text-xs space-y-2">
                    <h4 className="font-semibold">Livrables :</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Bilan Scope 1, 2, 3 initial</li>
                      <li>• Rapport des vulnérabilités ESG</li>
                      <li>• Rapport impact Scénarii+ROI</li>
                      <li>• Matrice de suivi d'impact</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center p-6 border border-primary/10 rounded-xl bg-muted/30">
                  <div className="p-4 bg-sustainable/20 rounded-full w-fit mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-sustainable" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Impact Biodiversité</h3>
                  <div className="text-left text-xs space-y-2">
                    <h4 className="font-semibold">Approche :</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Double matérialité</li>
                      <li>• Impacts écologiques</li>
                      <li>• Impacts sociaux</li>
                      <li>• Gouvernance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                  Nos Certifications & Partenariats
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-sustainable mb-2">MIT Certification</h4>
                    <p className="text-xs text-muted-foreground">Sustainable Strategy Design</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">ADEME</h4>
                    <p className="text-xs text-muted-foreground">Partenaire Officiel</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-sustainable mb-2">Pacte National</h4>
                    <p className="text-xs text-muted-foreground">Transition Énergétique</p>
                  </div>
                </div>
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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mentions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                Légales
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Informations légales et conditions d'utilisation du site CRM Conseil
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-8 text-center font-medium">
                En vigueur au 14/09/2025
              </p>

              <div className="space-y-10 text-foreground leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en l'économie numérique, il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'"Utilisateur", du site www.crmconseil.com, ci-après le "Site", les présentes mentions légales.
                  </p>
                  <p>
                    La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                  </p>
                  <p>
                    Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales".
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    EDITION DU SITE
                  </h2>
                  <p className="mb-4">
                    L'édition du Site est assurée par la société CRM Conseil, dont le gérant est Sabrina Broggini, immatriculée au Registre du Commerce et des Sociétés de Monaco sous le numéro RCI 20P09690 dont le siège social est situé au 12 BOULEVARD PRINCESSE CHARLOTTE, 98000 MONACO.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Numéro de téléphone : +33622953137</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Adresse e-mail : contact@crmconseil.com</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>N° de TVA intracommunautaire : FR87000153576</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Directeur de la publication : Sabrina Broggini</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">ci-après l'"Editeur".</p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    HEBERGEUR
                  </h2>
                  <p>
                    L'hébergeur du Site est la société CRM Conseil, dont le siège social est situé au 12 boulevard princesse charlotte 98000 Monaco. Le numéro de téléphone de l'hébergeur est le 33622953137.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    ACCES AU SITE
                  </h2>
                  <p>
                    Le Site est normalement accessible, à tout moment, à l'Utilisateur. Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou interrompre le Site afin de procéder, notamment, à des mises à jour ou des modifications de son contenu. L'Editeur ne pourra en aucun cas être tenu responsable des conséquences éventuelles de cette indisponibilité sur les activités de l'Utilisateur.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    COLLECTE DES DONNEES
                  </h2>
                  <p className="mb-4">
                    Le Site assure à l'Utilisateur une collecte et un traitement des données personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers aux libertés et dans le respect de la règlementation applicable en matière de traitement des données à caractère personnel conformément au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (ci-après, ensemble, la "Règlementation applicable en matière de protection des Données à caractère personnel").
                  </p>
                  <p className="mb-4">
                    En vertu de la Règlementation applicable en matière de protection des Données à caractère personnel, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur peut exercer ce droit :
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>par mail à l'adresse email contact@crmconseil.com</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>depuis le formulaire de contact</li>
                    </ul>
                  </div>
                  <p>
                    Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation expresse de l'Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que prévues par la règlementation en vigueur.
                  </p>
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

export default MentionsLegales;
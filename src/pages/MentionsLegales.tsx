import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mentions Légales
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-muted-foreground mb-8">
              En vigueur au 14/09/2025
            </p>

            <div className="space-y-8 text-sm leading-relaxed">
              <div>
                <p className="mb-4">
                  Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en l'économie numérique, il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'"Utilisateur", du site www.crmconseil.com, ci-après le "Site", les présentes mentions légales.
                </p>
                <p className="mb-4">
                  La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                </p>
                <p className="mb-4">
                  Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales".
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">EDITION DU SITE</h2>
                <p className="mb-4">
                  L'édition du Site est assurée par la société CRM Conseil, dont le gérant est Sabrina Broggini, immatriculée au Registre du Commerce et des Sociétés de Monaco sous le numéro RCI 20P09690 dont le siège social est situé au 12 BOULEVARD PRINCESSE CHARLOTTE,
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Numéro de téléphone : +33622953137</li>
                  <li>Adresse e-mail : contact@crmconseil.com</li>
                  <li>N° de TVA intracommunautaire : FR87000153576</li>
                  <li>Directeur de la publication : Sabrina Broggini</li>
                </ul>
                <p>ci-après l'"Editeur".</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">HEBERGEUR</h2>
                <p className="mb-4">
                  L'hébergeur du Site est la société CRM Conseil, dont le siège social est situé au 12 boulevard princesse charlotte 98000 Monaco. Le numéro de téléphone de l'hébergeur est le 33622953137.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">ACCES AU SITE</h2>
                <p className="mb-4">
                  Le Site est normalement accessible, à tout moment, à l'Utilisateur. Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou interrompre le Site afin de procéder, notamment, à des mises à jour ou des modifications de son contenu. L'Editeur ne pourra en aucun cas être tenu responsable des conséquences éventuelles de cette indisponibilité sur les activités de l'Utilisateur.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">COLLECTE DES DONNEES</h2>
                <p className="mb-4">
                  Le Site assure à l'Utilisateur une collecte et un traitement des données personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers aux libertés et dans le respect de la règlementation applicable en matière de traitement des données à caractère personnel conformément au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (ci-après, ensemble, la "Règlementation applicable en matière de protection des Données à caractère personnel").
                </p>
                <p className="mb-4">
                  En vertu de la Règlementation applicable en matière de protection des Données à caractère personnel, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur peut exercer ce droit :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>par mail à l'adresse email contact@crmconseil.com</li>
                  <li>depuis le formulaire de contact</li>
                </ul>
                <p className="mb-4">
                  Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation expresse de l'Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que prévues par la règlementation en vigueur.
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

export default MentionsLegales;
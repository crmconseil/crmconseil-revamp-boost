import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Mentions Légales - CRM Conseil | Informations légales"
        description="Mentions légales de CRM Conseil. Informations sur l'éditeur, l'hébergement, la collecte des données et la politique de cookies conforme RGPD."
        keywords="mentions légales CRM conseil, informations légales, politique cookies, RGPD, protection données"
        canonical="/mentions-legales"
        noindex={true}
      />
      <Header />
      
      <main role="main">
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

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    POLITIQUE DE GESTION DES COOKIES
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">Qu'est-ce qu'un cookie ?</h3>
                  <p className="mb-4">
                    Un cookie est un petit fichier de données stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Les cookies permettent au site de se souvenir de vos actions et préférences (comme la langue, la taille des caractères et d'autres paramètres d'affichage) pendant une période donnée.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Types de cookies utilisés</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">🔒 Cookies Nécessaires</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Gestion de la session utilisateur</li>
                        <li>• Mémorisation du consentement aux cookies</li>
                        <li>• Sécurité et prévention des fraudes</li>
                        <li>• Fonctionnement du formulaire de contact</li>
                      </ul>
                      <p className="text-xs text-primary mt-2 font-medium">Durée de conservation : Session ou 12 mois maximum</p>
                    </div>

                    <div className="bg-sustainable/5 border border-sustainable/20 rounded-lg p-4">
                      <h4 className="font-semibold text-sustainable mb-2">📊 Cookies Analytiques</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        Ces cookies nous permettent de compter les visites et sources de trafic afin d'améliorer les performances de notre site.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Mesure d'audience et statistiques de visite</li>
                        <li>• Analyse du comportement des utilisateurs</li>
                        <li>• Optimisation de l'expérience utilisateur</li>
                        <li>• Identification des pages populaires</li>
                      </ul>
                      <p className="text-xs text-sustainable mt-2 font-medium">Durée de conservation : 24 mois maximum</p>
                    </div>

                    <div className="bg-commercial/5 border border-commercial/20 rounded-lg p-4">
                      <h4 className="font-semibold text-commercial mb-2">🎯 Cookies Marketing</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        Ces cookies peuvent être définis par nos partenaires publicitaires pour personnaliser les annonces.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Personnalisation des publicités</li>
                        <li>• Mesure de l'efficacité des campagnes</li>
                        <li>• Remarketing et reciblage publicitaire</li>
                        <li>• Partage sur les réseaux sociaux</li>
                      </ul>
                      <p className="text-xs text-commercial mt-2 font-medium">Durée de conservation : 12 mois maximum</p>
                    </div>

                    <div className="bg-muted/30 border border-input rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">⚙️ Cookies Fonctionnels</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Mémorisation des préférences utilisateur</li>
                        <li>• Intégration de widgets tiers (cartes, chat)</li>
                        <li>• Amélioration de la navigation</li>
                        <li>• Fonctionnalités avancées du site</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">Durée de conservation : 12 mois maximum</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Gestion de vos préférences</h3>
                  <p className="mb-4">
                    Conformément à la réglementation en vigueur, vous avez la possibilité de gérer vos préférences concernant les cookies :
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Bandeau de consentement :</strong> Lors de votre première visite, un bandeau vous permet d'accepter ou refuser les cookies optionnels</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Paramètres détaillés :</strong> Vous pouvez personnaliser vos choix par catégorie de cookies</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Modification :</strong> Vous pouvez modifier vos préférences à tout moment en supprimant les cookies de votre navigateur</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Navigateur :</strong> Vous pouvez également paramétrer votre navigateur pour refuser les cookies</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Paramétrage de votre navigateur</h3>
                  <p className="mb-4">
                    Vous pouvez configurer votre navigateur pour gérer les cookies selon vos préférences :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Google Chrome</h5>
                      <p className="text-xs text-muted-foreground">Paramètres → Confidentialité et sécurité → Cookies et autres données</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Mozilla Firefox</h5>
                      <p className="text-xs text-muted-foreground">Préférences → Vie privée et sécurité → Cookies et données</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Safari</h5>
                      <p className="text-xs text-muted-foreground">Préférences → Confidentialité → Cookies et données</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Microsoft Edge</h5>
                      <p className="text-xs text-muted-foreground">Paramètres → Cookies et autorisations de site</p>
                    </div>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-primary mb-2">⚠️ Important</h4>
                    <p className="text-sm text-foreground/80">
                      Désactiver certains cookies peut affecter le bon fonctionnement du site et réduire la qualité de votre expérience de navigation. Les cookies nécessaires ne peuvent pas être désactivés car ils sont indispensables au fonctionnement du site.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact</h3>
                  <p className="mb-4">
                    Pour toute question concernant notre politique de cookies ou pour exercer vos droits, vous pouvez nous contacter :
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Email : contact@crmconseil.com</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Formulaire de contact sur le site</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Courrier : CRM Conseil, 12 Boulevard Princesse Charlotte, 98000 Monaco</li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Dernière mise à jour de cette politique : 17 décembre 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
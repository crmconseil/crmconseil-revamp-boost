import { Leaf, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">CRM</div>
              <div className="text-2xl font-bold opacity-90">CONSEIL</div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Votre partenaire pour une performance commerciale durable. 
              Alliant excellence commerciale et développement durable.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Leaf size={16} />
              <span className="text-xs">Certifié Développement Durable MIT</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div><a href="/" className="hover:text-primary-foreground transition-colors">Accueil</a></div>
              <div><a href="/services" className="hover:text-primary-foreground transition-colors">Services</a></div>
              <div><a href="/a-propos" className="hover:text-primary-foreground transition-colors">À propos</a></div>
              <div><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact</a></div>
              <div><a href="/engagements-rse" className="hover:text-primary-foreground transition-colors">Nos engagements RSE</a></div>
            </div>
          </div>

          {/* Contact rapide */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:contact@crmconseil.com" className="hover:text-primary-foreground transition-colors">
                  contact@crmconseil.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+33622953137" className="hover:text-primary-foreground transition-colors">
                  +33 6 22 95 31 37
                </a>
              </div>
              <div className="text-xs">
                <strong>Sabrina Broggini</strong><br />
                Consultante Senior
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nos Services</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>• Accompagnement Commercial</div>
              <div>• Bilan RSE & Carbone</div>
              <div>• Impact Biodiversité</div>
              <div>• Stratégie Durable</div>
              <div>• Formation & Coaching</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-xs text-primary-foreground/60">
                © 2025 CRM Conseil. Tous droits réservés.
              </p>
              <a 
                href="/mentions-legales" 
                className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors underline"
              >
                Mentions légales
              </a>
            </div>
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <span>Certifié MIT Sustainable Strategy</span>
              <span>•</span>
              <span>ADEME Partenaire</span>
              <span>•</span>
              <span>Miller Heiman Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
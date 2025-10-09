import { Leaf, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { language, t } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    return path;
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">CRM</div>
              <div className="text-2xl font-bold opacity-90">CONSEIL</div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Leaf size={16} />
              <span className="text-xs">{t('footer.certification')}</span>
            </div>
            
            {/* Navigation inline */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                <a href={getLocalizedPath('/')} className="hover:text-primary-foreground transition-colors">{t('nav.home')}</a>
                <a href={getLocalizedPath('/nos-services')} className="hover:text-primary-foreground transition-colors">{t('nav.services')}</a>
                <a href={getLocalizedPath('/a-propos')} className="hover:text-primary-foreground transition-colors">{t('nav.about')}</a>
                <a href={getLocalizedPath('/contact')} className="hover:text-primary-foreground transition-colors">{t('nav.contact')}</a>
                <a href={getLocalizedPath('/mentions-legales')} className="hover:text-primary-foreground transition-colors">{t('nav.legal')}</a>
              </div>
            </div>
          </div>

          {/* Contact rapide */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.contact')}</h3>
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
                {t('footer.consultant')}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-xs text-primary-foreground/60">
                © 2025 CRM Conseil. {t('footer.rights')}
              </p>
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <span>{t('footer.certifications')}</span>
              <div id="wcb" className="carbonbadge wcb-d"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.appointment': 'Rendez-vous',
    'nav.legal': 'Mentions légales',
    
    // Common
    'common.contact_us': 'Nous contacter',
    'common.book_appointment': 'Prendre rendez-vous',
    'common.learn_more': 'En savoir plus',
    'common.read_more': 'Lire la suite',
    'common.our_services': 'Nos services',
    'common.our_expertise': 'Notre expertise',
    'common.phone': 'Téléphone',
    'common.email': 'Email',
    'common.address': 'Adresse',
    
    // Hero Section
    'hero.title': 'Conseil en Performance Commerciale & RSE',
    'hero.subtitle': 'Accompagnement des PME vers plus de performance et de durabilité',
    'hero.description': 'CRM Conseil vous accompagne dans la transformation de votre activité commerciale en intégrant les enjeux du développement durable. Expertise en stratégie commerciale, RSE et bilan carbone pour les entreprises du Sud-Est.',
    
    // Footer
    'footer.company': 'CRM Conseil',
    'footer.description': 'Expert en performance commerciale et RSE pour les PME du Sud-Est de la France.',
    'footer.quick_links': 'Liens rapides',
    'footer.contact_info': 'Contact',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.appointment': 'Book Appointment',
    'nav.legal': 'Legal Notice',
    
    // Common
    'common.contact_us': 'Contact us',
    'common.book_appointment': 'Book appointment',
    'common.learn_more': 'Learn more',
    'common.read_more': 'Read more',
    'common.our_services': 'Our services',
    'common.our_expertise': 'Our expertise',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    
    // Hero Section
    'hero.title': 'Commercial Performance & CSR Consulting',
    'hero.subtitle': 'Supporting SMEs towards more performance and sustainability',
    'hero.description': 'CRM Conseil supports you in transforming your commercial activity by integrating sustainable development challenges. Expertise in commercial strategy, CSR and carbon footprint for companies in South-East France.',
    
    // Footer
    'footer.company': 'CRM Conseil',
    'footer.description': 'Expert in commercial performance and CSR for SMEs in South-East France.',
    'footer.quick_links': 'Quick links',
    'footer.contact_info': 'Contact',
    'footer.rights': 'All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('fr');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
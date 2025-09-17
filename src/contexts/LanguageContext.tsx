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
    'common.discover_services': 'Découvrir nos services',
    'common.learn_more_services': 'En savoir plus sur nos services',
    
    // Hero Section
    'hero.title': 'Votre partenaire pour une',
    'hero.title_highlight': 'Performance commerciale durable',
    'hero.subtitle': 'Accompagnement commercial stratégique et opérationnel pour startups et PME innovantes, alliant optimisation commerciale et valorisation d\'une stratégie RSE tangible.',
    'hero.commercial_performance': 'Performance Commerciale',
    'hero.sustainable_development': 'Développement Durable',
    
    // Services Section
    'services.title': 'Nos Services',
    'services.subtitle': 'Des solutions personnalisées pour votre croissance et développement durable',
    'services.commercial_optimization': 'Optimisation commerciale',
    'services.rse_support': 'Accompagnement RSE / Durabilité',
    'services.targeting_title': 'Ciblage / Acquisition',
    'services.targeting_items': '• Optimisation du discours et ciblage commercial\n• Étude de marché\n• Génération de leads externalisée',
    'services.acceleration_title': 'Accélération / Valorisation',
    'services.acceleration_items': '• Levée de fonds\n• Choix d\'outils CRM/ERP\n• Accélération du pipeline',
    'services.optimization_title': 'Optimisation des process',
    'services.optimization_items': '• Audit des outils et process commerciaux\n• Accompagnement au changement\n• Formation des équipes commerciales',
    'services.scope1_title': 'Bilan Emissions Directes - Scope 1',
    'services.scope1_items': '• Analyse Impact Carbone direct\n• Analyse Impact Social\n• Modélisation de scénarios\n• Suivi d\'impacts',
    'services.scope123_title': 'Bilan RSE Complet - Scope 1, 2, 3',
    'services.scope123_items': '• Impacts Carbone et Sociaux Directs/Indirects\n• Double matérialité - impacts et vulnérabilité\n• Scénarios et calcul de ROI\n• Suivi plan d\'action',
    'services.biodiversity_title': 'Bilan Impact Biodiversité',
    'services.biodiversity_items': '• Impacts directs et indirects sur la biodiversité\n• Matrice de matérialité Biodiversité\n• Modélisation de scénarios\n• Suivi d\'impacts',
    'services.stats_startups': 'Startups accompagnées',
    'services.stats_sectors': 'Secteurs d\'expertise',
    'services.stats_experience': 'Années d\'expérience',
    'services.stats_funding': 'Financements cumulés pour un client fidèle',
    
    // Footer
    'footer.company': 'CRM Conseil',
    'footer.description': 'Votre partenaire pour une performance commerciale durable. Alliant excellence commerciale et développement durable.',
    'footer.certification': 'Certifié Développement Durable MIT',
    'footer.contact': 'Contact',
    'footer.consultant': 'Consultante Senior',
    'footer.rights': 'Tous droits réservés.',
    'footer.certifications': 'Certifié MIT Sustainable Strategy • ADEME Partenaire • Miller Heiman Certified',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.description': 'Nous vous recontacterons dans les plus brefs délais.',
    'contact.form_name': 'Nom',
    'contact.form_email': 'Email',
    'contact.form_message': 'Message',
    'contact.form_send': 'Envoyer',
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
    'common.discover_services': 'Discover our services',
    'common.learn_more_services': 'Learn more about our services',
    
    // Hero Section
    'hero.title': 'Your partner for',
    'hero.title_highlight': 'Sustainable Commercial Performance',
    'hero.subtitle': 'Strategic and operational commercial support for innovative startups and SMEs, combining commercial optimization and enhancement of a tangible CSR strategy.',
    'hero.commercial_performance': 'Commercial Performance',
    'hero.sustainable_development': 'Sustainable Development',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Customized solutions for your growth and sustainable development',
    'services.commercial_optimization': 'Commercial optimization',
    'services.rse_support': 'CSR / Sustainability Support',
    'services.targeting_title': 'Targeting / Acquisition',
    'services.targeting_items': '• Commercial speech and targeting optimization\n• Market research\n• Outsourced lead generation',
    'services.acceleration_title': 'Acceleration / Valorization',
    'services.acceleration_items': '• Fundraising\n• CRM/ERP tools selection\n• Pipeline acceleration',
    'services.optimization_title': 'Process Optimization',
    'services.optimization_items': '• Commercial tools and process audit\n• Change management\n• Sales team training',
    'services.scope1_title': 'Direct Emissions Assessment - Scope 1',
    'services.scope1_items': '• Direct Carbon Impact Analysis\n• Social Impact Analysis\n• Scenario modeling\n• Impact tracking',
    'services.scope123_title': 'Complete CSR Assessment - Scope 1, 2, 3',
    'services.scope123_items': '• Direct/Indirect Carbon and Social Impacts\n• Double materiality - impacts and vulnerability\n• Scenarios and ROI calculation\n• Action plan monitoring',
    'services.biodiversity_title': 'Biodiversity Impact Assessment',
    'services.biodiversity_items': '• Direct and indirect impacts on biodiversity\n• Biodiversity materiality matrix\n• Scenario modeling\n• Impact tracking',
    'services.stats_startups': 'Startups supported',
    'services.stats_sectors': 'Expertise sectors',
    'services.stats_experience': 'Years of experience',
    'services.stats_funding': 'Cumulative funding for a loyal client',
    
    // Footer
    'footer.company': 'CRM Conseil',
    'footer.description': 'Your partner for sustainable commercial performance. Combining commercial excellence and sustainable development.',
    'footer.certification': 'MIT Sustainable Development Certified',
    'footer.contact': 'Contact',
    'footer.consultant': 'Senior Consultant',
    'footer.rights': 'All rights reserved.',
    'footer.certifications': 'MIT Sustainable Strategy Certified • ADEME Partner • Miller Heiman Certified',
    
    // Contact Section
    'contact.title': 'Contact us',
    'contact.description': 'We will get back to you as soon as possible.',
    'contact.form_name': 'Name',
    'contact.form_email': 'Email',
    'contact.form_message': 'Message',
    'contact.form_send': 'Send',
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
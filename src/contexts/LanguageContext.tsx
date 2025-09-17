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
    'services.ready_transform': 'Prêt à transformer votre entreprise ?',
    'services.transform_desc': 'Réservez votre consultation gratuite de 30 minutes pour discuter de vos besoins et découvrir comment nous pouvons accompagner votre entreprise.',
    
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
    'contact.subtitle': 'Parlons de votre projet et découvrons comment allier performance commerciale et développement durable',
    'contact.description': 'Nous vous recontacterons dans les plus brefs délais.',
    'contact.phone_label': 'Téléphone',
    'contact.address_label': 'Adresse', 
    'contact.address_value': 'Monaco',
    'contact.service_area': 'Zone d\'intervention',
    'contact.service_area_value': 'Monaco • France • Europe • International',
    'contact.commercial_card': 'Commercial',
    'contact.commercial_desc': 'Performance & Croissance',  
    'contact.rse_card': 'RSE / Durabilité',
    'contact.rse_desc': 'Impact & Mesure',
    'contact.form_name': 'Nom',
    'contact.form_full_name': 'Nom complet *',
    'contact.form_name_placeholder': 'Votre nom',
    'contact.form_email': 'Email *',
    'contact.form_email_placeholder': 'votre@email.com',
    'contact.form_company': 'Entreprise *',
    'contact.form_company_placeholder': 'Nom de votre entreprise',
    'contact.form_service': 'Service d\'intérêt',
    'contact.form_service_select': 'Sélectionnez un service',
    'contact.form_service_commercial': 'Accompagnement Commercial',
    'contact.form_service_scope1': 'Bilan RSE - Scope 1',
    'contact.form_service_scope123': 'Bilan RSE Complet - Scope 1, 2, 3',
    'contact.form_service_biodiversity': 'Bilan Impact Biodiversité',
    'contact.form_message': 'Message *',
    'contact.form_message_placeholder': 'Décrivez votre projet...',
    'contact.form_send': 'Envoyer le message',
    'contact.form_required': '* Champs obligatoires',
    'contact.success_title': 'Message envoyé !',
    'contact.success_message': 'Nous vous recontacterons dans les plus brefs délais.',
    
    // Expertise Section
    'expertise.title': 'Notre Expertise',
    'expertise.subtitle': 'Une approche unique alliant performance commerciale et développement durable',
    'expertise.commercial_years': '15+ ans',
    'expertise.commercial_experience': 'Expérience commerciale',
    'expertise.commercial_desc': 'Direction commerciale, développement business et levées de fonds pour des startups innovantes dans les secteurs GreenTech, DeepTech et HealthTech.',
    'expertise.consulting_years': '8+ ans',
    'expertise.consulting_experience': 'Conseil en durabilité',
    'expertise.consulting_desc': 'Accompagnement RSE et stratégies de développement durable pour entreprises innovantes, avec certifications MIT et ADEME.',
    'expertise.entrepreneurship': 'Entrepreneuriat',
    'expertise.entrepreneurship_desc': 'Expérience entrepreneuriale avec création et développement d\'entreprises dans l\'innovation technologique.',
    'expertise.certifications_title': 'Certifications & Formations',
    'expertise.mit_title': 'MIT Sustainable Strategy',
    'expertise.mit_desc': 'Certification en stratégie de développement durable par le Massachusetts Institute of Technology',
    'expertise.sales_title': 'Miller Heiman Sales Process',
    'expertise.sales_desc': 'Certification en processus de vente stratégique et gestion de pipeline commercial',
    'expertise.mba_title': 'MBA Management & Strategy',
    'expertise.mba_desc': 'Master en administration des affaires, spécialisation management et stratégie d\'entreprise',
    'expertise.methodologies': 'Méthodologies & Outils',
    'expertise.commercial_optimization': 'Optimisation Commerciale',
    'expertise.rse_biodiversity': 'RSE & Biodiversité',
    'expertise.unique_approach': 'Notre Approche Unique',
    'expertise.performance_sustainability': 'Performance & Durabilité',
    'expertise.performance_desc': 'Nous combinons excellence commerciale et stratégies durables pour une croissance responsable.',
    'expertise.sector_expertise': 'Expertise Sectorielle',
    'expertise.sector_desc': 'Spécialisation dans l\'innovation technologique : GreenTech, DeepTech, HealthTech et Digital.',
    'expertise.recognized_certifications': 'Certifications Reconnues',
    'expertise.certifications_desc': 'Formations MIT, ADEME et Miller Heiman pour une expertise de pointe.',
    'expertise.discover_about': 'Découvrir notre parcours',
    
    // Portfolio Section
    'portfolio.title': 'Nos Références',
    'portfolio.subtitle': 'Plus de 60 startups accompagnées dans leur développement commercial et leur stratégie RSE',
    'portfolio.greentech': 'GreenTech',
    'portfolio.greentech_desc': 'Technologies vertes et solutions environnementales',
    'portfolio.deeptech': 'DeepTech',
    'portfolio.deeptech_desc': 'Intelligence artificielle et technologies de pointe',
    'portfolio.healthtech': 'HealthTech',
    'portfolio.healthtech_desc': 'Technologies médicales et santé digitale',
    'portfolio.digital': 'Digital & Tech',
    'portfolio.digital_desc': 'Solutions numériques et transformation digitale',
    'portfolio.partners': 'Nos Partenaires',
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
    'services.ready_transform': 'Ready to transform your business sustainably?',
    'services.transform_desc': 'Book your free 30-minute consultation to discuss your needs and discover how we can support your company.',
    
    // Footer
    'footer.company': 'CRM Conseil',
    'footer.description': 'Your partner for sustainable commercial performance. Combining commercial excellence and sustainable development.',
    'footer.certification': 'MIT Sustainable Development Certified',
    'footer.contact': 'Contact',
    'footer.consultant': 'Senior Consultant',
    'footer.rights': 'All rights reserved.',
    'footer.certifications': 'MIT Sustainable Strategy Certified • ADEME Partner • Miller Heiman Certified',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Let\'s talk about your project and discover how to combine commercial performance and sustainable development',
    'contact.description': 'We will contact you as soon as possible.',
    'contact.phone_label': 'Phone',
    'contact.address_label': 'Address', 
    'contact.address_value': 'Monaco',
    'contact.service_area': 'Service Area',
    'contact.service_area_value': 'Monaco • France • Europe • International',
    'contact.commercial_card': 'Commercial',
    'contact.commercial_desc': 'Performance & Growth',  
    'contact.rse_card': 'CSR / Sustainability',
    'contact.rse_desc': 'Impact & Measurement',
    'contact.form_name': 'Name',
    'contact.form_full_name': 'Full Name *',
    'contact.form_name_placeholder': 'Your name',
    'contact.form_email': 'Email *',
    'contact.form_email_placeholder': 'your@email.com',
    'contact.form_company': 'Company *',
    'contact.form_company_placeholder': 'Your company name',
    'contact.form_service': 'Service of Interest',
    'contact.form_service_select': 'Select a service',
    'contact.form_service_commercial': 'Commercial Support',
    'contact.form_service_scope1': 'CSR Report - Scope 1',
    'contact.form_service_scope123': 'Complete CSR Report - Scope 1, 2, 3',
    'contact.form_service_biodiversity': 'Biodiversity Impact Report',
    'contact.form_message': 'Message *',
    'contact.form_message_placeholder': 'Describe your project...',
    'contact.form_send': 'Send message',
    'contact.form_required': '* Required fields',
    'contact.success_title': 'Message sent!',
    'contact.success_message': 'We will contact you as soon as possible.',
    
    // Expertise Section
    'expertise.title': 'Our Expertise',
    'expertise.subtitle': 'A unique approach combining commercial performance and sustainable development',
    'expertise.commercial_years': '15+ years',
    'expertise.commercial_experience': 'Commercial experience',
    'expertise.commercial_desc': 'Commercial management, business development and fundraising for innovative startups in GreenTech, DeepTech and HealthTech sectors.',
    'expertise.consulting_years': '8+ years',
    'expertise.consulting_experience': 'Sustainability consulting',
    'expertise.consulting_desc': 'CSR support and sustainable development strategies for innovative companies, with MIT and ADEME certifications.',
    'expertise.entrepreneurship': 'Entrepreneurship',
    'expertise.entrepreneurship_desc': 'Entrepreneurial experience with creation and development of companies in technological innovation.',
    'expertise.certifications_title': 'Certifications & Training',
    'expertise.mit_title': 'MIT Sustainable Strategy',
    'expertise.mit_desc': 'Sustainable development strategy certification by the Massachusetts Institute of Technology',
    'expertise.sales_title': 'Miller Heiman Sales Process',
    'expertise.sales_desc': 'Strategic sales process and commercial pipeline management certification',
    'expertise.mba_title': 'MBA Management & Strategy',
    'expertise.mba_desc': 'Master in Business Administration, specializing in management and business strategy',
    'expertise.methodologies': 'Methodologies & Tools',
    'expertise.commercial_optimization': 'Commercial Optimization',
    'expertise.rse_biodiversity': 'CSR & Biodiversity',
    'expertise.unique_approach': 'Our Unique Approach',
    'expertise.performance_sustainability': 'Performance & Sustainability',
    'expertise.performance_desc': 'We combine commercial excellence and sustainable strategies for responsible growth.',
    'expertise.sector_expertise': 'Sector Expertise',
    'expertise.sector_desc': 'Specialization in technological innovation: GreenTech, DeepTech, HealthTech and Digital.',
    'expertise.recognized_certifications': 'Recognized Certifications',
    'expertise.certifications_desc': 'MIT, ADEME and Miller Heiman training for cutting-edge expertise.',
    'expertise.discover_about': 'Discover our journey',
    
    // Portfolio Section
    'portfolio.title': 'Our References',
    'portfolio.subtitle': 'More than 60 startups supported in their commercial development and CSR strategy',
    'portfolio.greentech': 'GreenTech',
    'portfolio.greentech_desc': 'Green technologies and environmental solutions',
    'portfolio.deeptech': 'DeepTech',
    'portfolio.deeptech_desc': 'Artificial intelligence and cutting-edge technologies',
    'portfolio.healthtech': 'HealthTech',
    'portfolio.healthtech_desc': 'Medical technologies and digital health',
    'portfolio.digital': 'Digital & Tech',
    'portfolio.digital_desc': 'Digital solutions and digital transformation',
    'portfolio.partners': 'Our Partners',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    return (savedLanguage as Language) || browserLanguage;
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
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
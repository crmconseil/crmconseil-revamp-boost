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
    
    // Services Page
    'services.page_title': 'Services - CRM Conseil | Accompagnement Commercial & RSE pour PME',
    'services.page_description': 'Découvrez nos services d\'accompagnement commercial et RSE : bilan carbone, stratégie commerciale, conseil développement durable. Expertise certifiée pour startups et PME à Nice, Monaco, Cannes.',
    'services.page_keywords': 'services conseil commercial, bilan carbone PME, accompagnement RSE, stratégie commerciale, développement durable entreprise, consultant Nice Monaco',
    'services.quote': '"Chez CRM Conseil, nous sommes profondément convaincus que <strong class="text-sustainable font-semibold">l\'alignement de la performance commerciale avec une démarche concrète de durabilité</strong> est la seule voie viable pour l\'avenir."',
    'services.performance_sustainability': 'Performance et durabilité commerciale',
    'services.ecological_sustainability': 'Durabilité écologique et sociétale',
    'services.discover_services': 'Découvrez nos services',
    'services.commercial_optimization_missions': 'Missions d\'optimisation commerciale',
    'services.rse_support_bilans': 'Accompagnements et Bilans RSE',
    'services.commercial_intro_1': 'Moins de 40 % du temps des commerciaux est dédié à la vente. CRM Conseil aide les startups et PME à éliminer les blocages, optimiser leurs processus de vente et maximiser leur efficacité commerciale. Simplifiez vos outils, perfectionnez vos pitchs et atteignez des résultats durables.',
    'services.commercial_intro_2': 'Notre approche combine analyse des performances actuelles, formation pratique et accompagnement sur le terrain pour transformer vos équipes commerciales en forces de vente performantes. Nos missions sont courtes et pratiques pour respecter les budgets et le temps rapide de nos clients startups et PMEs. Vous récupérez des éléments utilisables immédiatement pour continuer votre prospection en toute autonomie.',
    'services.process_optimization_title': 'Optimisation des process commerciaux',
    'services.process_optimization_desc': 'Analyse et restructuration de vos processus de vente, amélioration du cycle commercial, accompagnement lors de RDV clients stratégiques, optimisation des argumentaires et méthodes de prospection pour maximiser votre efficacité commerciale.',
    'services.tools_configuration_title': 'Choix et Configuration d\'outils de pilotage (CRM/ERP)',
    'services.tools_configuration_desc': 'Sélection et configuration d\'outils (CRM/ERP) adaptés à vos besoins, budget et perspectives de croissance. CRM Conseil vous oriente vers les outils les plus scalable pour éviter d\'avoir à multiplier ou changer d\'outils au fil de votre développement. Nous formons vos équipes, configurons vos tableaux de bord de pilotage commercial.',
    'services.lead_generation_title': 'Générations de leads B2B',
    'services.lead_generation_desc': 'Stratégies de prospection multicanales, qualification de leads, mise en place de campagnes ciblées et accompagnement dans la génération de prospects qualifiés pour développer votre portefeuille clients.',
    'services.valorization_title': 'Valorisation commerciale pour levée de fonds',
    'services.valorization_desc': 'Préparation de pitchs investisseurs, valorisation de votre modèle économique, coaching pour les présentations et optimisation de votre approche commerciale pour séduire les investisseurs.',
    'services.what_we_bring': 'Ce que nous vous apportons:',
    'services.phase_1_title': 'Phase 1 – Ciblage / Acquisition',
    'services.phase_1_subtitle': 'Startups early stage',
    'services.conversion_increase': 'd\'augmentation du taux de conversion prospects → clients',
    'services.cycle_acceleration': 'd\'accélération du cycle de vente',
    'services.qualified_meetings': 'de rendez-vous qualifiés obtenus',
    'services.phase_2_title': 'Phase 2 – Accélération / Valorisation',
    'services.phase_2_subtitle': 'Startups & PME établies',
    'services.pipeline_value_increase': 'd\'augmentation de la valeur du pipeline',
    'services.commercial_efficiency': 'd\'efficacité commerciale des équipes',
    'services.success_rate': 'de taux de succès en levée de fonds',
    'services.rse_intro': 'L\'accompagnement RSE de CRM Conseil aide les entreprises à intégrer les enjeux de durabilité dans leur stratégie commerciale. Nos bilans carbone et biodiversité permettent une approche concrète du développement durable, transformant les contraintes environnementales en avantages concurrentiels.',
    'services.ready_transform': 'Ready to transform your business?',
    'services.transform_desc': 'Book your free 30-minute consultation to discuss your needs and discover how we can support your company.',
    
    // About Page
    'about.page_title': 'À propos - CRM Conseil | Expert en Performance Commerciale & RSE',
    'about.our_story': 'Notre Histoire',
    'about.our_values': 'Nos Valeurs',
    'about.our_expertise': 'Notre Expertise',
    'about.trust': 'Confiance',
    'about.sustainability': 'Durabilité',
    'about.excellence': 'Excellence',
    'about.story_desc_1': 'Fondée avec la conviction que performance commerciale et responsabilité environnementale ne sont pas contradictoires mais complémentaires, CRM Conseil est née du désir d\'accompagner les entreprises dans leur transformation durable.',
    'about.story_desc_2': 'Avec plus de 10 ans d\'expérience en conseil commercial et une expertise croissante en RSE, nous aidons les PME du Sud-Est de la France à développer des stratégies gagnantes qui respectent à la fois leurs objectifs économiques et les enjeux environnementaux.',
    'about.meet_team': 'Rencontrer notre équipe',
    'about.trust_desc': 'Nous construisons des relations durables basées sur la transparence, l\'honnêteté et le respect mutuel.',
    'about.sustainability_desc': 'Nous intégrons la responsabilité environnementale et sociale dans toutes nos recommandations.',
    'about.excellence_desc': 'Nous visons l\'excellence dans chaque mission, avec un accompagnement personnalisé et de qualité.',
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
    
    // Services Page
    'services.page_title': 'Our Services - CRM Conseil | Commercial Consulting & CSR Support',
    'services.page_description': 'Discover our commercial consulting services, CSR support, carbon footprint for SMEs. Personalized support for sustainable commercial development in Nice, Monaco, Cannes.',
    'services.page_keywords': 'commercial consulting services, SME carbon footprint, CSR support, commercial strategy, sustainable business development, Nice Monaco consultant',
    'services.quote': '"At CRM Conseil, we are deeply convinced that <strong class="text-sustainable font-semibold">aligning commercial performance with a concrete sustainability approach</strong> is the only viable path for the future."',
    'services.performance_sustainability': 'Commercial performance and sustainability',
    'services.ecological_sustainability': 'Ecological and societal sustainability',
    'services.discover_services': 'Discover our services',
    'services.commercial_optimization_missions': 'Commercial optimization missions',
    'services.rse_support_bilans': 'CSR support and assessments',
    'services.commercial_intro_1': 'Less than 40% of sales representatives\' time is dedicated to selling. CRM Conseil helps startups and SMEs eliminate bottlenecks, optimize their sales processes and maximize their commercial efficiency. Simplify your tools, perfect your pitches and achieve sustainable results.',
    'services.commercial_intro_2': 'Our approach combines analysis of current performance, practical training and field support to transform your sales teams into high-performing sales forces. Our missions are short and practical to respect the budgets and fast pace of our startup and SME clients. You get immediately usable elements to continue your prospecting autonomously.',
    'services.process_optimization_title': 'Commercial process optimization',
    'services.process_optimization_desc': 'Analysis and restructuring of your sales processes, improvement of the commercial cycle, support during strategic client meetings, optimization of sales pitches and prospecting methods to maximize your commercial efficiency.',
    'services.tools_configuration_title': 'Selection and Configuration of management tools (CRM/ERP)',
    'services.tools_configuration_desc': 'Selection and configuration of tools (CRM/ERP) adapted to your needs, budget and growth prospects. CRM Conseil guides you towards the most scalable tools to avoid having to multiply or change tools as you develop. We train your teams and configure your commercial management dashboards.',
    'services.lead_generation_title': 'B2B lead generation',
    'services.lead_generation_desc': 'Multi-channel prospecting strategies, lead qualification, implementation of targeted campaigns and support in generating qualified prospects to develop your client portfolio.',
    'services.valorization_title': 'Commercial valorization for fundraising',
    'services.valorization_desc': 'Preparation of investor pitches, valorization of your business model, coaching for presentations and optimization of your commercial approach to seduce investors.',
    'services.what_we_bring': 'What we bring you:',
    'services.phase_1_title': 'Phase 1 – Targeting / Acquisition',
    'services.phase_1_subtitle': 'Early stage startups',
    'services.conversion_increase': 'increase in prospect → client conversion rate',
    'services.cycle_acceleration': 'acceleration of the sales cycle',
    'services.qualified_meetings': 'qualified meetings obtained',
    'services.phase_2_title': 'Phase 2 – Acceleration / Valorization',
    'services.phase_2_subtitle': 'Established startups & SMEs',
    'services.pipeline_value_increase': 'increase in pipeline value',
    'services.commercial_efficiency': 'team commercial efficiency',
    'services.success_rate': 'fundraising success rate',
    'services.rse_intro': 'CRM Conseil\'s CSR support helps companies integrate sustainability challenges into their commercial strategy. Our carbon and biodiversity footprints enable a concrete approach to sustainable development, transforming environmental constraints into competitive advantages.',
    'services.ready_transform': 'Ready to transform your business?',
    'services.transform_desc': 'Book your free 30-minute consultation to discuss your needs and discover how we can support your company.',
    
    // About Page  
    'about.page_title': 'About - CRM Conseil | Commercial Performance & CSR Experts',
    'about.our_story': 'Our Story',
    'about.our_values': 'Our Values', 
    'about.our_expertise': 'Our Expertise',
    'about.trust': 'Trust',
    'about.sustainability': 'Sustainability',
    'about.excellence': 'Excellence',
    'about.story_desc_1': 'Founded with the conviction that commercial performance and environmental responsibility are not contradictory but complementary, CRM Conseil was born from the desire to support companies in their sustainable transformation.',
    'about.story_desc_2': 'With over 10 years of experience in commercial consulting and growing expertise in CSR, we help SMEs in South-East France develop winning strategies that respect both their economic objectives and environmental challenges.',
    'about.meet_team': 'Meet our team',
    'about.trust_desc': 'We build lasting relationships based on transparency, honesty and mutual respect.',
    'about.sustainability_desc': 'We integrate environmental and social responsibility into all our recommendations.',
    'about.excellence_desc': 'We strive for excellence in every mission, with personalized and quality support.',
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
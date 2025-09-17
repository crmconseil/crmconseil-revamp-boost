import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'article';
  data?: any;
}

export const StructuredData = ({ type = 'organization', data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CRM Conseil",
      "alternateName": "CRM Conseil - Performance Commerciale Durable",
      "url": "https://crmconseil.com",
      "logo": "https://crmconseil.com/assets/crm-conseil-logo.jpg",
      "description": "Conseil en performance commerciale durable pour startups et PME innovantes",
      "email": "contact@crmconseil.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Zone d'intervention : Nice, Cannes, Monaco",
        "addressLocality": "Nice",
        "postalCode": "06000",
        "addressCountry": "FR"
      },
      "founder": {
        "@type": "Person",
        "name": "Sabrina Broggini",
        "jobTitle": "Fondatrice et Consultante Senior"
      },
      "services": [
        {
          "@type": "Service",
          "name": "Accompagnement Commercial Stratégique",
          "description": "Optimisation des processus commerciaux et développement de stratégies de vente"
        },
        {
          "@type": "Service", 
          "name": "Conseil RSE et Développement Durable",
          "description": "Mise en place de stratégies RSE et réalisation de bilans carbone"
        },
        {
          "@type": "Service",
          "name": "Formation et Coaching Commercial",
          "description": "Formation des équipes commerciales et coaching personnalisé"
        }
      ],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.7102,
          "longitude": 7.2620
        },
        "geoRadius": "100000"
      },
      "sameAs": [
        "https://www.linkedin.com/company/crm-conseil"
      ]
    };

    if (type === 'localBusiness') {
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "priceRange": "€€",
        "openingHours": "Mo-Fr 09:00-18:00"
      };
    }

    if (type === 'service') {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": baseData,
        ...data
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

export const SEOHead = ({
  title = "CRM Conseil - Performance Commerciale Durable | Accompagnement Startups & PME",
  description = "CRM Conseil accompagne les startups et PME innovantes avec une approche unique alliant performance commerciale et développement durable. Expertise RSE, bilan GES, stratégie commerciale.",
  keywords = "conseil commercial, RSE, développement durable, startup, PME, performance commerciale, bilan GES, stratégie commerciale, accompagnement entreprise",
  canonical,
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  type = "website",
  noindex = false
}: SEOProps) => {
  const baseUrl = "https://crmconseil.com"; // À remplacer par votre domaine
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Title et Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CRM Conseil" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Author et Copyright */}
      <meta name="author" content="Sabrina Broggini - CRM Conseil" />
      <meta name="copyright" content="© 2024 CRM Conseil. Tous droits réservés." />
      
      {/* Geo tags pour le local SEO */}
      <meta name="geo.region" content="FR-06" />
      <meta name="geo.placename" content="Nice, France" />
      <meta name="geo.position" content="43.7102;7.2620" />
      <meta name="ICBM" content="43.7102, 7.2620" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="fr-FR" />
    </Helmet>
  );
};
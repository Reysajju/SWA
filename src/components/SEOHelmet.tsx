import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE_URL } from '../utils/seo/constants';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
  type?: 'website' | 'article';
  image?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalUrl = SITE_URL,
  schema,
  type = 'website',
  image = `${SITE_URL}/og-image.jpg`,
}) => {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} - Street Wise Ads`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Street Wise Ads" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
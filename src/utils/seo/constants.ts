export const DEFAULT_TITLE = 'Street Wise Ads - Mobile Billboard Advertising in Karachi';
export const DEFAULT_DESCRIPTION = 'Transform rickshaws and cars into mobile billboards in Karachi. Affordable, effective outdoor advertising reaching every street.';
export const SITE_URL = 'https://streetmediaads.com';

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Street Wise Ads",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.svg`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-300-1234567",
    "contactType": "customer service",
    "areaServed": "Karachi",
    "availableLanguage": ["en", "ur"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "North Nazimabad",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "Pakistan"
  },
  "sameAs": [
    "https://facebook.com/streetwiseads",
    "https://twitter.com/streetwiseads",
    "https://instagram.com/streetwiseads"
  ]
};
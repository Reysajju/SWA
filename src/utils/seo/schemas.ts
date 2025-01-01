import { ORGANIZATION_SCHEMA, SITE_URL } from './constants';

export const getServiceSchema = (service: {
  name: string;
  description: string;
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": ORGANIZATION_SCHEMA,
  "areaServed": {
    "@type": "City",
    "name": "Karachi"
  },
  "image": service.image,
  "url": `${SITE_URL}/services`
});

export const getContactSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Street Wise Ads",
  "description": "Contact us for mobile billboard advertising in Karachi",
  "url": `${SITE_URL}/contact`,
  "provider": ORGANIZATION_SCHEMA
});
export const FAQ_CATEGORIES = {
  services: 'Services',
  pricing: 'Pricing',
  coverage: 'Coverage',
  process: 'Process',
  technical: 'Technical',
  support: 'Support'
} as const;

export type FAQCategory = keyof typeof FAQ_CATEGORIES;
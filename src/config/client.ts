export type ClientType = 'industry' | 'pets';

const configuredClient = process.env.REACT_APP_CLIENT?.toLowerCase();

export const clientType: ClientType = configuredClient === 'pets' ? 'pets' : 'industry';
export const isPetClient = clientType === 'pets';

export const clientConfig = {
  industry: { brand: 'Redweb', nav: ['About', 'Products & Services', 'Contributors', 'Contact Us'] },
  pets: { brand: 'Better Humans', nav: ['Our story', 'Shop', 'Our pack', 'Contact'] }
} as const;

export const activeClientConfig = clientConfig[clientType];
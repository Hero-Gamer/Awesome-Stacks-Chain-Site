export enum Category {
  DASHBOARD = 'Dashboard',
  WALLETS = 'Wallets',
  WEB_APPS = 'Web Apps',
  DEFI = 'DeFi',
  NFTS = 'NFTs',
  GAMES = 'Games',
  DEV_TOOLS = 'Dev Tools',
  MINING = 'Mining',
  LEARNING = 'Learning',
  COMMUNITY = 'Community'
}

export interface ResourceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  tags: string[];
  featured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface StatMetric {
  label: string;
  value: string;
  change: number; // Percentage
  isPositive: boolean;
}
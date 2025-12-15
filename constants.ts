import { Category, ResourceItem, StatMetric } from './types';

export const RESOURCES: ResourceItem[] = [
  // --- WALLETS ---
  {
    id: 'w1',
    name: 'Hiro Wallet',
    description: 'The most popular wallet for managing STX, signing transactions, and interacting with apps.',
    url: 'https://wallet.hiro.so/',
    category: Category.WALLETS,
    tags: ['Official', 'Browser Extension', 'Desktop'],
    featured: true
  },
  {
    id: 'w2',
    name: 'Xverse',
    description: 'The leading Bitcoin wallet for Web3. Supports Ordinals, BRC-20, and Stacks.',
    url: 'https://www.xverse.app/',
    category: Category.WALLETS,
    tags: ['Mobile', 'Bitcoin', 'NFTs'],
    featured: true
  },
  {
    id: 'w3',
    name: 'Asigna',
    description: 'Multisig Wallet for Bitcoin, Ordinals, BRC20s, and Stacks.',
    url: 'https://asigna.io/',
    category: Category.WALLETS,
    tags: ['Multisig', 'Security', 'Institutional']
  },
  {
    id: 'w4',
    name: 'Leather',
    description: 'Open Source wallet for connecting to Bitcoin and Stacks web applications.',
    url: 'https://leather.io/',
    category: Category.WALLETS,
    tags: ['Open Source', 'Desktop', 'Mobile'],
    featured: true
  },
  {
    id: 'w5',
    name: 'OKX Web3 Wallet',
    description: 'Multi-chain wallet that also supports Stacks.',
    url: 'https://web3.okx.com/download',
    category: Category.WALLETS,
    tags: ['Multi-chain', 'Exchange']
  },
  {
    id: 'w6',
    name: 'WalletConnect',
    description: 'Documentation how to use Wallet Connect (Reown) with Stacks.',
    url: 'https://docs.reown.com/advanced/multichain/rpc-reference/stacks-rpc',
    category: Category.WALLETS,
    tags: ['Protocol', 'Dev']
  },

  // --- WEB APPS ---
  {
    id: 'wa1',
    name: 'Hiro Explorer',
    description: 'An application for reviewing transactions on the Stacks Blockchain.',
    url: 'https://explorer.hiro.so/?chain=mainnet',
    category: Category.WEB_APPS,
    tags: ['Explorer', 'Data']
  },
  {
    id: 'wa2',
    name: 'STXER',
    description: 'An explorer, debugger and simulator for Stacks transactions.',
    url: 'https://stxer.xyz/',
    category: Category.WEB_APPS,
    tags: ['Explorer', 'Debug']
  },
  {
    id: 'wa3',
    name: 'Send Many',
    description: 'An application to send STX and other tokens to many recipients in one transaction.',
    url: 'https://sendstx.com',
    category: Category.WEB_APPS,
    tags: ['Tool', 'Transactions']
  },
  {
    id: 'wa4',
    name: 'Speed Spend',
    description: 'A suite of working Clarity experiments on testnet.',
    url: 'https://speed-spend.org',
    category: Category.WEB_APPS,
    tags: ['Experimental', 'Testnet']
  },
  {
    id: 'wa5',
    name: 'Blocksurvey',
    description: 'AI-driven survey platform with focus on data ownership and privacy.',
    url: 'https://blocksurvey.io',
    category: Category.WEB_APPS,
    tags: ['Privacy', 'Productivity', 'AI']
  },
  {
    id: 'wa6',
    name: 'AIBTC',
    description: 'A coordination network of AI agents working towards measurable tasks.',
    url: 'https://aibtc.com/',
    category: Category.WEB_APPS,
    tags: ['AI', 'Agents']
  },
  {
    id: 'wa7',
    name: 'FatStx',
    description: 'An annual transaction viewer for e.g. tax declaration.',
    url: 'https://fatstx.github.io/',
    category: Category.WEB_APPS,
    tags: ['Taxes', 'Tool']
  },
  {
    id: 'wa8',
    name: 'BNS V2',
    description: 'Hub for all Blockchain namespaces on Stacks, with transaction history and analytics.',
    url: 'https://www.bnsv2.com/',
    category: Category.WEB_APPS,
    tags: ['BNS', 'Identity']
  },
  {
    id: 'wa9',
    name: 'btc.us',
    description: 'An application for .btc names.',
    url: 'https://btc.us',
    category: Category.WEB_APPS,
    tags: ['BNS', 'Domains']
  },
  {
    id: 'wa10',
    name: 'Owl.link',
    description: 'An application to create linking page for BNS names.',
    url: 'https://owl.link',
    category: Category.WEB_APPS,
    tags: ['BNS', 'Social']
  },

  // --- DEFI ---
  {
    id: 'd1',
    name: 'ALEX',
    description: 'The finance layer of Bitcoin. Launchpad, DEX, and Bridge.',
    url: 'https://alexgo.io/',
    category: Category.DEFI,
    tags: ['DEX', 'Launchpad', 'Liquidity'],
    featured: true
  },
  {
    id: 'd2',
    name: 'Arkadiko',
    description: 'Self-repaying loans on Bitcoin. Mint USDA stablecoin backed by STX.',
    url: 'https://arkadiko.finance/',
    category: Category.DEFI,
    tags: ['Stablecoin', 'Lending']
  },
  {
    id: 'd3',
    name: 'Stacking DAO',
    description: 'Liquid stacking protocol. Unlock liquidity for your stacked STX.',
    url: 'https://stackingdao.com/',
    category: Category.DEFI,
    tags: ['Liquid Staking', 'Yield'],
    featured: true
  },
  {
    id: 'd4',
    name: 'Bitflow',
    description: 'The decentralized exchange for Bitcoiners. Swap stablecoins and BTC assets.',
    url: 'https://www.bitflow.finance/',
    category: Category.DEFI,
    tags: ['DEX', 'Bitcoin']
  },
  {
    id: 'd5',
    name: 'Zest Protocol',
    description: 'Institutional-grade Bitcoin lending markets.',
    url: 'https://zestprotocol.com/',
    category: Category.DEFI,
    tags: ['Lending', 'Institutional']
  },
  {
    id: 'd6',
    name: 'Velar',
    description: 'Swapping, trading, launching assets on premier Bitcoin L2s.',
    url: 'https://www.velar.co/',
    category: Category.DEFI,
    tags: ['DEX', 'Trading'],
    featured: true
  },
  {
    id: 'd7',
    name: 'FakFun',
    description: 'Platform for exchange, launch, wrapping for memecoins build on Bitcoin.',
    url: 'https://fak.fun',
    category: Category.DEFI,
    tags: ['Memecoins', 'Launchpad']
  },
  {
    id: 'd8',
    name: 'Granite',
    description: 'Non-custodial, secure, and decentralized way to borrow against Bitcoin.',
    url: 'https://granite.world/',
    category: Category.DEFI,
    tags: ['Lending', 'Bitcoin']
  },
  {
    id: 'd9',
    name: 'BSD',
    description: 'A synthetic, digital dollar backed by Bitcoin using over-collateralized lending model.',
    url: 'https://www.bsd.money/',
    category: Category.DEFI,
    tags: ['Stablecoin', 'Synthetic']
  },
  {
    id: 'd10',
    name: 'USDh',
    description: 'A Bitcoin-baked, yield-bearing synthetic dollar using short perpetual futures.',
    url: 'https://app.hermetica.fi',
    category: Category.DEFI,
    tags: ['Yield', 'Stablecoin']
  },
  {
    id: 'd11',
    name: 'STXTools',
    description: 'Charts, transactions, price alerts for DeFi on Stacks.',
    url: 'https://stxtools.io/',
    category: Category.DEFI,
    tags: ['Analytics', 'Tools']
  },
  {
    id: 'd12',
    name: 'Stacks Pulse',
    description: 'Real-time on-chain Stats for Stacks DeFi.',
    url: 'https://www.stackspulse.com/',
    category: Category.DEFI,
    tags: ['Analytics', 'Stats']
  },
  {
    id: 'd13',
    name: 'Signal21',
    description: 'On-chain analysis for Bitcoin L1, L2 and Dapps.',
    url: 'https://signal21.io/',
    category: Category.DEFI,
    tags: ['Analytics', 'Data']
  },

  // --- GAMES ---
  {
    id: 'g1',
    name: 'Stacks Degens',
    description: 'A car racing game with retro graphics enabled through NFTs.',
    url: 'https://stacksdegens.com',
    category: Category.GAMES,
    tags: ['Racing', 'NFTs']
  },
  {
    id: 'g2',
    name: 'Project Indigo',
    description: 'An interactive story and RPG experience.',
    url: 'https://www.projectindigonft.com',
    category: Category.GAMES,
    tags: ['RPG', 'Story']
  },

  // --- NFTS ---
  {
    id: 'n1',
    name: 'Gamma',
    description: 'Home for digital collectibles on Bitcoin and Stacks. Create and trade NFTs.',
    url: 'https://gamma.io/',
    category: Category.NFTS,
    tags: ['Marketplace', 'Ordinals'],
    featured: true
  },
  {
    id: 'n2',
    name: 'TradePort',
    description: 'Multi-chain NFT trading aggregator and analytics.',
    url: 'https://www.tradeport.xyz/',
    category: Category.NFTS,
    tags: ['Analytics', 'Trading']
  },
  {
    id: 'n3',
    name: 'This is #1',
    description: 'The first professional NFT built on Bitcoin and the Stacks Blockchain.',
    url: 'https://www.thisisnumberone.com',
    category: Category.NFTS,
    tags: ['Art', 'Historic']
  },

  // --- MINING & STACKING ---
  {
    id: 'm1',
    name: 'FastPool',
    description: 'High performance Stacks mining pool.',
    url: 'https://fastpool.org',
    category: Category.MINING,
    tags: ['Pool', 'Mining']
  },
  {
    id: 'm2',
    name: 'Stacking on Leather',
    description: 'App to stack Stacks token directly or with a pool.',
    url: 'https://app.leather.io/stacking',
    category: Category.MINING,
    tags: ['Stacking', 'Wallet']
  },
  {
    id: 'm3',
    name: 'PlanBetter',
    description: 'Stacking pool with Bitcoin rewards.',
    url: 'https://planbetter.com/',
    category: Category.MINING,
    tags: ['Pool', 'Rewards']
  },
  {
    id: 'm4',
    name: 'Xverse Pool',
    description: 'Stacking pool built into Xverse mobile app.',
    url: 'https://pool.xverse.app/',
    category: Category.MINING,
    tags: ['Pool', 'Mobile']
  },
  {
    id: 'm5',
    name: 'Lisa',
    description: 'Liquid stacking on Stacks using rebasing.',
    url: 'https://app.lisalab.io',
    category: Category.MINING,
    tags: ['Liquid Staking']
  },
  {
    id: 'm6',
    name: 'Stacking Tracker',
    description: 'Overview of Stacking and historical data.',
    url: 'https://stacking-tracker.com',
    category: Category.MINING,
    tags: ['Analytics', 'Data']
  },

  // --- DEV TOOLS ---
  {
    id: 'dt1',
    name: 'Clarinet',
    description: 'A command line tool for building Clarity smart contracts.',
    url: 'https://github.com/hirosystems/clarinet',
    category: Category.DEV_TOOLS,
    tags: ['CLI', 'Testing', 'Clarity']
  },
  {
    id: 'dt2',
    name: 'Stacks.js',
    description: 'A collection of JavaScript libraries to build apps on Stacks.',
    url: 'https://github.com/hirosystems/stacks.js',
    category: Category.DEV_TOOLS,
    tags: ['SDK', 'JavaScript']
  },
  {
    id: 'dt3',
    name: 'Hiro Platform',
    description: 'Developer platform to build, test, and deploy smart contracts.',
    url: 'https://platform.hiro.so/',
    category: Category.DEV_TOOLS,
    tags: ['IDE', 'Cloud']
  },
  {
    id: 'dt4',
    name: 'Clarigen',
    description: 'A tool for writing TypeScript code that interacts with Clarity smart contracts.',
    url: 'https://github.com/obylabs/clarigen',
    category: Category.DEV_TOOLS,
    tags: ['TypeScript', 'Codegen']
  },
  {
    id: 'dt5',
    name: 'clarity.tools',
    description: 'In-browser Clarity REPL.',
    url: 'https://clarity.tools',
    category: Category.DEV_TOOLS,
    tags: ['REPL', 'Web']
  },
  {
    id: 'dt6',
    name: 'ClarityGPT',
    description: 'Writing smart contracts with a chat bot.',
    url: 'https://claritygpt.com/',
    category: Category.DEV_TOOLS,
    tags: ['AI', 'Assistant']
  },
  {
    id: 'dt7',
    name: 'Source of Clarity',
    description: 'Listing of all deployed Clarity contracts on mainnet with some comments.',
    url: 'https://source-of-clarity.com',
    category: Category.DEV_TOOLS,
    tags: ['Explorer', 'Source']
  },
  {
    id: 'dt12',
    name: 'clarity-bitcoin',
    description: 'A library to verify Bitcoin transactions.',
    url: 'https://github.com/friedger/clarity-bitcoin',
    category: Category.DEV_TOOLS,
    tags: ['Library', 'Bitcoin']
  },
  {
    id: 'dt13',
    name: 'STX20',
    description: 'Protocol to create and share digital artifacts on Stacks.',
    url: 'https://github.com/fess-v/stx20-standard',
    category: Category.DEV_TOOLS,
    tags: ['Protocol', 'Inscriptions']
  },
  {
    id: 'dt20',
    name: 'Lightning Swaps',
    description: 'Fraud-proof swaps using Lightning Network.',
    url: 'https://github.com/radicleart/clarity-rstack/blob/master/contracts/lightning-swaps-v1.clar',
    category: Category.DEV_TOOLS,
    tags: ['Contract', 'Lightning']
  },
  {
    id: 'dt26',
    name: 'Charisma',
    description: 'Community-run memecoin DAO on the Stacks Blockchain.',
    url: 'https://github.com/pointblankdev/dungeon-master',
    category: Category.DEV_TOOLS,
    tags: ['DAO', 'Contract']
  },
  {
    id: 'dt37',
    name: 'Stacks API',
    description: 'Hosted API to interact directly with the Blockchain.',
    url: 'https://www.hiro.so/stacks-api',
    category: Category.DEV_TOOLS,
    tags: ['API', 'Infrastructure']
  },
  {
    id: 'dt38',
    name: 'Quicknode',
    description: 'Hosted endpoint to quickly and easily connect to Stacks.',
    url: 'https://www.quicknode.com/chains/stx',
    category: Category.DEV_TOOLS,
    tags: ['RPC', 'Infrastructure']
  },

  // --- LEARNING ---
  {
    id: 'l1',
    name: 'Official Docs',
    description: 'Documentation and developer tutorials for learning Clarity and developing Stacks apps.',
    url: 'https://docs.stacks.co/',
    category: Category.LEARNING,
    tags: ['Official', 'Docs']
  },
  {
    id: 'l2',
    name: 'Hiro Docs',
    description: 'Documentation focused on developers building on Stacks.',
    url: 'https://docs.hiro.so/',
    category: Category.LEARNING,
    tags: ['Dev', 'Docs']
  },
  {
    id: 'l3',
    name: 'Stacks 101',
    description: 'Community curated STX knowledge.',
    url: 'https://stacks101.com',
    category: Category.LEARNING,
    tags: ['Community', 'Basics']
  },
  {
    id: 'l21',
    name: 'Clarity Universe',
    description: 'A comprehensive Clarity development course.',
    url: 'https://clarity-lang.org/universe',
    category: Category.LEARNING,
    tags: ['Course', 'Certification'],
    featured: true
  },
  {
    id: 'l20',
    name: 'Clarity of Mind',
    description: 'Book on writing productive smart contracts that are predictable.',
    url: 'https://book.clarity-lang.org/',
    category: Category.LEARNING,
    tags: ['Book', 'Advanced']
  },

  // --- COMMUNITY ---
  {
    id: 'c1',
    name: 'Stacks Foundation',
    description: 'Non-profit organization working to enable a user-owned internet on Bitcoin.',
    url: 'https://stacks.org/',
    category: Category.COMMUNITY,
    tags: ['Grant', 'Governance']
  },
  {
    id: 'c2',
    name: 'Sigle',
    description: 'A decentralized writing platform for Web3 content creators.',
    url: 'https://www.sigle.io/',
    category: Category.COMMUNITY,
    tags: ['Blogging', 'Web3']
  },
  {
    id: 'c3',
    name: 'Discord',
    description: 'Stacks ecosystem Discord server.',
    url: 'https://discord.gg/zrvWsQC',
    category: Category.COMMUNITY,
    tags: ['Chat', 'Support']
  },
  {
    id: 'c6',
    name: 'Stacks Forum',
    description: 'Official Stacks community forum for governance and discussion.',
    url: 'https://forum.stacks.org/',
    category: Category.COMMUNITY,
    tags: ['Governance', 'Discussion']
  }
];

export const MOCK_STATS: StatMetric[] = [
  { label: 'STX Price', value: '$1.84', change: 2.4, isPositive: true },
  { label: 'TVL', value: '$245M', change: 12.5, isPositive: true },
  { label: 'Total TXs', value: '4.2M', change: -0.8, isPositive: false },
  { label: 'Active Wallets', value: '84.2K', change: 5.1, isPositive: true },
];
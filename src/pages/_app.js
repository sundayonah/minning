import '@/styles/globals.css';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { WagmiConfig } from 'wagmi';
import {
   arbitrum,
   bsc,
   bscTestnet,
   goerli,
   mainnet,
   polygon,
   sepolia,
} from 'wagmi/chains';

// 1. Get projectId
const projectId = 'de7693706b2bb6e9b2e049f09e7ebad1';

// 2. Create wagmiConfig
const metadata = {
   name: 'Minning dApp',
   description: 'Web3Modal Example',
   url: 'https://web3modal.com',
   icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum, bsc, bscTestnet, polygon, sepolia, goerli];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }) {
   return (
      <WagmiConfig config={wagmiConfig}>
         <Component {...pageProps} />
      </WagmiConfig>
   );
}

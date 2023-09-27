import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useWeb3Modal, useWeb3ModalTheme } from '@web3modal/wagmi/react';
import ConnectButton from './connectButton';

const Header = () => {
   const { address, isConnected } = useAccount();
   const { connect } = useConnect({
      connector: new InjectedConnector(),
   });
   const { disconnect } = useDisconnect();
   const router = useRouter();

   const navMenu = [
      { name: 'Investment', url: '/' },
      { name: 'Referal Menu', url: '/referalMenu' },
   ];
   // const { themeMode, themeVariables, setThemeMode, setThemeVariables } =
   //    useWeb3ModalTheme();

   // setThemeMode('blue');

   // setThemeVariables({
   //    '--w3m-color-mix': '#303030',
   //    '--w3m-color-mix-strength': 40,
   //    '--w3m-accent': '#BF9221',
   // });

   return (
      <div className="flex p-4 justify-between items-center bg-opacity-10 backdrop-blur-md shadow-md bg-white">
         <div>
            <span>LOGO</span>
         </div>
         <div className="flex space-x-4 justify-center items-center">
            {navMenu.map((menu, i) => (
               <ul key={i}>
                  <div
                     className={
                        router.pathname === menu.url ? 'active-link' : ''
                     }
                  >
                     <Link href={menu.url}>{menu.name}</Link>
                  </div>
               </ul>
            ))}
            <ConnectButton />
            {/* <p>{address}</p> */}
            {/* <w3m-button /> */}

            {/* {isConnected ? (
               <button
                  onClick={() => disconnect()}
                  className="border border-[#BF9221] text-[#BF9221] px-3 py-1 rounded-lg hover:bg-[#BF9221] hover:text-white hover:border-transparent"
               >
                  Connected
               </button>
            ) : (
               <button
                  onClick={() => connect()}
                  className="border border-[#BF9221] text-[#BF9221] px-3 py-1 rounded-lg hover:bg-[#BF9221] hover:text-white hover:border-transparent"
               >
                  Connect Wallet
               </button>
            )} */}
         </div>
         <style jsx>{`
            .active-link {
               color: #bf9221;
            }
         `}</style>
      </div>
   );
};

export default Header;

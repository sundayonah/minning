import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import ConnectButton from './connectButton';
import { MinningContext } from '@/Context/MinnigContext';
// import logo from '../../yolva.png';

const Header = () => {
   const { connectWallet, connect } = useContext(MinningContext);

   const router = useRouter();

   const navMenu = [
      { name: 'Invest', url: '/' },
      { name: 'Referral', url: '/referalMenu' },
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
      // <div className="flex p-4 justify-between items-center bg-opacity-10 backdrop-blur-md shadow-md bg-white">
      <div className="flex p-4 justify-between items-center border-b border-gray-700 shadow-custom">
         <div className=" pr-2">
            {/* <span>LOGO</span> */}
            <img
               src="../../yolva.png"
               width={50}
               height={80}
               alt="logo-image"
            />
         </div>
         <div className="flex space-x-5 justify-center items-center">
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

            {/* <w3m-button disabled true size="md" balance="hide" /> */}
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

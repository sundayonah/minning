import Link from 'next/link';
import React from 'react';

const Header = () => {
   const navMenu = [
      { name: 'Investment', url: '/' },
      { name: 'referal Menu', url: '/referalMenu' },
   ];

   return (
      <div className="flex p-4 justify-between bg-opacity-10 backdrop-blur-md shadow-md bg-white">
         <div>
            <span>Minning</span>
         </div>
         <div className="flex space-x-4 justify-center items-center">
            {navMenu.map((menu, i) => (
               <ul key={i}>
                  <Link href={menu.url}>{menu.name}</Link>
               </ul>
            ))}
            <button className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white hover:border-transparent">
               Connect Wallet
            </button>
         </div>
      </div>
   );
};

export default Header;

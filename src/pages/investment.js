import React from 'react';

const investment = () => {
   return (
      <>
         <main className=" flex justify-evenly items-center mt-6">
            {/* left side */}
            <div className="w-70% text-center p-4 border border-orange-500 rounded-lg shadow-md">
               <div className=" mb-2 ">
                  <span>Daily ROI Amount</span>
                  <span className="text-xs">0.00/0 BUSD</span>
               </div>
               <div>
                  <button className="w-30% border border-orange-500 bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white hover:border-transparent">
                     Mine Now
                  </button>
               </div>
               <span>Next Mine Time: 00:00:00</span>
            </div>

            {/* right side */}
            {/* <div className="w-40% text-center p-4 border border-orange-500 rounded-lg shadow-md">
               <p className="mb-2">
                  <span>Wallet Balance</span>
                  <span>0 BUSD</span>
               </p>
               <p className="mb-2">
                  <span>Total Staked</span>
                  <span>0 BUSD</span>
               </p>
               <button className="w-30% border border-orange-500 bg-gold-500 text-white px-4 py-2 rounded-lg bg-orange-500 hover:text-white hover:border-transparent">
                  Approve
               </button>
            </div> */}
         </main>
      </>
   );
};

export default investment;

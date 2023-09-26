import React from 'react';

const investment = () => {
   return (
      <>
         <main className="flex flex-col md:flex-row justify-evenly items-center m-6">
            {/* left side */}
            <div className="w-full md:w-[40%] text-center p-4 border border-gray-500 rounded-lg shadow-md mb-6 md:mb-0">
               <div className="flex justify-between items-center mb-4 ">
                  <span>Daily ROI Amount</span>
                  <span className="text-xs">0.00 BUSD</span>
               </div>
               <div className="">
                  <button className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-[#BF9221] hover:text-white hover:border-transparent">
                     Mine Now
                  </button>
                  <span className="flex pt-4">Next Mine Time: 00:00:00</span>
               </div>
               <div className="mt-10">
                  <div className="flex justify-between items-center mb-4  ">
                     <span>Profit Pool</span>
                     <span className="text-xs">0.00 BUSD</span>
                  </div>
                  <button className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent">
                     Withdraw Profit
                  </button>
                  <p className="mt-4">
                     Next Withdraw Time: 00:00:00 (only 50% of profit allowance)
                  </p>
               </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-[40%] text-center p-4 mt-6 border border-gray-500 rounded-lg shadow-md">
               <div className="flex justify-between items-center mb-4 ">
                  <span>Wallet Balance</span>
                  <span className="text-xs">0.00 BUSD</span>
               </div>
               <div className="flex justify-between items-center mb-4 ">
                  <span>Total Stake</span>
                  <span className="text-xs">0.00 BUSD</span>
               </div>
               <div className="">
                  <button className="w-full border border-none bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent">
                     Approve
                  </button>
               </div>
               <div className="mt-9">
                  <input
                     className="w-[90%] m-5 p-2 border border-[#BF9221] bg-transparent rounded-lg "
                     placeholder="0.0"
                  />

                  <button className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent">
                     Stake
                  </button>
               </div>
            </div>
         </main>
      </>
   );
};

export default investment;

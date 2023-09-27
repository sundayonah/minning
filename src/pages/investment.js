import React from 'react';

const investment = () => {
   return (
      <>
         <main className="flex flex-col md:flex-row justify-evenly items-center m-6">
            {/* left side */}
            <div className="w-full md:w-[40%] text-center p-4 border border-gray-500 rounded-lg shadow-md mt-6">
               <div className="flex justify-between items-center mb-4 ">
                  <span>Daily ROI Amount</span>
                  <span className="text-xs">0.00 BUSD</span>
               </div>
               <div className="">
                  <button className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-[#BF9221] hover:text-white hover:border-transparent">
                     Mine Now
                  </button>
                  <p className="flex mt-4 space-x-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6  text-[#BF9221]"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                     </svg>

                     <span className="">Next Mine Time: 00:00:00</span>
                  </p>
               </div>
               <div className="mt-10">
                  <div className="flex justify-between items-center mb-4  ">
                     <span>Profit Pool</span>
                     <span className="text-xs">0.00 BUSD</span>
                  </div>
                  <button className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent">
                     Withdraw Profit
                  </button>

                  <p className="flex mt-6 space-x-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6  text-[#BF9221]"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                     </svg>
                     <span className="">
                        Next Withdraw Time: 00:00:00 (only 50% of profit
                        allowance)
                     </span>
                  </p>
               </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-[40%] text-center p-4 border border-gray-500 rounded-lg shadow-md mt-6">
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

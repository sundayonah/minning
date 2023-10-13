import { MinningContext } from '@/Context/MinnigContext';
import React, { useContext } from 'react';

const Investment = () => {
   const {
      walletBalance,
      totalStake,
      Stake,
      stakeAmount,
      handleChange,
      Approved,
      setApproved,
      isApproved,
      UnStake,
      dailyRoi,
      profitPool,
      noProfitYet,
      profitLoading,
      lessAmount,
      approvedLoading,
      stakeLoading,
   } = useContext(MinningContext);

   return (
      <>
         <main className="flex flex-col md:flex-row justify-evenly items-center m-4">
            {/* left side */}
            <div className="w-full md:w-[35%] text-center p-4 border border-gray-500 rounded-lg shadow-md mt-6">
               <div className="flex justify-between items-center mb-4 ">
                  <span>Daily ROI Amount</span>
                  <span className="text-xs">
                     {dailyRoi} <span className="text-gray-400">YOLVA</span>
                  </span>
               </div>
               {/* <div className="">
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
               </div> */}
               <div className="mt-10">
                  <div className="flex justify-between items-center mb-4  ">
                     <span>Profit Pool</span>
                     <span className="text-xs">
                        {profitPool}{' '}
                        <span className="text-gray-400">YOLVA</span>
                     </span>
                  </div>
                  <button
                     onClick={() => UnStake()}
                     className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent"
                  >
                     {profitLoading ? (
                        <div class="flex items-center justify-center">
                           <div class="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                        </div>
                     ) : (
                        'Withdraw Profit'
                     )}
                  </button>
                  {noProfitYet && (
                     <span className="flex justify-end text-xs text-red-600 pt-2">
                        No Profit Yet
                     </span>
                  )}

                  {/* <p className="flex mt-6 space-x-2">
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
                  </p> */}
               </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-[35%] text-center p-4 border border-gray-500 rounded-lg shadow-md mt-6">
               <div className="flex justify-between items-center mb-4 ">
                  <span>Wallet Balance</span>
                  <span className="text-xs">
                     {walletBalance}{' '}
                     <span className="text-gray-400">YOLVA</span>
                  </span>
               </div>
               <div className="flex justify-between items-center mb-4 ">
                  <span>Total Stake</span>
                  <span className="text-xs">
                     {totalStake} <span className="text-gray-400">YOLVA</span>
                  </span>
               </div>
               <div className="mt-9">
                  <input
                     value={stakeAmount}
                     onChange={handleChange}
                     className="w-[90%] m-5 p-2 border border-[#BF9221] bg-transparent rounded-lg "
                     placeholder="0.0"
                  />
                  <div className="">
                     {isApproved ? (
                        <button
                           onClick={() => Stake()}
                           className="w-full border border-[#BF9221] bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent"
                        >
                           {stakeLoading ? (
                              <div class="flex items-center justify-center">
                                 <div class="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                              </div>
                           ) : (
                              'Stake'
                           )}
                        </button>
                     ) : (
                        <button
                           onClick={() => Approved()}
                           className="w-full border border-none bg-gold-500 text-white px-4 py-2 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent"
                        >
                           {approvedLoading ? (
                              <div class="flex items-center justify-center">
                                 <div class="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                              </div>
                           ) : (
                              'Approve'
                           )}
                        </button>
                     )}
                     {lessAmount && (
                        <span className="flex justify-end text-xs text-red-600 pt-2">
                           amount staked is less than minimum staking amount
                        </span>
                     )}
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default Investment;

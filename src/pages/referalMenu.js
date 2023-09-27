import Header from '@/components/header';
import React, { useState } from 'react';
import { useAccount } from 'wagmi';

const ReferalMenu = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [referralLink, setReferralLink] = useState('');
   const [isLinkCopied, setIsLinkCopied] = useState(false);
   const { address, isConnected } = useAccount();

   // Function to toggle the modal's visibility
   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
   };

   // // Function to generate and set the referral link
   // const generateReferralLink = () => {
   //    // Replace this with your actual referral link generation logic
   //    const generatedLink = `http://localhost:3000/referalMenu/${address}`;
   //    setReferralLink(generatedLink);
   //    setIsLinkCopied(false); // Reset the copied state when generating a new link
   // };

   const generateReferralLink = () => {
      // Replace this with your actual referral link generation logic
      const baseUrl = 'http://localhost:3000/referalMenu';
      const referralLink = `${baseUrl}?ref=${address}`;
      setReferralLink(referralLink);
      setIsLinkCopied(false); // Reset the copied state when generating a new link
   };

   // Function to copy the link to the clipboard
   const copyToClipboard = () => {
      const linkInput = document.getElementById('referralLinkInput');

      if (linkInput) {
         linkInput.select();
         document.execCommand('copy');
         setIsLinkCopied(true);
      }
   };

   //launchpad.rigelprotocol.com/app/v1/mine?ref=0x32e80e16aafdbbb20ba55690f275a2608e3ecfc0

   https: return (
      <>
         <Header />
         <main className="flex flex-col md:flex-row justify-evenly items-center m-6">
            <div className="w-full md:w-[40%] text-center p-4 mt-6 border border-gray-500 rounded-lg shadow-md">
               <div className="flex justify-between items-center mb-4 ">
                  <span>Available Amount Earned on Referral</span>
                  <span className="text-xs">0 BUSD</span>
               </div>
               <div className="flex justify-between items-center mt-10 mb-4 ">
                  <span>Total Rewards Withdrawn from Referrals</span>
                  <span className="text-xs">0 BUSD</span>
               </div>
               <div className="">
                  <button className="w-full border border-none bg-gold-500 text-white px-4 py-2 mt-10 rounded-lg bg-[#BF9221] hover:text-white hover:border-transparent">
                     Cashout Referral Award
                  </button>
               </div>
               <span className="flex justify-end mt-10 text-[#4169E1] cursor-pointer">
                  {/* Referral Link */}
                  <p className="flex pt-4 space-x-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                     </svg>
                     <button
                        onClick={() => {
                           toggleModal();
                           generateReferralLink();
                        }}
                     >
                        Referral Link
                     </button>

                     {/* <button onClick={toggleModal}>Referral Link</button> */}
                  </p>
               </span>
            </div>
         </main>
         {/* Modal */}
         {isModalOpen && (
            <div className="fixed inset-0 flex flex-col md:flex-row items-center justify-center z-50 bg-[#2a2929] bg-opacity-75">
               <div className="w-[60%] md:w-4/5 lg:w-3/5 xl:w-2/5">
                  {/*modal content here */}
                  <div className="bg-[#404040] rounded-lg shadow-xl p-4">
                     <div className="flex justify-end">
                        <button
                           onClick={toggleModal}
                           className=" border  border-[#BF9221] rounded-md  text-[#BF9221]"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M6 18L18 6M6 6l12 12"
                              />
                           </svg>
                        </button>
                     </div>
                     <div className="flex justify-center items-center mb-3">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className=" h-40 w-50  text-[#BF9221] mt-4"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 18a9.7 9.7 0 01-5.55-1.75.75.75 0 01.45-1.37c1.6-.06 4.07-.76 6.1-3.6a7.76 7.76 0 012.36-2.7 10.24 10.24 0 01-2.19-4.42.75.75 0 011.47-.28 11.72 11.72 0 003.07 5.05.75.75 0 01-.43 1.17H3.26a.75.75 0 01-.65-1.13 11.72 11.72 0 003.07-5.05.75.75 0 011.47.28 10.24 10.24 0 01-2.19 4.42 7.76 7.76 0 012.36 2.7c2.03 2.84 4.5 3.54 6.1 3.6a.75.75 0 01.45 1.37A9.7 9.7 0 0110 20z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </div>
                     <h2 className="flex justify-center text-2xl font-bold mb-5">
                        Get 10% Referral Bonus
                     </h2>
                     <div className="flex justify-center items-center">
                        <input
                           className="w-[90%] m-5 p-2 border border-[#BF9221] bg-transparent rounded-lg "
                           placeholder="Referral link"
                           value={referralLink}
                           readOnly
                           id="referralLinkInput"
                        />
                        {/* {!isLinkCopied ? (
                           <div
                              className=" cursor-pointer text-[#BF9221] hover:text-[#BF9221]"
                              onClick={copyToClipboard}
                           >
                              {isLinkCopied ? 'Copied!' : 'Copy'}
                           </div>
                        ) : (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className=" cursor-pointer h-6 w-6 text-[#BF9221] hover:text-[#BF9221]"
                              onClick={copyToClipboard}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <rect
                                 x="9"
                                 y="9"
                                 width="13"
                                 height="13"
                                 rx="2"
                                 ry="2"
                              />
                              <path d="M9 1h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V3a2 2 0 012-2z" />
                              <path d="M9 1v12a2 2 0 002 2h6M15 9l-6 6" />
                           </svg>
                        )} */}
                        {!isLinkCopied && (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={copyToClipboard}
                              className="flex cursor-pointer text-[#BF9221]"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <rect
                                 x="9"
                                 y="9"
                                 width="13"
                                 height="13"
                                 rx="2"
                                 ry="2"
                              />
                              <path d="M9 1h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V3a2 2 0 012-2z" />
                              <path d="M9 1v12a2 2 0 002 2h6M15 9l-6 6" />
                           </svg>
                        )}
                        {isLinkCopied ? 'Copied!' : 'Copy'}
                     </div>

                     <p className="text-gray-200">
                        Receive a 10% token bonus when your referral invests in
                        a project.
                     </p>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default ReferalMenu;

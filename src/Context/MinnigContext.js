import React, { useState, useEffect, useContext, createContext } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useWeb3Modal, useWeb3ModalTheme } from '@web3modal/wagmi/react';
import { ethers } from 'ethers';
import minningAbi from '../contract/minningAbi.json';
import approveAbi from '../contract/approve.json';

// import axios from 'axios';

export const MinningContext = createContext({});

export const MinningContextProvider = ({ children }) => {
   const minningContractAddress = '0x72BC9712BEb034977f5A0830CE1F3E6ff9440486';
   // const approveContractAddress = '0x97Df9831BEA07703F72287A90C163726315eB1Fd';

   const { address, isConnected } = useAccount();
   const { connect } = useConnect({
      connector: new InjectedConnector(),
   });
   const { disconnect } = useDisconnect();

   /// state variables
   const [walletBalance, setWalletBalance] = useState();
   const [totalStake, setTotalStake] = useState(); // f(x)
   const [stakeLoading, setStakeLoading] = useState(false);
   const [approvedLoading, setApprovedLoading] = useState(false);
   const [stakeAmount, setStakeAmount] = useState('');
   const [referralReward, setReferralReward] = useState('');
   const [isApproved, setIsApproved] = useState(false);
   const [dailyRoi, setDailyRoi] = useState();
   const [profitPool, setProfitPool] = useState();
   const [withdrawnReferral, setWithdrawnReferral] = useState();
   const [referralLoading, setReferralLoading] = useState(false);
   const [noReferralYet, setNoReferralYet] = useState(false);
   const [noProfitYet, setNoProfitYet] = useState(false);
   const [profitLoading, setProfitLoading] = useState(false);
   const [lessAmount, setLessAmount] = useState(false);

   // console.log(address);
   // console.log(isConnected);

   const handleChange = async (e) => {
      setStakeAmount(e.target.value);
   };

   ///// WALLET BALANCE ///////////
   useEffect(() => {
      const fetchBalance = async () => {
         try {
            // const provider = new ethers.getDefaultProvider(
            //    'https://bsc-dataseed1.binance.org/'
            // );
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const walletBalance = await provider.getBalance(address);

            const balance = parseFloat(
               ethers.utils.formatEther(walletBalance)
            ).toFixed(5);
            setWalletBalance(balance);
         } catch (error) {
            console.error(error);
         }
      };
      if (address) {
         fetchBalance();
      }
   }, [address]);

   ///// REFERRALREWARDS F(x) ///////////
   useEffect(() => {
      const ReferralReward = async () => {
         try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // const provider = new ethers.getDefaultProvider(
            //    'https://bsc-dataseed1.binance.org/'
            // );

            // const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(
               minningContractAddress,
               minningAbi,
               provider
            );
            const max = await contractInstance.referralRewards(address);
            const referralReward = max.toString();
            // const minlock = ethers.utils.formatUnits(max, 'ether');
            // const formattedMinLock = minlock.toLocaleString();
            setReferralReward(referralReward);
         } catch (error) {
            console.error(error);
         }
      };
      ReferralReward();
   }, [address]);

   ///// TOTAL STAKE, Daily Roi, Profit Pool, referralBonusGain ///////////
   useEffect(() => {
      const TotalStaking = async () => {
         try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // const provider = new ethers.getDefaultProvider(
            //    'https://bsc-dataseed1.binance.org/'
            // );

            // const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(
               minningContractAddress,
               minningAbi,
               provider
            );

            // total staking
            const max = await contractInstance.totalStaking();
            const totalStake = max.toString();
            setTotalStake(totalStake);

            // daily roi
            const roi = await contractInstance.YEAR_RATE();
            const dailyRoi = roi.toString();
            const dailyRoiInEther = ethers.utils.formatUnits(dailyRoi, 'ether');
            const dailyRoiAmount = (dailyRoiInEther / 60) * 30;
            setDailyRoi(dailyRoiAmount);

            // profit pool
            const profitPool = await contractInstance.calculateRewards(address);
            const profitPoolAmount = profitPool.toString();
            setProfitPool(profitPoolAmount);

            // referral bonus gain
            const referralBonusGain = await contractInstance.referralBonusGain(
               address
            );

            const referralBonusWithdrawn = referralBonusGain[1];
            const nextReferralTime = referralBonusWithdrawn;

            const time = new Date(nextReferralTime * 1000);
            const format = time.toLocaleString();

            if (nextReferralTime == '0') {
               setWithdrawnReferral('0');
            } else {
               setWithdrawnReferral(format);
            }

            // const refferTime = new Date(referralTime * 1000);
            // const formattedNextClaimTime1 = ClaimTime.toLocaleString();
         } catch (error) {
            console.error(error);
         }
      };

      TotalStaking();
   }, [address]);

   ///// UNSTAKE F(x) ///////////
   const UnStake = async () => {
      setNoProfitYet(false);
      // setStakeLoading(true);
      try {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner();
         const contract = new ethers.Contract(
            minningContractAddress,
            minningAbi,
            signer
         );
         // const __amount = ethers.utils.parseEther(stakeAmount);
         // // console.log(__amount);
         // const stringAmount = __amount.toString();
         // console.log(stringAmount);
         let tx;

         if (profitPool == 0) {
            setNoProfitYet(true);
            setTimeout(() => {
               setNoProfitYet(false);
            }, 3000);
         } else {
            setNoProfitYet(false);
            setProfitLoading(true);
            tx = await contract.unStake(0, {
               gasLimit: 100000,
               gasPrice: ethers.utils.parseUnits('10.0', 'gwei'),
            });

            setProfitLoading(false);
            const receipt = await tx.wait();
            if (receipt.status == 1) {
               setProfitLoading(false);
            } else {
               setProfitLoading(false);
            }
         }

         // //   check if the transaction was successful
         // if (receipt.status === 1) {
         //    // success();
         //    // setStatus('success');
         //    console.log('successful transaction');
         // } else {
         //    // error();
         //    // setStatus('error');
         //    console.log('error');
         // }
      } catch (err) {
         console.error(err);
         // error();
         // setStatus('error');
      }
      // setStakeLoading(false);
   };

   ///// STAKE F(x) ///////////
   const Stake = async () => {
      setStakeLoading(true);
      try {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner();
         const contract = new ethers.Contract(
            minningContractAddress,
            minningAbi,
            signer
         );

         const _amount = ethers.utils.parseEther(stakeAmount, 'ether');
         // const stringAmount = __amount.toString();
         console.log(_amount.toString());

         // Extract the referral address from the URL query parameters
         const queryParams = new URLSearchParams(window.location.search);
         const referralAddress = queryParams.get('ref');
         console.log(referralAddress);

         const actualReferralAddress =
            referralAddress || '0x0000000000000000000000000000000000000000';

         // Pass the referralAddress as an argument to the Stake function

         const tx = await contract.stake(_amount, actualReferralAddress, {
            gasLimit: 100000,
            gasPrice: ethers.utils.parseUnits('10.0', 'gwei'),
         });

         setStakeAmount('');

         const receipt = await tx.wait();

         //   check if the transaction was successful
         if (receipt.status === 1) {
            console.log('successful transaction');
            setStakeLoading(false);
         } else {
            console.log('error');
            setStakeLoading(false);
         }
      } catch (err) {
         console.error(err);
         // error();
         // setStatus('error');
      }
      setStakeLoading(false);
   };

   ///// APPROVE F(x) ///////////
   const Approved = async () => {
      // setIsLoading(true);
      // setLessAmount(false);

      try {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner();

         const getApproveContractAddress = new ethers.Contract(
            minningContractAddress,
            minningAbi,
            signer
         );

         const approveContractAddress = await getApproveContractAddress.TOKEN();

         const contractInstance = new ethers.Contract(
            approveContractAddress,
            approveAbi,
            signer
         );

         // const checkIfApprove = await contractInstance.allowance(
         //    address,
         //    minningContractAddress
         // );
         // console.log(checkIfApprove);
         // console.log(contractInstance);

         // Fetch the balance before performing the check
         const walletBalance = await provider.getBalance(address);
         const balance = parseFloat(ethers.utils.formatEther(walletBalance));

         const minimumStakingAmount =
            await getApproveContractAddress.getMinimumStakeAmount();
         const minimumToString = parseFloat(minimumStakingAmount.toString());

         // Convert the input stakeAmount to Ether
         const _amount = ethers.utils.parseEther(stakeAmount, 'ether');
         const amountToString = _amount.toString();

         let tx;

         if (
            amountToString < minimumToString
            //  &&
            //   amountToString > balance
         ) {
            // setApprovedLoading(true);
            // setIsLoading(true);

            setLessAmount(true);
            setTimeout(() => {
               setLessAmount(false);
            }, 3000);

            setIsApproved(false);
         } else {
            setApprovedLoading(true);
            // const value = ethers.utils.parseEther(_amount, 'ether');
            tx = await contractInstance.approve(
               minningContractAddress,
               amountToString,
               {
                  gasLimit: 51000,
               }
            );

            // setIsApproved(true);
            const receipt = await tx.wait();
            //   check if the transaction was successful
            if (receipt.status === 1) {
               setIsApproved(true);
               setApprovedLoading(false);
            } else {
            }
         }

         // setIsApproved(true);
      } catch (error) {
         console.error(error);

         if (error.code === 4001) {
            // User cancelled the transaction, set loading to false
            setApprovedLoading(false);
         } else {
            // Handle other transaction errors
            console.error(error);
         }
         setApprovedLoading(false);
      }

      // setIsLoading(false);
   };

   // ///// claimReferralRewards F(x) ///////////
   const ClaimReferralRewards = async () => {
      setNoReferralYet(false);

      try {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner();
         const contract = new ethers.Contract(
            minningContractAddress,
            minningAbi,
            signer
         );
         let tx;
         if (referralReward == 0) {
            setNoReferralYet(true);
            setTimeout(() => {
               setNoReferralYet(false);
            }, 3000);
            // setNoReferralYet(true);
         } else {
            setNoReferralYet(false);
            setReferralLoading(true);

            tx = await contract.claimReferralRewards({
               gasLimit: 100000,
               gasPrice: ethers.utils.parseUnits('10.0', 'gwei'),
            });
            const receipt = await tx.wait();

            if (receipt.status == 1) {
               setReferralLoading(false);
            } else {
               setReferralLoading(false);
            }
         }
      } catch (err) {
         console.error(err);
         // error();
         // setStatus('error');
      }
   };

   return (
      <MinningContext.Provider
         value={{
            // state variables
            noProfitYet,
            profitLoading,
            referralLoading,
            noReferralYet,
            walletBalance,
            totalStake,
            stakeAmount,
            referralReward,
            isApproved,
            dailyRoi,
            profitPool,
            withdrawnReferral,
            lessAmount,
            approvedLoading,
            stakeLoading,

            // f(x)s
            Stake,
            UnStake,
            handleChange,
            Approved,
            setIsApproved,
            ClaimReferralRewards,
         }}
      >
         {children}
      </MinningContext.Provider>
   );
};
// f(x)
// cashout referral => mine ✅
// mine now => claimReferralRewards ✅
// withdraw Profit => unStake(0) ✅

// /// view f(x) /////
// Profit Pool => calculateRewards ✅
// Daily ROI Amount => yearly_rate / 60 * 30 ✅
// Next Withdraw Time: => X ✅
// Next Mine Time: => first referral ^ intialTimestamp uint256 move to referral menu page ✅
// Available Amount Earned on Referral => referral reward ✅
// Total Rewards Withdrawn from Referrals => referral bonus gain ✅
// Next Withdraw Time: 00:00:00 (only 50% of profit allowance) remove ✅

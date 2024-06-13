import React, { Suspense, useEffect, useState } from "react";
import TransactionStripe from "./TransactionStripe";
import { useAppContext } from "../utils/AppContext";
import { Spinner } from '@chakra-ui/react'


export default function Recent() {
  const { transactions, setTransactions } = useAppContext();


  const [seeAll, setSeeAll] = useState(false);
  const [recentTransactions, setRecentTransactions] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true); // Add a loading state



  useEffect(() => {
    // Fetch transactions and reverse them
    const fetchedAndReversedTransactions = transactions.reverse();
    setRecentTransactions(fetchedAndReversedTransactions); // Update the state with the reversed transactions
    setIsLoading(false)
  }, [transactions]); // Dependency array includes transactions to refetch whenever it changes

  function handleSeeAll() {
    setSeeAll(!seeAll);
  }

  // Determine which transactions to show based on the seeAll state
  const transactionsToShow = seeAll? recentTransactions : recentTransactions.slice(0, 3);

  const renderRecentTransactions = transactionsToShow.map((item, idx) => (
    <TransactionStripe key={idx} item={item} />
  ));
  
  const renderFallback = (
    <Spinner color='blue.500' />
  )

  return (
    <div className="flex overflow-scroll justify-center w-[300px] gap-[20px] items-center flex-col">
      <div className="flex w-full  justify-around  items-center">
        <h2 className="font-medium text-nowrap w-full text-[16px]">Recent Transactions</h2>
        <p onClick={handleSeeAll} className={`p-2 w-full text-end cursor-pointer ${seeAll?"text-red-600":"text-blue-600"}`}>
          {seeAll? "Show Fewer" : "See All"}
        </p>
      </div>

      <div className="w-full flex h-screen overflow-scroll flex-col p-2 justify-start gap-[20px] items-center">

     

        { isLoading  ? renderFallback:renderRecentTransactions}
        {/* {isLoading ? renderFallback : (
          <div className="w-full overflow-y-auto max-h-[300px] flex flex-col gap-[20px]">
            {renderRecentTransactions}
          </div>
        )} */}
       
        
      </div>
    </div>
  );
}

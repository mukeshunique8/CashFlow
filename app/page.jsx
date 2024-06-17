"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import IO from "./components/IO";
import Recent from "./components/Recent";
import { useAppContext } from "./utils/AppContext";
import AddTransaction from "./components/AddTransaction";

import Btn from "./UI Elements/Btn";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase-config";

export default function Page() {
  const {
    showAddTrans,
    setShowAddTrans,
    setIsLogIn,
    currentUser,
    setCurrentUser,
    transactions,
    setTransactions,
  } = useAppContext();

  const userTransactionsRef = collection(
    db,
    `users/${currentUser.id}/transactions`
  );

  const getTransactions = async () => {
    try {
      const response = await getDocs(userTransactionsRef);
      const fetchedTrans = response.docs.map((doc) => doc.data());
      setTransactions(fetchedTrans);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser === "Guest") {
      const storedTrans = JSON.parse(localStorage.getItem("TransactionsList"));
      if (storedTrans) {
        setTransactions(storedTrans);
      }
    } else {
      getTransactions();
    }
  }, [currentUser]);

  return (
    <div className="flex max-w-[380px]  flex-col  justify-start items-center ">
      {!showAddTrans && (
        <div className="flex gap-[40px]  flex-col">
          <IO />
          <Recent />
        </div>
      )}

      {showAddTrans && (
        <div className="w-full absolute bottom-0">
          <AddTransaction />
        </div>
      )}
    </div>
  );
}

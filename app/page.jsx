"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Draggable from "react-draggable";
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
    currentUser,
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

  // Define animation variants
  const variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  return (
    <div className="flex max-w-[400px] w-full text-tri bg-pri flex-col justify-start items-center">
      {!showAddTrans && (
        <div className="flex gap-[40px] flex-col">
          <IO />
          <Recent />
        </div>
      )}

      <AnimatePresence>
        {showAddTrans && (
          <motion.div
            className="w-full bg-sec absolute bottom-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <AddTransaction />
          </motion.div>
        )}
      </AnimatePresence>

    
    </div>
  );
}

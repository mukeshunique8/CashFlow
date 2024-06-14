"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import IO from "./components/IO";
import Recent from "./components/Recent";
import { useAppContext } from "./utils/AppContext";
import AddTransaction from "./components/AddTransaction";
import Login from "./components/Login";
import Btn from "./UI Elements/Btn";

export default function Page() {
  const { showAddTrans, setShowAddTrans, setIsLogIn } = useAppContext();
  const { transactions, setTransactions } = useAppContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTrans = JSON.parse(localStorage.getItem("TransactionsList"));
      if (storedTrans) {
        setTransactions(storedTrans);
      }
    }
  }, []);

  return (
    <div className="flex max-w-[380px]  flex-col  justify-start items-center ">
      {/* <Login/> */}
      {!showAddTrans && (
        <div className="flex gap-[40px]  flex-col">
          <IO />
          {/* <Btn name onClick={handleLogout}/> */}
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

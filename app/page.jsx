"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import IO from "./components/IO";
import Recent from "./components/Recent";
import { useAppContext } from "./utils/AppContext";
import AddTransaction from "./components/AddTransaction";

export default function Page() {
  const { showAddTrans, setShowAddTrans } = useAppContext();
  return (
    <div className="flex  flex-col gap-[40px] justify-start items-center w-full">
      {!showAddTrans && (
        <div className="flex flex-col">
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

import React from "react";
import TransactionStripe from "./TransactionStripe";

export default function Recent() {
  return (
    <div className="flex justify-center w-full gap-[20px] items-center flex-col ">
      <div className=" flex w-full justify-between items-center">
        <h2 className="font-bold text-[18px]">Recent Transactions</h2>
        <p className=" p-2">See All</p>
      </div>

      <div className="w-full flex flex-col justify-start gap-[20px] items-center ">
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      <TransactionStripe  />
      </div>
    </div>
  );
}

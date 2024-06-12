import React from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export default function TransactionStripe() {
  return (
    <div className="w-full flex glass2 px-4 py-2 justify-between items-center">
      <div className="flex justify-start items-center gap-[20px]">
      <div className=" flex justify-center">
        <RiMoneyRupeeCircleFill size={30} />
      </div>
      <div className=" flex flex-col items-start justify-start">
        <h2 className="text-[18px] font-bold">Food</h2>
        <p>Card</p>
      </div>
      </div>
      <div className=" flex flex-col items-end justify-center">
        <p className="text-[18px] font-bold">20</p>
        <p>07 Mar 2023</p>
      </div>
    </div>
  );
}

import React from "react";
import { useAppContext } from "../utils/AppContext";
import SkeletonLoader from "../UI Elements/SkeletonLoader";

export default function IO() {
  const { totalIncome, totalExpenses, netWorth } = useAppContext();

  const data = [
    {
      Title: "Income",
      Value: totalIncome,
    },
    {
      Title: "Spent",
      Value: totalExpenses,
    },
  ];

  const renderTemplate = data.map((item, index) => (
    <div key={index} className="flex flex-col gap-1 justify-center   w-full px-2 py-4 items-center text-center">
      <h2 className=" text-[#FFFF] font-bold" >{item.Title}</h2>
      <h2 className="font-bold text-sec w-full text-[25px]">
        {item.Value !== null ? `₹ ${item.Value}` : <SkeletonLoader />}
      </h2>
    </div>
  ));

  return (
    <div className="flex justify-between flex-col glass w-[300px] items-center mx-auto gap-4 p-4 mt-[100px]">
      <div className="flex justify-center items-center w-full">
        {renderTemplate}
      </div>
      <div className="w-full flex-col px-2 text-sec justify-center items-center flex">
        <h2 className="font-bold text-[#FFFF] ">Net Worth</h2>
        <h2 className="font-bold w-full text-sec  text-center text-[25px]">
          {netWorth !== null ? `₹ ${netWorth}` : <SkeletonLoader />}
        </h2>
      </div>
    </div>
  );
}

import React from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export default function TransactionStripe({item}) {

  const date = new Date(item.date);
  const dateTimeString = date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const [istDate, istTime] = dateTimeString.split(', ');
  // console.log(dateTimeString);
  return (
    <div className="w-full flex glass3 px-4 py-2 justify-between items-center">
      <div className="flex w-[60%] justify-start items-center gap-[20px]">
      <div className=" flex justify-center">
        <RiMoneyRupeeCircleFill size={30} />
      </div>
      <div className=" flex flex-col items-start justify-start">
        <h2 className="text-base font-medium text-nowrap">{item?.category}</h2>
        <p className="text-[12px] italic">{item?.paymentType}</p>
      </div>
      </div>
      <div className=" flex w-[40%] flex-col items-end justify-center">
        <p className={`${item?.flow === "Income" ? "text-green-800" : " text-red-800 "} text-base font-medium text-nowrap`}>{`${item?.flow === "Income" ? "+" : "-"} ${item?.amount}`}</p>
        <div className="flex flex-col justify-center items-end">
        <p className="text-[12px]">{istDate}</p>
        <p className="text-[12px]">{istTime}</p>
        </div>
      </div>
    </div>
  );
}

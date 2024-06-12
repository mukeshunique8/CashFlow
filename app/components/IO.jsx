import React from "react";

export default function IO() {
  const data = [
    {
      Title: "Income",
      Value: "$1203",
    },
    {
      Title: "Spent",
      Value: "$3203",
    },
  ];

  const renderTemplate = data.map((item, index) => (
    <div className="flex flex-col gap-1 justify-center  px-2 py-4 w-full items-center text-center">
      <h2 >{item.Title}</h2>
      <h2 className="font-bold text-[25px] ">{item.Value}</h2>
    </div>
  ));

  return (
    <div className="flex justify-between w-full glass  items-center mx-auto gap-4 p-4 mt-[100px]">
      {renderTemplate}
    </div>
  );
}

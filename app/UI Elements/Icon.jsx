import React from "react";

export default function Icon({ name, icon }) {
  return (
    <div className="flex justify-center items-center flex-col text-center">
      <div className=" flex justify-center items-center">{icon}</div>
      <p className="text-base">{name}</p>

    </div>
  );
}

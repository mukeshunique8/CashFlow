import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { useAppContext } from "../utils/AppContext";

export default function Navbar() {
  const { showAddTrans, setShowAddTrans } = useAppContext();

  return (
    <div className=" cursor-pointer py-2 flex justify-between items-center  w-full ">
      <IoIosMenu size={30} />
      <div>
        <h2 className="font-extrabold text-[25px]">
          Hi, <span className="font-medium">User</span>
        </h2>
      </div>
      <IoIosNotifications size={30} />
    </div>
  );
}

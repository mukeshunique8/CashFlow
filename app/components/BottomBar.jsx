import React from "react";
import Icon from "../UI Elements/Icon";
import { IoHome } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useAppContext } from "../utils/AppContext";
import { FaChevronDown } from "react-icons/fa";

const menuIcons = [
  {
    name: "Home",
    icon: <IoHome size={30} />,
  },
  {
    name: "Transfer",
    icon: <BiTransferAlt size={30} />,
  },
  {
    name: "Wallet",
    icon: <IoWalletOutline size={30} />,
  },
  {
    name: "profile",
    icon: <FaCircleUser size={30} />,
  },
];

const renderIcons = menuIcons.map((icon, index) => (
  <Icon key={index} name={icon.name} icon={icon.icon} />
));

export default function BottomBar() {
  const { showAddTrans, setShowAddTrans } = useAppContext();
  function handleAddTrans() {
    setShowAddTrans(!showAddTrans);
  }
  return (
    <div className={`${showAddTrans?" bg-sec text-tri ":" bg-pri "}  cursor-pointer px-[15px] py-2 flex justify-between items-center w-full `}>
      {renderIcons}
      <div className={`absolute left-[50%] p-1 -translate-x-[50%] rounded-full  -top-[15px] ${showAddTrans?"bg-tri":"bg-sec"}`}>
        {showAddTrans ? (
          <FaChevronDown color="#111" onClick={handleAddTrans} size={30} />
        ) : (
          <IoMdAdd color="white" onClick={handleAddTrans} size={30} />
        )}
      </div>
    </div>
  );
}

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
    <div className="cursor-pointer px-[15px] relative py-2 flex justify-between  items-center  w-full ">
      {renderIcons}
      <div className="absolute left-[50%] bg-white p-2 -translate-x-[50%] rounded-full  -top-[30px]">
        {showAddTrans ? (
          <FaChevronDown onClick={handleAddTrans} size={40} />
        ) : (
          <IoMdAdd onClick={handleAddTrans} size={40} />
        )}
      </div>
    </div>
  );
}

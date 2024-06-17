import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { useAppContext } from "../utils/AppContext";

export default function Navbar() {
  const {setAuth,isSignUp, setIsSignUp, isLogIn, setIsLogIn, currentUser, setCurrentUser } = useAppContext();
  function handleLogout(){
    setAuth(false)
    setIsSignUp(false)
    setCurrentUser({name:"Guest",id:"007"})

  }


  return (
    <div className=" cursor-pointer px-[15px] py-2 flex justify-between items-center   w-full ">
      <IoIosMenu onClick={handleLogout} size={30} />
      <div>
        <h2 className="font-extrabold text-[25px]">
          Hi, <span className="font-medium">{currentUser.name}</span>
        </h2>
      </div>
      <IoIosNotifications size={30} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Btn from "../../UI Elements/Btn";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import { useAppContext } from "../../utils/AppContext";

import Login from "./Login";
import SignUp from "./SignUp";
export default function Auth() {
  const { auth, setAuth,isGuest,setIsGuest, isSignUp, setIsSignUp, isLogIn, setIsLogIn } = useAppContext();

  return (
    <div className="max-w-[400px] h-screen relative w-full px-[15px] rounded-lg bg-white flex flex-col justify-center items-center">


      {!isSignUp ? <SignUp/> : <Login/> }


    </div>
  );
}

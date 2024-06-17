import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Btn from "../../UI Elements/Btn";
import { useAppContext } from "../../utils/AppContext";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase-config";

export default function Login() {
  // Chakra
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { setAuth, setIsSignUp, currentUser, setCurrentUser } = useAppContext();
  // Chakra
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
 

  const [error, setError] = useState(false);
  const userCollectionRef = collection(db, "users");

  const handleLogin = async () => {
    if (loginName.trim().length === 0 || loginPassword.trim().length === 0) {
      setError("Please enter the login details");
      return;
    }
    const q = query(userCollectionRef, where("name", "==", loginName));
    const querySnapShot = await getDocs(q);

    if (!querySnapShot.empty) {
      const userDoc = querySnapShot.docs[0];
      const userData = userDoc.data();

      // Extracting only the name and id from the user document
      const userName = userData.name;
      const userId = userDoc.id; // The document ID is considered the user's ID in this context

     
      const isValidPassword = userData?.password === loginPassword;
      if (isValidPassword) {
        setCurrentUser({ name: userName, id: userId });
        setAuth(true);
      } else {
        setError("Invalid password");
      }
    } else {
      setError("UserName Not Found");
    }
  };

  return (
    <div className="max-w-[400px] h-fit gap-[20px] text-pri   relative w-full p-[35px] rounded-lg  flex flex-col justify-start items-center">
      {/* <div className="relative object-contain w-[100px] h-[100px]">
        <Image
          className="cursor-pointer "
          src="/login.png"
          alt="Vector"
          fill
          sizes="100%"
        />
      </div> */}

      <h3 className="text-[45px]  text-tri bg-gradient-to-tr from-pri from-50% to-sec to-50%  font-semibold">Cash Flow</h3>

      <div className="flex flex-col mt-5 gap-[10px] w-full justify-center items-start">
        {/* <label htmlFor="User Name">User Name</label> */}
        <Input
          onChange={(e) => {
            setLoginName(e.target.value);
            setError(false);
          }}
          className="text-pri"
          placeholder="Enter your User Name"
        />
      </div>
      <div className="flex flex-col gap-[10px] w-full justify-center items-start">
        {/* <label htmlFor="password">Password</label> */}

        <InputGroup size="md">
          <Input
            onChange={(e) => {
              setLoginPassword(e.target.value);
              setError(false);
            }}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            className="text-pri"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>

      <div className="w-full flex justify-center items-center">
        <p className="flex justify-center items-center text-center w-full text-pri">
          {error}
        </p>
      </div>
      <div className="flex flex-col w-[100%] justify-center gap-[20px] items-center">
        <div className="w-[80%] cursor-pointer">
          <Btn onClick={handleLogin} name="Login" style="text-tri bg-pri font-medium" />
        </div>
        <h3
          onClick={() => {
            setIsSignUp(true);
          }}
          className="w-[100%] cursor-pointer underline underline-offset-4 justify-center text-tri items-center text-center"
        >
          Not registered
        </h3>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Btn from "../../UI Elements/Btn";
import { useAppContext } from "../../utils/AppContext";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import Image from "next/image";

export default function SignUp() {
  // Chakra
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {auth,setAuth,isGuest,setIsGuest,isSignUp, setIsSignUp, isLogIn, setIsLogIn, currentUser, setCurrentUser } = useAppContext();
  // Chakra

  const userCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await getDocs(userCollectionRef);
      const usersArray = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(usersArray);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const createUser = async () => {
    try {
      await addDoc(userCollectionRef, { name: newName, password: newPassword });
      console.log("User added successfully");
      getUsers();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const validateUser = async () => {
    const isSameUser = users.some((item) => item.name === newName);
    if (!isSameUser) {
      createUser();
      setCurrentUser(newName);
    } else {
      console.log("User already exists");
      alert("User already exists");
    }
  };
  const handleLogin = async () => {
    if (newName.trim().length === 0 || newPassword.trim().length === 0) {
      alert("Please fill in all details");
      return;
    }
    setNewName("");
    setNewPassword("");
    await validateUser();
    setIsSignUp(true)
    
  };

  function handlGuest(){
    setIsSignUp(true)
    setIsLogIn(true)
    setAuth(true)
    setIsGuest(true)

  }

  return (
    <div className="max-w-[400px] h-fit gap-[20px] glass relative w-full p-[35px] rounded-lg bg-white flex flex-col justify-start items-center">
      <div className="relative w-[100px] h-[100px]">
        <Image
          className="cursor-pointer"
          src="/signup.png"
          alt="Vector"
          fill
          sizes="100%"
        />
      </div>

      {/* <h3 className="text-[20px] font-semibold">SignUp</h3> */}

      <div className="flex flex-col gap-[10px] w-full justify-center items-start">
        <label htmlFor="User Name">User Name</label>
        <Input
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          placeholder="User Name"
        />
      </div>
      <div className="flex flex-col gap-[10px] w-full justify-center items-start">
        <label htmlFor="password">Password</label>

        <InputGroup size="md">
          <Input
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <div className="flex w-[100%] justify-between gap-[20px] items-center">
        <h3 onClick={()=>{setIsSignUp(true)}} className="w-[50%] cursor-pointer underline underline-offset-4 justify-center items-center">Already User?</h3>
        <div className="w-[50%] cursor-pointer">

        <Btn  onClick={handleLogin} name="SignUp" style="bg-red-200" />
        </div>
      </div>

      <div className="cursor-pointer pt-[20px]" onClick={handlGuest}>
        <Btn style="bg-orange-400" name="Login as Guest"/>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Btn from "../UI Elements/Btn";
import { useAppContext } from "../utils/AppContext";

export default function Login() {

    // Chakra
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const{isLogIn,setIsLogIn} =useAppContext()



  const handleLogin = ()=>{

    // console.log("lgoin in");
    setIsLogIn(true)

  }

  return (
    <div className="max-w-[400px] h-screen relative w-full px-[15px] rounded-lg bg-white flex flex-col justify-center items-center">
      <h3 className="text-[20px] font-semibold">Login</h3>

      <div className="flex flex-col w-full justify-center items-start">
        <label htmlFor="User Name">User Name</label>
        <Input placeholder="User Name" />
      </div>
      <div className="flex flex-col w-full justify-center items-start">
      <label htmlFor="password">Password</label>

      
      <InputGroup size="md">
        <Input
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
      <div className="flex w-[50%] justify-center items-center">
        <Btn onClick={handleLogin} name="Login" style="bg-blue-400"/>

      </div>
    </div>
  );
}

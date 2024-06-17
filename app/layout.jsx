"use client";
import "../app/global.css";
import { Roboto_Serif } from "next/font/google";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import { AppProvider, useAppContext } from "./utils/AppContext";
import { ChakraProvider } from "@chakra-ui/react";

import Auth from "./components/auth/Auth";

const roboto_serif = Roboto_Serif({ subsets: ["latin"] });

function AppContent({children}) {
  const { isLogIn,isSignUp,auth,setAuth} = useAppContext();

  if (!auth) {
    return <Auth/>;
  } 
  

  return (
    <div className="max-w-[400px] h-screen relative w-full  rounded-lg  flex flex-col justify-start items-center">
      <div className="w-full max-w-[400px] z-50   fixed top-0">
        <Navbar />
      </div>
      {children}
      <div className="w-full max-w-[400px]  z-50 fixed bottom-0">
        <BottomBar />
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_serif.className} mx-auto flex flex-col bg-sec  justify-center items-center`}>
        <ChakraProvider>
          <AppProvider>
            <AppContent>
              {children}
            </AppContent>
          </AppProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}

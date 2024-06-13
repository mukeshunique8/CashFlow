import React, { createContext, useContext, useState, useEffect } from "react";
import { calculateIncomeAndExpenses } from "./functions";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showAddTrans, setShowAddTrans] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [netWorth, setNetWorth] = useState(null);
  const [isLogIn,setIsLogIn] =useState(false)

  useEffect(() => {
    const { totalIncome, totalExpenses } = calculateIncomeAndExpenses(transactions);
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
    setNetWorth(totalIncome - totalExpenses);
  }, [transactions]);


 const [ users,setUsers] = useState([])
 const userRef = collection(db,"users")
  useEffect(()=>{

    const getUsers = async () =>{

      const response = await getDocs(userRef)

      console.log(response.docs.map((doc)=>({...doc.data(),id:doc.id})));


    }
      getUsers()
  },[])

  return (
    <AppContext.Provider value={{
      showAddTrans, 
      setShowAddTrans,
      transactions,
      setTransactions,
      totalIncome,
      totalExpenses,
      netWorth,
      isLogIn,setIsLogIn
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

"use client";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../utils/AppContext";
import { Select } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Btn from "../UI Elements/Btn";

export default function AddTransaction() {
  const { showAddTrans, setShowAddTrans,transactions,setTransactions } = useAppContext();

  const [value, setValue] = useState("50");
  const [category, setCategory] = useState("");
  // const [incomeCategory, setIncomeCategory] = useState("");
  const [paymentType, setPaymentType] = useState("Cash");
  const [flowType, setFlowType] = useState("Income");

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const currentTransactions = JSON.parse(
      localStorage.getItem("TransactionsList") || "[]"
    );
    setTransactions(currentTransactions);
  }
  }, [transactions]);

  // console.log(transactions);

  const format = (val) => `₹` + val;
  const parse = (val) => val.replace(/^\$/, "");

  const flowTypes = ["Income", "Expense"];
  const paymentTypes = ["Cash", "Online"];

  const renderFlowType = flowTypes.map((item, index) => (
    <div
      key={index}
      className={`p-2 w-fit rounded-md bg-white cursor-pointer ${
        flowType === item ? "bg-green-300" : ""
      }`}
      onClick={() => setFlowType(item)}
    >
      <p className="cursor-pointer">{item}</p>
    </div>
  ));
  const renderPaymentType = paymentTypes.map((item, index) => (
    <div
      key={index}
      className={`p-2 w-fit rounded-md bg-white cursor-pointer ${
        paymentType === item ? "bg-cyan-300" : ""
      }`}
      onClick={() => setPaymentType(item)}
    >
      <p className="cursor-pointer">{item}</p>
    </div>
  ));

  const renderIncomeCategory = (
    <Select
    
      variant="unstyled"
      className="w-[70%] p-2 rounded-lg"
      onChange={(e) => setCategory(e.target.value)}
      value={category} // Added value to ensure controlled component
    >
      <option value="">Income Category</option>
      <option value="Salary">Salary</option>
      <option value="Part-Time">Part-Time</option>
      <option value="Other Income">Other Income</option>
    </Select>
  );

  const renderExpenseCategory = (
    <Select
    
      className="w-[70%] p-2 rounded-lg"
      onChange={(e) => setCategory(e.target.value)}
      value={category} // Added value to ensure controlled component
    >
      <option value="">Expense Category</option>
      <option value="Food">Food</option>
      <option value="Fuel">Fuel</option>
      <option value="Rent">Rent</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Drugs">Drugs</option>
      <option value="Transportation">Transportation</option>
      <option value="Utilities">Utilities</option>
      <option value="Health & Fitness">Health & Fitness</option>
      <option value="Other Expenses">Other Expenses</option>
    </Select>
  );

  function cancelTrans() {
    setShowAddTrans(false);
  }

  function addTrans() {
    if (!flowType || !category || !paymentType || !value) {
      alert("Please Enter the Value");
    } else {
      const newTransaction = {
        flow: flowType,
        amount: value,
        category: category,
        paymentType: paymentType,
        date: new Date().toISOString(),
      };
      setTransactions((prev) => [...prev, newTransaction]);
      // Directly manipulate localStorage here to ensure it's updated with the latest transactions array
      localStorage.setItem(
        "TransactionsList",
        JSON.stringify([...transactions, newTransaction])
      );

      // console.log(newTransaction);

      setShowAddTrans(false);
    }
    // console.log(transactions); // Note: This log might still show the old state due to closure issues
  }

  return (
    <div className="w-full bg-gray-200 rounded-t-3xl h-sm-75 z-50 flex flex-col justify-start py-3 items-center gap-[10px]">
      <div className="flex justify-center font-bold w-full text-[20px] items-center text-center p-2">
        <h2>Add transaction</h2>
      </div>
      <div className="flex flex-col w-full gap-[10px] px-4 items-start justify-start">
        <div className="flex gap-5 flex-col glass2 items-center justify-center w-full p-4">
        <div className="flex  w-full justify-between items-center">
          <p className="font-semibold  text-[18px]">Flow</p>
          <div className="flex justify-center items-center">

            {renderFlowType}
          </div>
          </div>
          <div className="w-full flex  justify-between items-center">
            <p className="font-semibold  text-[18px]">Amount</p>
            <div className="w-[50%]">
              <NumberInput
              size='lg'
                
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                step={50}
                
                defaultValue={50}
                min={1}
                max={100000}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    bg="green.200"
                    _active={{ bg: "green.300" }}
                    children="+"
                  />
                  <NumberDecrementStepper
                    bg="pink.200"
                    _active={{ bg: "pink.200" }}
                    children="-"
                  />
                </NumberInputStepper>
              </NumberInput>
            </div>
          </div>
         
        </div>
        <div className="flex flex-col glass2 items-start w-full gap-2 justify-center p-4">
          {flowType === "Income" ? renderIncomeCategory : renderExpenseCategory}
        </div>
        <div className="flex flex-col items-start gap-4 justify-center p-4">
          <p className="font-semibold text-[18px]">Payment Type</p>
          <div className="flex justify-start items-start gap-3">
            {renderPaymentType}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-[20px] items-center w-full px-3">
        <Btn
          onClick={cancelTrans}
          name="Cancel"
          style="bg-red-500 text-white font-medium"
        />
        <Btn
          onClick={addTrans}
          name="Add"
          style="bg-green-500 text-white font-medium"
        />
      </div>
    </div>
  );
}

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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase-config";

export default function AddTransaction() {
  const {
    showAddTrans,
    setShowAddTrans,
    transactions,
    setTransactions,
    currentUser,
  } = useAppContext();

  const [value, setValue] = useState("50");
  const [category, setCategory] = useState("");
  const [paymentType, setPaymentType] = useState("Cash");
  const [flowType, setFlowType] = useState("Income");

  const format = (val) => `₹` + val;
  const parse = (val) => val.replace(/^\₹/, "");

  const flowTypes = ["Income", "Expense"];
  const paymentTypes = ["Cash", "Online"];

  const renderFlowType = flowTypes.map((item, index) => (
    <div
      key={index}
      className={`p-2 w-fit rounded-md  cursor-pointer ${
        flowType === item ? "bg-tri text-sec" : ""
      }`}
      onClick={() => setFlowType(item)}
    >
      <p className="cursor-pointer">{item}</p>
    </div>
  ));

  const renderPaymentType = paymentTypes.map((item, index) => (
    <div
      key={index}
      className={`p-2 w-fit rounded-md  cursor-pointer ${
        paymentType === item ? "bg-tri text-sec" : ""
      }`}
      onClick={() => setPaymentType(item)}
    >
      <p className="cursor-pointer">{item}</p>
    </div>
  ));

  const renderIncomeCategory = (
    <Select
    color= "#000"
      variant="unstyled"
      className="w-[70%]  text-pri rounded-sm"
      onChange={(e) => setCategory(e.target.value)}
      value={category}
    >
      <option value="">Income Category</option>
      <option value="Salary">Salary</option>
      <option value="Part-Time">Part-Time</option>
      <option value="Other Income">Other Income</option>
    </Select>
  );

  const renderExpenseCategory = (
    <Select
    color= "#000"
        variant="unstyled"
      className="w-[70%]  text-pri rounded-sm"
      onChange={(e) => setCategory(e.target.value)}
      value={category}
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

  async function addTrans() {
    if (!flowType || !category || !paymentType || !value) {
      alert("Please Enter the Value");
      return;
    }

    const newTransaction = {
      flow: flowType,
      amount: value,
      category: category,
      paymentType: paymentType,
      date: new Date().toISOString(),
    };

    if (currentUser === "Guest") {
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem("TransactionsList", JSON.stringify(updatedTransactions));
    } else {
      const userTransactionsRef = collection(db, `users/${currentUser.id}/transactions`);
      try {
        await addDoc(userTransactionsRef, newTransaction);
        setTransactions((prev) => [...prev, newTransaction]);
      } catch (error) {
        console.error("Error adding transaction:", error);
        alert("Failed to add transaction.");
        return;
      }
    }

    setShowAddTrans(false);
  }

  return (
    <div className="w-full  max-w-[380px] bg-sec text-tri rounded-t-3xl h-sm-75 z-50 flex flex-col justify-start p-3 items-center gap-[10px]">
      <div className="flex justify-center font-bold w-full text-[20px] items-center text-center p-2">
        <h2 className="text-pri">Add transaction</h2>
      </div>
      <div className="flex flex-col w-full gap-[10px] px-4 items-start justify-start">
        <div className="flex gap-5 flex-col items-center justify-center w-full p-4">
          <div className="flex  w-full justify-between items-center">
            <p className="font-semibold text-pri text-[18px]">Flow</p>
            <div className="flex justify-center items-center">{renderFlowType}</div>
          </div>
          <div className="w-full flex  justify-between items-center">
            <p className="font-semibold text-pri text-[18px]">Amount</p>
            <div className="w-[50%]">
              <NumberInput
                size="lg"
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
                    bg="#00b397"
                    _active={{ bg: "#00b397" }}
                    children="+"
                  />
                  <NumberDecrementStepper
                    bg="#d3d3d3"
                    _active={{ bg: "#d3d3d3" }}
                    children="-"
                  />
                </NumberInputStepper>
              </NumberInput>
            </div>
          </div>
        </div>
        <div className="flex flex-col glass2 items-start w-full gap-2 justify-center px-4 py-2">
          {flowType === "Income" ? renderIncomeCategory : renderExpenseCategory}
        </div>
        <div className="flex flex-col  w-full items-start gap-4 justify-center p-4">
          <p className="font-semibold text-pri text-[18px]">Payment Type</p>
          <div className="flex justify-start items-start gap-3">{renderPaymentType}</div>
        </div>
      </div>

      <div className="flex justify-between gap-[20px] items-center w-full  p-4">
        <Btn
          onClick={cancelTrans}
          name="Cancel"
          style=" text-white font-medium"
        />
        <Btn
          onClick={addTrans}
          name="Add"
          style="bg-pri text-tri font-medium"
        />
      </div>
    </div>
  );
}

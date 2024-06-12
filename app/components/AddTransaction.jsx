import React, { useContext } from 'react'
import { useAppContext } from '../utils/AppContext';

export default function AddTransaction() {
    const { showAddTrans, setShowAddTrans } = useAppContext();

  return (
    <div className='w-full bg-blue-300 h-screen z-50 flex flex-col justify-center items-center'>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
        <p>AddTransaction</p>
    </div>
  )
}

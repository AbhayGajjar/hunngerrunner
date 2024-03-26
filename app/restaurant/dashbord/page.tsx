"use client"
import AddFoodItems from '@/components/AddFoodItems'
import FooditemList from '@/components/FooditemList'
import RestaurantHeader from '@/components/RestaurantHeader'
import React, { useState } from 'react'

const Dashboard = () => {
  const [additem, setadditem] = useState(false)

  return (
    <>
    <RestaurantHeader />
    <div>
      <button onClick={()=>setadditem(true)} className='bg-green-500 px-10 py-2 rounded-lg'>Add Items</button>
      <button  onClick={()=>setadditem(false)} className='bg-gray-500 px-10 py-2 rounded-lg ml-3'>Dashboard</button>
       
       {
        additem ?<AddFoodItems/>: <FooditemList/>
       }

     
    </div>
    </>
  )
}

export default Dashboard
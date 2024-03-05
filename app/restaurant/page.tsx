"use client"

import RestaurantFooter from '@/components/RestaurantFooter';
import RestaurantHeader from '@/components/RestaurantHeader';
import RestaurantLogin from '@/components/RestaurantLogin';
import RestaurantSignUp from '@/components/RestaurantSignUp';
import React from 'react'
import { useState } from 'react';

const Restaurant = () => {
    const [login, setlogin] = useState(true)
  return (
    <>
     <RestaurantHeader/>
     {
        login ? <RestaurantLogin/> :  <RestaurantSignUp/>
     }
     
     <button className='text-center w-full' onClick={()=>setlogin(!login)}>{login ? "Do not have Account?" : "Already have account? LogIn"}</button>

     <RestaurantFooter/>
    </>
  )
}

export default Restaurant
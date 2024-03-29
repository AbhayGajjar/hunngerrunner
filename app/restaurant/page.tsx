"use client"

import RestaurantFooter from '@/components/RestaurantFooter';
import RestaurantHeader from '@/components/RestaurantHeader';


import React from 'react'
import { useState } from 'react';
import RestaurantSignUp from '../RestaurantSignUp/page';
import RestaurantLogin from '../RestaurantLogin/page';

const Restaurant = () => {
    const [login, setlogin] = useState(true)
  return (
    <>
     <RestaurantHeader/>
     {
        login ? <RestaurantLogin/> :  <RestaurantSignUp/>
     }
     
     <button className='text-center w-full hover:underline' onClick={()=>setlogin(!login)}>{login ? "Do not have Account?" : "Already have account? LogIn"}</button>
     
     <RestaurantFooter/>

    </>
  )
}

export default Restaurant
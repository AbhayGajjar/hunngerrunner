import RestaurantHeader from '@/components/RestaurantHeader'
import React from 'react';
import { FaPeopleGroup } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <RestaurantHeader />
      <div className=" tooltip tooltip-right" data-tip="customer">
        <FaPeopleGroup className='hover:cursor-pointer text-2xl'/>
          
      </div>
    </>
  )
}

export default Home
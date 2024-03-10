"use client"

import Link from 'next/link';
import React from 'react';




const RestaurantHeader = () => {

    return (
        <div className="navbar shadow-lg">
  <div className="flex-1">
  <img src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" className='w-40' alt="" />
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal">
      <div className='flex gap-7'>

      <Link href={"/"} className='py-2 hover:-translate-y-[2px]'><li>Home</li></Link>
      <Link href={""} className='py-2 hover:-translate-y-[2px] '><li>Feacture</li></Link>
      <Link href={""} className='py-2 hover:-translate-y-[2px]'><li>Blog</li></Link>
     
      </div>
   
      <li>
        <details className='px-5'>
          <summary>
            More
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>LogIn</a></li>
            <li><a>Contact</a></li>
            <li><a>About </a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    )
}

export default RestaurantHeader
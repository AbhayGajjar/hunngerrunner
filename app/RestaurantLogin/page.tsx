"use client"

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface iformdata{
    email:string,
    password:string,
}

const RestaurantLogin = async () => {
    // await new Promise(resolve=>setTimeout(resolve,5000))
    const [logindata, setlogindata] = useState<iformdata>({
        email:"",
        password:"",
    })

    const handlechange = (name?: any, value?: any)=>{
        setlogindata({
            ...logindata,[name]:value
        })
    }

    const loginformsubmit =(e:any)=>{
        e.preventDefault();
        console.log(logindata);
        if(logindata.email.trim()==="" || logindata.password.trim()===""){
            toast.error("Invalid Data !!");
            return;
        }
        

    }

    
    


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        LogIn Account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={loginformsubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e:any)=>handlechange(e.target.name,e.target.value)}
                                    value={logindata.email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e:any)=>handlechange(e.target.name,e.target.value)}
                                    value={logindata.password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                   
                                   
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                         <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default RestaurantLogin
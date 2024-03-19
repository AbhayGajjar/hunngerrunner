import { addfood } from '@/services/userServices';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { json } from 'stream/consumers';

interface additemprops {
    foodname: string,
    price: string,
    path: string,
    desc: string
}

const AddFoodItems = () => {
    const [itemdata, setitemdata] = useState<additemprops>({
        foodname: "",
        price: "",
        path: "",
        desc: "",
    })

    
    const handlechange = (name: string, value: string) => {
        setitemdata({
            ...itemdata, [name]: value
        })
        
    }

    const handleitemsubmit = async(event:any)=>{

        event.preventDefault();
        console.log(itemdata);
       
        const result = await addfood(itemdata);
       await  localStorage.getItem('restaurantUser', JSON.stringify({result}));
         toast.success('food  is Registered')



    }
    
       

    // useEffect(() => {
    //   console.log(itemdata);
    // }, [itemdata])
    


    return (
        <div className="bg-grey-lighter mt-10 relative flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-4 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Add Your Item</h1>
                    <input
                        onChange={(e) => handlechange(e.target.name, e.target.value)}
                        value={itemdata.foodname}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="foodname"
                        placeholder=" Name" />
                    <input
                        onChange={(e) => handlechange(e.target.name, e.target.value)}
                        value={itemdata.price}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="price"
                        placeholder="price" />
                    <input
                        onChange={(e) => handlechange(e.target.name, e.target.value)}
                        value={itemdata.path}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="path"
                        placeholder="Enter Image Path" />
                    <input
                        onChange={(e) => handlechange(e.target.name, e.target.value)}
                        value={itemdata.desc}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="desc"
                        placeholder="Description" />


                    <button
                        onClick={handleitemsubmit}
                        type="submit"
                        className="w-full  text-center py-3 rounded bg-green text-black bg-green-500 focus:outline-none my-1"
                    >Add Item</button>

                


                </div>


            </div>
        </div>
    )
}

export default AddFoodItems
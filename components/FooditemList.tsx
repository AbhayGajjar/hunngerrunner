import React from 'react'

const FooditemList = () => {
  return (
    <div className='main'>
        <div className='header'>
            <h1 className='text-black text-4xl  text-center font-medium'>FoodItemList </h1>
        </div>
        <div className='mt-5'>
        <table className="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">566</td>
            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">499</td>
            <td className="px-6 py-4 whitespace-nowrap">lorem20</td>
          
            <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
    </tbody>
</table>
        </div>

    </div>
  )
}

export default FooditemList
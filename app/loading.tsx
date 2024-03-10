import React from 'react'

const Loading = () => {
  return (
    <div aria-label="Loading..." role="status" className="flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  space-x-2">
    <img src="/food-delivery.gif" alt="" className='w-72 text-[#FF0000]' />
 
</div>
  )
}

export default Loading
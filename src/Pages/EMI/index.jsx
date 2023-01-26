import React from 'react'
import {BiSearch} from "react-icons/bi"
import "../../App.css"

function EMI() {
  return (
    <div className=' px-10 py-5 h-full'>
         <div className=' py-5 px-5'>
          <h1 className='text-2xl font-medium'>Search EMI</h1>
          <div className='flex justify-center items-center my-10 space-x-5'>
            <input 
            type="search"
            placeholder='Search..'
            className='shadow-2xl border px-4 py-3  focus:outline-none rounded-full w-1/2'
             />
             <div className='search-div bg-blue-200 h-12 w-12 rounded-full flex justify-center items-center
              shadow-xl shadow-blue-200 cursor-pointer text-blue-500 text-2xl duration-300'>
            <BiSearch className='search'/>
             </div>
          </div>
         </div>
    </div>
  )
}

export default EMI

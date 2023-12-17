import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchUser = () => {
  return (
    <div className='flex-1 flex max-w-sm'>
        <input type="text" placeholder="find a user" className="input bg-slate-100 w-full pr-14 focus:outline-none h-10 rounded-md" />
        <button className='btn btn-xs h-10 w-11  relative right-6 bg-slate-800 hover:bg-slate-600 rounded-tl-none rounded-bl-none rounded-r-md'>
            <FaSearch color='white'/>
        </button>
    </div>
  )
}

export default SearchUser
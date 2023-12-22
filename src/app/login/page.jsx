import Link from 'next/link'
import React from 'react'
import {FaGithub, FaGoogle} from "react-icons/fa"

const LoginPage = () => {
  return (
    <div className='flex-1 w-full flex justify-center place-items-center bg-slate-200'>
        <form className='w-80 sm:w-96 h-auto rounded-md bg-white px-4 flex flex-col gap-10 pb-8'>
            <h1 className='font-bold text-2xl text-center pt-4 text-slate-900'>Login</h1>
             <div className=' w-full flex flex-col gap-3 place-items-center '>

                {/* select user type */}
                <div className='flex place-items-center gap-4'>
                    <div>Login As:</div>
                    <select className='rounded-md'>
                        <option >Employee</option>
                        <option>Admin</option>
                    </select>
                </div>

               <div className='w-full flex justify-center'>
                <input type="text" placeholder="name" className="input input-bordered w-full " />
               </div>

               <div className='w-full flex '>
                <input type="password" placeholder="Password" className="input input-bordered w-full " />
               </div>

               <div className='w-full'>
                <button className='hover:text-blue-500 transition-all 100 ease-in text-sm'>forgot password?</button>
               </div>
             </div>

             <Link href={'/dashboard'} className='w-full'>
                <button className='btn hover:bg-slate-900 hover:text-slate-50 w-full'>login</button>
             </Link>
    
            
           
        </form>
    </div>
  )
}

export default LoginPage
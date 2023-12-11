import Link from 'next/link'
import React from 'react'
import {FaGithub, FaGoogle} from "react-icons/fa"

const LoginPage = () => {
  return (
    <div className='flex-1 w-full flex justify-center place-items-center bg-slate-200'>
        <form className='w-80 h-auto rounded-md bg-white px-4 flex flex-col gap-10'>
            <h1 className='font-bold text-2xl text-center pt-4 text-slate-900'>Login</h1>
             <div className='flex flex-col gap-3'>
               <div>
                <input type="text" placeholder="Enter Email/Phone No" className="input input-bordered w-full max-w-xs" />
               </div>

               <div>
                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
               </div>

               <div>
                <button className='hover:text-blue-500 transition-all 100 ease-in text-sm'>forgot password?</button>
               </div>
             </div>

             <Link href={'/dashboard'} className='w-full'>
                <button className='btn hover:bg-slate-900 hover:text-slate-50 w-full'>login</button>
             </Link>
    
            <div style={{
                position: "relative",
                top: "-18px"
            }} className='w-full flex place-items-center justify-center'>
                <span className='w-24 h-0.5 rounded-lg bg-slate-300 block'></span>
                <span className='text-sm px-1'>sign-in with</span>
                <span className='w-24 h-0.5 rounded-lg bg-slate-300 block'></span>
            </div>
            <div style={{
                position: "relative",
                top: "-40px"
            }} className='w-full flex justify-center gap-2'>
                <button className='btn'>
                    <FaGoogle size = {24}/>
                </button>

                <button className='btn'>
                    <FaGithub size = {24}/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage
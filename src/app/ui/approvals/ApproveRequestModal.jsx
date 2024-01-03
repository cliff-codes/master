'use client'
import React from 'react'
import { FaFileArchive } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ApproveRequestModal = () => {
    const pathname = usePathname()
    console.log(pathname)
    
  return (
    <div className=''>
        <h1 className='font-light text-lg'>Request Details</h1>
        <div className='flex flex-col gap-4 mt-4'>
           
           <div className='flex justify-between'>
            <div>
                    <div className='text-xs'>Allocated Budget</div>
                    <h1 className='text-lg'>2300.00</h1>
            </div>

            <div>
                    <div className='text-xs'>Total Cost</div>
                    <h1 className='text-lg'>4300.00</h1>
            </div>
           </div>

            <div className='text-xs'>
                Supporting documents
            </div>
            <div>
                <div className='w-full h-14 border rounded-lg border-dotted flex place-items-center justify-center hover:bg-slate-200'>
                    <FaFileArchive size={30} />
                </div>
                <button className=' px-2 mt-1 rounded-sm text-xs hover:text-green-600'>click to download</button>
            </div>
        </div>

        <div className='w-full flex flex-col gap-3 mt-8'>
            <Link href={
                pathname.includes("approvals") ? "/employee/orders" : null
            } ><button className='btn btn-success rounded-3xl text-white w-full ' >approve request</button></Link>
            <button className='btn btn-error rounded-3xl text-white w-full' >decline request</button>
        </div>
    </div>
  )
}

export default ApproveRequestModal
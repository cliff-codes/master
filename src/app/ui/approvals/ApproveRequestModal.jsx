import React from 'react'
import { FaFileArchive } from "react-icons/fa";

const ApproveRequestModal = () => {
  return (
    <div>
        <h1 className='font-bold text-xl'>Request Details</h1>
        <div className='flex flex-col gap-3 mt-4'>
            <div>
                Request ID - <span>123432323</span>
            </div>

            <div>
                Allocated Budget (Gh cedis) - <span>1003.00</span>
            </div>

            <div>
                Total Cost (Gh cedis) - <span>25000.00</span>
            </div>

            <div>
                Supporting documents
            </div>
            <div>
                <div className='w-24 h-24 border rounded-lg border-dotted flex place-items-center justify-center'>
                    <FaFileArchive size={40} />
                </div>
                <button className='bg-slate-400 px-2 mt-1 rounded-sm text-xs hover:bg-slate-500'>download</button>
            </div>
        </div>

        <div className='w-full flex flex-col gap-3 mt-8'>
            <button className='btn btn-success text-white w-full' >approve request</button>
            <button className='btn btn-error text-white w-full' >decline request</button>
        </div>
    </div>
  )
}

export default ApproveRequestModal
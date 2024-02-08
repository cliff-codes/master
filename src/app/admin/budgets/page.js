
import React from 'react'
import { FaFile } from 'react-icons/fa'
import Link from 'next/link'
const page = () => {
  return (
    <div className='px-5'>
      <h1 className='font-medium text-xl mt-2'>Budgets</h1>

      <h2 className='mt-2'>Create and manage budgets by department and financial years</h2>

      <div className='mt-6'>
        <Link href = {'/admin/budgets/create'} >
          <button className='btn '>Create New Budget</button>
        </Link>
      </div>

      <div className='mt-6'>
        <h2>Filter by period and department</h2>

        <div className='flex gap-3 mt-4'>
          <select className="select select-bordered w-32 max-w-xs">
            <option disabled selected>Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
          </select>

          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Department</option>
            <option>Department A</option>
            <option>Department B</option>
          </select>
        </div>
      </div>

      {/* fetch budgets from database and display */}
      <section className='mt-4 px-2 rounded-md h-64 pt-3 flex flex-col gap-3'>
        <div className='w-full flex place-items-center gap-3 hover:bg-slate-200 px-2 py-1'>
          <div className='w-12 h-12 rounded-full flex justify-center place-items-center bg-green-500'>
            <FaFile size={24} className='text-slate-50'/>
          </div>

          <div>
            <h1 className='font-medium text-lg'>Annual Budget Spendings</h1>
            <h1>Internet Subscription</h1>
            <div className='flex gap-4'>
              <h1><span className='font-medium '>Budget: </span>5,000,000.00</h1>
              <h1><span className='font-medium '>Spent: </span>0.00</h1>
              <h1><span className='font-medium '>Balance: </span>5,000,000.00</h1>
            </div>
          </div>
        </div>

        <div className='w-full flex place-items-center gap-3 hover:bg-slate-200 px-2 py-1'>
          <div className='w-12 h-12 rounded-full flex justify-center place-items-center bg-green-500'>
            <FaFile size={24} className='text-slate-50'/>
          </div>

          <div>
            <h1 className='font-medium text-lg'>Annual Budget Spendings</h1>
            <h1>Internet Subscription</h1>
            <div className='flex gap-4'>
              <h1><span className='font-medium '>Budget: </span>5,000,000.00</h1>
              <h1><span className='font-medium '>Spent: </span>0.00</h1>
              <h1><span className='font-medium '>Balance: </span>5,000,000.00</h1>
            </div>
          </div>
        </div>


        <div className='w-full flex place-items-center gap-3 hover:bg-slate-200 px-2 py-1'>
          <div className='w-12 h-12 rounded-full flex justify-center place-items-center bg-green-500'>
            <FaFile size={24} className='text-slate-50'/>
          </div>

          <div>
            <h1 className='font-medium text-lg'>Annual Budget Spendings</h1>
            <h1>Internet Subscription</h1>
            <div className='flex gap-4'>
              <h1><span className='font-medium '>Budget: </span>5,000,000.00</h1>
              <h1><span className='font-medium '>Spent: </span>0.00</h1>
              <h1><span className='font-medium '>Balance: </span>5,000,000.00</h1>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
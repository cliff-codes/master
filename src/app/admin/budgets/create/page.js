import React from 'react'

const page = () => {
  return (
    <div className='px-5'>
        <form className='mt-5 w-full max-w-md'>
            <h1 className='font-medium text-lg'>Create New Budget</h1>

            <div className='mt-6 w-full flex flex-col gap-3'>   
                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Financial Year:</label>
                    <input type="text" placeholder="2023" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-900" />
                </div>

                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Department:</label>
                    <select className="select select-bordered w-full max-w-xs focus:outline-none">
                        <option disabled selected>select department</option>
                        <option>Department A</option>
                        <option>Department B</option>
                    </select>
                </div>

                {/* project name */}
                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Project Name*:</label>
                    <input type="text" placeholder="enter project name" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-900" />
                </div>

                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Expenditure Description:</label>
                    <textarea className="textarea textarea-bordered flex-1" placeholder="Description" ></textarea>
                </div>

                {/* project code */}
                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Project Code:</label>
                    <input type="text" placeholder="code" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-900" />
                </div>

                {/* currency */}
                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Currency:</label>
                    <select className="select select-bordered w-full max-w-xs focus:outline-none">
                        <option disabled selected>select currency</option>
                        <option>Ghana Cedis(GHS)</option>
                        <option>Nigerian Naira</option>
                    </select>
                </div>

                {/* total amount */}
                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Total Amount:</label>
                    <input type="text" placeholder="0.00" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-900" />
                </div>

                {/*  total spent*/}
                <div className='w-full flex gap-5 place-items-center justify-between'>
                    <label className='font-medium'>Total Spent:</label>
                    <input type="text" placeholder="0.00" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-900" />
                </div>

                {/* submit button */}
                <div className='w-full mt-4'>
                    <button className='btn w-full btn-success text-slate-50'>Add Budget</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default page
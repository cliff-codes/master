import React from 'react'
import RequisitionItemsTable from '../tables/RequisitionItemsTable'

const RequisitionDetailsForm = () => {
  return (
    <div className='w-full '>
        <h1 className='bg-slate-700 text-slate-50 py-3 px-5 rounded-sm'>Requisition Details Form</h1>
        <div className='w-full'>
            <form className='px-3 mt-4 lg:flex gap-20'>
            {/* Breaking the form items into two sections */}
                <section className='flex flex-1 flex-col gap-4'>
                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Req No:</div>
                        <input type="text" placeholder="12321232" className="input input-bordered w-full max-w-sm" disabled = {true} />
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Requestor:</div>
                        <input type="text" placeholder="12321232" className="input input-bordered w-full max-w-sm" disabled = {true} />
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Financial Year</div>
                        <input type="text" placeholder="12321232" className="input input-bordered w-full max-w-sm" disabled = {true} />
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Requisition Type</div>
                        <select className='max-w-sm w-full rounded-md' disabled = {true}>
                            <option>Purchase</option>
                            <option>Contract</option>
                            <option>Service</option>
                            <option>Work</option>
                        </select>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Location</div>
                        <select className='max-w-sm w-full rounded-md' disabled = {true}>
                            <option>Head Office</option>
                        </select>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Currency</div>
                        <select className='max-w-sm w-full rounded-md' disabled = {true}>
                            <option>GHC</option>
                        </select>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Priority</div>
                        <select className='max-w-sm w-full rounded-md' disabled = {true}>
                            <option>Normal</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Budget Head</div>
                        <select className='max-w-sm w-full rounded-md' defaultValue={'Select'} disabled = {true}>
                            <option>Computer & Network Resources</option>
                            <option>Machinery & Equipment Maintenance</option>
                            <option>Rent & Rates - Office premises</option>
                            <option>Rent & service change for 3 PTSP existing offices</option>
                            <option>Service Change - Office premises</option>
                            <option>Telecommunication & Portal Service</option>
                            <option>Transportation, Travel</option>
                            <option>Warehouse for ...........</option>
                        </select>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Budget Id</div>
                        <input type="text" placeholder="budget id" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"  />
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Budget Total</div>
                        <input type="text" placeholder="0" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"  />
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Expenditure Type</div>
                        <input type="text" placeholder="0" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"  />
                    </div>
                </section>

                <section className='flex flex-col gap-4 mt-3 flex-1'>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Total Amount Spent</div>
                        <input type="text" placeholder="0" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"  />
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Available Balance</div>
                        <input type="number" placeholder="0" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"/>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>General Purspose of Requisition</div>
                        <textarea disabled = {true}  className="textarea textarea-bordered w-full max-w-sm h-32 focus:outline-none focus:border-slate-800" placeholder="Bio"></textarea>
                    </div>

                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Requisition Total</div>
                        <input type="text" placeholder="0" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"/>
                    </div>


                    <div className='w-full flex place-items-center gap-3 mt-1 '>
                        <div className='w-32'>Extra Budgetary</div>
                        <input type="text" placeholder="0" disabled = {true} className="input input-bordered w-full max-w-sm focus:outline-none focus:border-slate-800"/>
                    </div>

                </section>
            </form>

            {/* Add requisition Items form */}
            <form className='w-full px-3 mt-8 lg:flex gap-20'>
                <div className='w-full'>
                    <h1 className='font-medium'>Requisition Items</h1>
                    
                    <RequisitionItemsTable/>
            </div>
            </form>
        </div>
    </div>
  )
}

export default RequisitionDetailsForm
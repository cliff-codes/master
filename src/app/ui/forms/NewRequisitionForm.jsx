import React from 'react'

const NewRequisitionForm = () => {
  return (
    <div className='w-full '>
            <h1 className='bg-slate-700 text-slate-50 py-3 px-5 rounded-sm'>New Requisition Form</h1>
        <div className='w-full flex flex-col sm:flex-row place-items-center mt-4'>
            <form className='px-3 flex flex-col gap-4'>
                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Req No:</div>
                    <input type="text" placeholder="12321232" className="input input-bordered w-full max-w-xs" disabled = {true} />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Requestor:</div>
                    <input type="text" placeholder="12321232" className="input input-bordered w-full max-w-xs" disabled = {true} />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Financial Year</div>
                    <input type="text" placeholder="12321232" className="input input-bordered w-full max-w-xs" disabled = {true} />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Requisition Type</div>
                    <select className='max-w-xs w-full rounded-md'>
                        <option>Purchase</option>
                    </select>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Location</div>
                    <select className='max-w-xs w-full rounded-md'>
                        <option>Head Office</option>
                    </select>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Currency</div>
                    <select className='max-w-xs w-full rounded-md'>
                        <option>GHC</option>
                    </select>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Priority</div>
                    <select className='max-w-xs w-full rounded-md'>
                        <option>Normal</option>
                        <option>Urgent</option>
                    </select>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Budget Head</div>
                    <select className='max-w-xs w-full rounded-md' defaultValue={'Select'}>
                        <option>Normal</option>
                        <option>Urgent</option>
                    </select>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Budget Id</div>
                    <input type="text" placeholder="budget id" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"  />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Budget Total</div>
                    <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"  />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Expenditure Type</div>
                    <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"  />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Total Amount Spent</div>
                    <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"  />
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Available Balance</div>
                    <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"/>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>General Purspose of Requisition</div>
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Requisition Total</div>
                    <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"/>
                </div>


                <div className='flex place-items-center gap-3 mt-1'>
                    <div className='w-32'>Extra Budgetary</div>
                    <input type="text" placeholder="0" className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-800"/>
                </div>

                <div className='flex place-items-center gap-3 mt-1'>
                    <h1>Actions: </h1>
                    <div>
                        <div className='flex place-items-center gap-2'>
                            <input type='checkbox'/>
                            <h4>Save Requisition</h4>
                        </div>
                        <div className='flex place-items-center gap-2'>
                            <input type='checkbox'/>
                            <h4>Send for Approval</h4>
                        </div>
                    </div>
                </div>
            </form>

            {/* Add requisition Items form */}
            <form>
            
            </form>
        </div>
    </div>
  )
}

export default NewRequisitionForm
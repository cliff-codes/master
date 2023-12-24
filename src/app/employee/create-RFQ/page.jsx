import React from 'react'
import RfqItemsTableRow from '../../ui/tables/RfqItemsTableRow'

const CreateRFQPage = () => {
  return (
    <div className='w-full px-3 flex-1'>
        <h1 className='capitalize font-semibold pt-4'>Request for Quote</h1>

        {/* request for quote form */}
        <form className='mt-2 w-full max-w-lg'>
            <div className='flex gap-4'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Employee ID</span>
                    </div>
                    <input type="text" defaultValue={"EMP00001"} disabled = {true} placeholder='EMP00001' className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-600" />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Date Created</span>
                    </div>
                    <input type="text" defaultValue={"23/12/2023"} disabled = {true} placeholder='23/12/2023' className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-600" />
                </label>
            </div>

            <div className='flex gap-4'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Closing Date</span>
                    </div>
                    <input type="date" className="input w-full max-w-xs focus:outline-none bg-slate-100 focus:border-slate-600" />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">RFQ Number</span>
                    </div>
                    <input type="text" disabled = {true} className="input input-bordered w-full max-w-xs focus:outline-none focus:border-slate-600" />
                    <button type='button' className='btn btn-sm mt-1  font-normal bg-slate-600 text-slate-50 hover:bg-slate-800'>generate</button>
                </label>
            </div>

            <div className='w-full '>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">RFQ Description</span>
                    </div>
                    <textarea className="textarea bg-slate-100 focus:border-slate-600 focus:outline-none h-24 max-w-xl "></textarea>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">RFQ Condition(s)</span>
                    </div>
                    <textarea className="textarea bg-slate-100 focus:border-slate-600 focus:outline-none h-24 max-w-xl"></textarea>
                </label>
            </div>
            

            {/* describing items to procure */}
            <div className='w-full mt-14 '>
                <h1 className='font-semibold'>RFQ Item</h1>
                <div className='flex w-full gap-5'>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">RFQ Item Description</span>
                        </div>
                        <input type="text" className="input bg-slate-100 w-full max-w-xs focus:outline-none focus:border-slate-600" />
                        
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">RFQ Item Qty</span>
                        </div>
                        <input type="number" defaultValue={1} min={1} className="input  focus:outline-none  focus:border-slate-600 bg-slate-100" />
                    </label>
                </div>
                
                {/* adding created rfq item to already created rfq items */}
                <button className='btn w-full mt-2 btn-success text-slate-50'>add item</button>
            </div>
        </form>


        {/* table displaying items created in this quote */}
        <div className='mt-14'>
            <div className="overflow-x-auto">
                <h1 className = "font-semibold">RFQ Items</h1>
                <table className="table table-zebra-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>RFQ Item Id</th>
                        <th>RFQ_Number</th>
                        <th>RFQ Item Description</th>
                        <th>RFQ Item Qty</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        <RfqItemsTableRow/>
                        <RfqItemsTableRow/>
                        <RfqItemsTableRow/>
                        <RfqItemsTableRow/>
                        <RfqItemsTableRow/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default CreateRFQPage
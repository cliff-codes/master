import React from 'react'
import LinkSuppliersTable from '../../ui/tables/LinkSuppliersTable'

const LinkQuotesToSupplyPage = () => {
  return (
    <div className='px-3'>
      <div className='mt-3'>
        <div className='bg-slate-600 py-4 pl-3 text-slate-50 rounded-lg'>REQ Info</div>

        <div className='mt-3'>

          <div className='flex justify-between place-items-center'>
           <div className='flex gap-8 flex-wrap'>
            <div className=''>
                <h1 className='font-semibold'>REQ Number </h1>
                <div>
                  <input type="text" defaultValue={"RF0001"} disabled =  {true} className="input w-32 " />
                </div>
              </div>

              <div className='' >
                <h1 className='font-semibold'>REQ Date Created</h1>
                <div>
                <input type="text" defaultValue={"12/01/2023"} disabled =  {true} className="input w-32" />
                </div>
              </div>

              <div>
                <h1 className='font-semibold'>REQ Expiry Date</h1>
                <div>
                <input type="text" defaultValue={"12/01/2023"} disabled =  {true} className="input w-32" />
                </div>
              </div>
           </div>

            {/* <button className='btn btn-success text-slate-50'>Edit</button> */}
          </div>

         <div className='flex gap-8 mt-6'>
          <div className='flex-1' >
              <h1 className='font-semibold '>REQ Description</h1>
            
              <textarea style={{
                minHeight: "200px",
                // minWidth: "200px"
              }} className="textarea h-auto min-h-10 w-full" disabled = {true} defaultValue={"Silver macbook pro, 32gb ram, 1tb storage with m3 max chip"} placeholder="Bio"></textarea>
            </div>

            <div className='flex-1'>
              <h1 className='font-semibold'>REQ Condition</h1>
              <textarea style={{
                minHeight: "200px",
                
              }} className="textarea h-auto min-h-10 w-full" disabled = {true} defaultValue={"None"} placeholder="Bio"></textarea>
            </div>
         </div>

        </div>


      </div>
      <div className='mt-16'>
        <div className='bg-slate-600 py-4 pl-3 text-slate-50 rounded-lg mb-3'>Link Quote To Suppliers</div>
        <h1 className='font-semibold'>Service Type</h1>
        <select className='mt-1'>
          <option>Hardware</option>
          <option>Software</option>
        </select>

        <h1 className='font-semibold mt-4'>Available Suppliers</h1>
        <LinkSuppliersTable/>
      </div>
    </div>
  )
}

export default LinkQuotesToSupplyPage
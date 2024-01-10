
import Link from 'next/link'
import React from 'react'
import { MdDelete, MdEdit  } from 'react-icons/md'

const RequestDetailsPage = () => {
  
  return (
    <div className='flex justify-center'>
      <div className='px-4 mt-4 max-w-3xl'>
          <div className='flex justify-between'>
            <h1 className='font-medium text-xl'>Request Details</h1>

            <div className='flex gap-2'>
              <Link href={'/budget-owner/requests/{reqId}/edit'}>
                <button className='btn btn-sm'>
                  <MdEdit size={24}/>
                </button>
              </Link>

              

              {/* The button to open modal */}
              <label htmlFor="my_modal_6" className="btn btn-sm btn-error">
                  <MdDelete size={24} className='text-red-700'/>
              </label>

              {/* Portal to confirm delete action */}
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Are you sure you want to delete this request?</p>
                  <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn btn-error">Yes</label>
                    <label htmlFor="my_modal_6" className="btn">Cancel</label>
                  </div>
                </div>
              </div>
              {/*portal to confirm delete action ends here*/}
            </div>
          </div>


        <div className='mt-3 flex gap-20'>
          <div>
            <h1 className='uppercase'>Request Id</h1>
            
            <input type="text" disabled = {true} defaultValue = {'Req12312'} className="input w-full max-w-lg" />
          </div>
          
          <div>
            <h1 className='uppercase'>Created At</h1>
              
              <input type="text" disabled = {true} defaultValue = {'10/12/2024'} className="input w-full max-w-lg" />
          </div>
        </div>

        <div className='mt-3 flex flex-col gap-3'>
          <div>
            <h1 className='uppercase'>Description</h1>
            
            <textarea className="textarea max-w-xl w-full h-32" disabled = {true} defaultValue={"Bio"}></textarea>
          </div>
          
          <div>
            <h1 className='uppercase'>Condition(s)</h1>
            
            <textarea className="textarea max-w-xl w-full h-32" disabled = {true} defaultValue={"Conditions"}></textarea>
          </div>

          <div>
            <h1 className='uppercase'>Supporting Document(s)</h1>
            
            <div className='h-32 border border-dashed mb-2 flex justify-center place-items-center'>
                Empty
            </div>
          </div>
        </div>

        <button className='w-full btn btn-success text-slate-50'>Submit</button>
      </div>
    </div>
  )
}

export default RequestDetailsPage
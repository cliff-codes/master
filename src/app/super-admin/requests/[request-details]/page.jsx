
import Link from 'next/link'
import React from 'react'
import { MdDelete, MdEdit  } from 'react-icons/md'
import RequisitionDetailsForm from '../../../ui/forms/RequisitionDetailsForm'

const RequestDetailsPage = () => {
  
  return (
    <div className='flex justify-center'>
      <div className='px-4 mt-4 max-w-full'>
          <div className='flex justify-between'>
            <h1 className='font-medium text-xl'>Request Details</h1>

            <div className='flex gap-2'>
              <Link href={'/super-admin/requests/{reqId}/edit'}>
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


          <RequisitionDetailsForm/>
          </div>
    </div>
  )
}

export default RequestDetailsPage

import React from 'react'
import CreateRequestBtn from '../../ui/buttons/CreateRequestBtn'
import RequisitionRequestsTable from '../../ui/tables/RequisitionRequestsTable'

const RequetsPage = () => {
  return (
    <div className='px-4 mt-3'>
        <h1 className='font-medium text-lg sm:text-xl'>Requests</h1>
        <div className='flex justify-end'>
            <CreateRequestBtn route={'/budget-owner/create-RFQ'}/>
        </div>

        {/* Table listing all requisition requests */}
        <RequisitionRequestsTable/>
    </div>
  )
}

export default RequetsPage
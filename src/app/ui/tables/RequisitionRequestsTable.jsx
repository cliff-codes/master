import React from 'react'
import ViewRequestBtn from '../buttons/ViewRequestBtn'

const RequisitionRequestsTable = () => {
    //fetch requisition data from database
    const requistionData = []

  return (
    <div className="overflow-x-auto">
        <table className="table mt-2">
            {/* head */}
            <thead>
            <tr className='bg-slate-700 text-slate-50'>
                <th>Requisition_No</th>
                <th>Requester</th>
                <th>Request_Dept</th>
                <th>Request_Type</th>
                <th>Request_Date</th>
                <th>Requisition_Total</th>
                <th>Currency</th>
                <th>Ex_Budget</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr className="hover">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>HR and Admin</td>
                <td>Purchase</td>
                <td>10/12/2023 9:13:11AM</td>
                <td>328,000</td>
                <td>GHC</td>
                <td>No</td>
                <td>Open</td>
                <td>
                    <ViewRequestBtn route={'/budget-owner/requests/{1234}'}/>
                </td>
            </tr>
            
            </tbody>
        </table>
    </div>
  )
}

export default RequisitionRequestsTable
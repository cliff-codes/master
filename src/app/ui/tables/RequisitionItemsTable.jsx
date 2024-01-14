import React from 'react'
import { MdDelete } from 'react-icons/md'

const RequisitionItemsTable = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table mt-2">
            {/* head */}
            <thead>
            <tr className='bg-slate-700 text-slate-50'>
                <th>Id</th>
                <th>Req_No</th>
                <th>Item_Desc</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
                
                
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr className="hover">
                <th>101</th>
                <td>9181</td>
                <td>Hp laptop 1tb, 8gb ram</td>
                <td>2</td>
                <td>10000</td>
                <td>4000</td>
                
            </tr>
            
            </tbody>
        </table>
    </div>
  )
}

export default RequisitionItemsTable
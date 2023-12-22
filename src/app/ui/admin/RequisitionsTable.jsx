import React from 'react'
import RequistionTableRow from './RequistionTableRow'

const RequisitionsTable = () => {
  return (
    <div className="overflow-x-auto bg-slate-50 rounded-sm">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>StaffId</th>
            <th>Department</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {/* row 1 */}
            <RequistionTableRow/>
            <RequistionTableRow/>
            <RequistionTableRow/>
            <RequistionTableRow/>
        </tbody>
    </table>
</div>
  )
}

export default RequisitionsTable
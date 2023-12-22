import React from 'react'
import AlertTableRow from './AlertTableRow'

const AlertsTable = () => {
  return (
    <div className="overflow-x-auto bg-slate-50 rounded-sm">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Request Type</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
                <AlertTableRow/>
                <AlertTableRow/>
                <AlertTableRow/>
                <AlertTableRow/>
            </tbody>
        </table>
    </div>
  )
}

export default AlertsTable
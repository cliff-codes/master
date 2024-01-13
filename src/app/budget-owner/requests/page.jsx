
import React from 'react'
import CreateRequestBtn from '../../ui/buttons/CreateRequestBtn'
import ViewRequestBtn from '../../ui/buttons/ViewRequestBtn'

const RequetsPage = () => {
  return (
    <div className='px-4 mt-3'>
        <h1 className='font-medium text-lg sm:text-xl'>Requests</h1>
        <div className='flex justify-end'>
            <CreateRequestBtn route={'/budget-owner/create-RFQ'}/>
        </div>

        <div className="overflow-x-auto">
            <table className="table mt-2">
                {/* head */}
                <thead>
                <tr className='bg-slate-700 text-slate-50'>
                    <th>Request_Id</th>
                    <th>owner</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="hover">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>
                       <ViewRequestBtn route={'/budget-owner/requests/{1234}'}/>
                    </td>
                </tr>
                {/* row 2 */}
                <tr className='hover'>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>
                        <ViewRequestBtn route={'/budget-owner/requests/{1234}'}/>
                    </td>
                </tr>
                {/* row 3 */}
                <tr className='hover'>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>
                        <ViewRequestBtn route={'/budget-owner/requests/{1234}'}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RequetsPage
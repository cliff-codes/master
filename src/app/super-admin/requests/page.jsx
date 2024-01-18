import Link from 'next/link'
import React from 'react'

const RequestsPageForSuperAdmin = () => {
    return (
        <div className='px-4 mt-3'>
            <h1 className='font-medium text-lg sm:text-xl'>Requests</h1>

            <div className='flex justify-end'>
                <Link href={'/super-admin/requests/create-request'}>
                    <button className='btn btn-success b text-slate-50 '>create request</button>
                </Link>
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
                           <Link href={'/super-admin/requests/{1234}'}> 
                            <button className='btn btn-sm btn-success text-slate-50'>view</button>
                           </Link>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr className='hover'>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>
                            <Link href={'/super-admin/requests/{1234}'}> 
                            <button className='btn btn-sm btn-success text-slate-50'>view</button>
                           </Link>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr className='hover'>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>
                            <Link href={'/super-admin/requests/{1234}'}> 
                            <button className='btn btn-sm btn-success text-slate-50'>view</button>
                           </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default RequestsPageForSuperAdmin
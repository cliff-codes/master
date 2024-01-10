import React from 'react'
import Link from 'next/link'

const ProcurementOrdersPage = () => {
    return (
        <div className='px-2'>
            <h1 className='font-medium mb-4'>Orders</h1>
    
            <div className="overflow-x-auto">
                <table className="table table-zebra border rounded">
                    {/* head */}
                    <thead>
                    <tr className='bg-slate-700 text-slate-50'>
                        <th>Order_Id</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>order_QTY</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>123</td>
                        <td>
                            <Link href={'/procurement-officer/link-requisition-to-service'}>
                                <button className='btn btn-success btn-sm text-slate-50'>view</button>
                            </Link>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>34</td>
                        <td>
                            <Link href={'/procurement-officer/link-requisition-to-service'}>
                                <button className='btn btn-success btn-sm text-slate-50'>view</button>
                            </Link>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>1254</td>
                        <td>
                            <Link href={'/procurement-officer/link-requisition-to-service'}>
                                <button className='btn btn-success btn-sm text-slate-50'>view</button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default ProcurementOrdersPage
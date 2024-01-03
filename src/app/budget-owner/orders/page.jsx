import React from 'react'
import Link from 'next/link'

const OrdersPage = () => {
  return (
    <div className='px-4'>
        <h1 className='font-medium'>Orders</h1>

        <div className="overflow-x-auto mt-2">
            <table className="table hover ">
                {/* head */}
                <thead>
                <tr className='bg-slate-700 text-slate-50'>
                    <th>Order_Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */} 
                <tr className="hover">
                    <th>1</th>
                    <td>vision studios</td>
                    <td>two black hp laptops </td>
                    <td>pending</td>
                    <td>
                        <Link href={'/'}>
                            <button className='btn btn-sm btn-success text-slate-50'>view</button>
                        </Link>
                    </td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>2</th>
                    <td>General Motors</td>
                    <td>two black hp laptops</td>
                    <td>pending</td>
                    <td>
                        <Link href={'/'}>
                            <button className='btn btn-sm btn-success text-slate-50'>view</button>
                        </Link>
                    </td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                    <th>3</th>
                    <td>J-Wise Enterprise</td>
                    <td>two black hp laptops</td>
                    <td>pending</td>
                    <td>
                        <Link href={'/add-supplier'}>
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

export default OrdersPage
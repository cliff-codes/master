import React from 'react'
import Link from 'next/link'

const SuppliersPage = () => {
  return (
    <div className='px-4 mt-2'>
        <h1 className='font-medium'>Suppliers Lists</h1>

        <div className='w-full flex justify-end'>
            <button className='btn btn-sm'>Add Supplier</button>
        </div>
        <div className="overflow-x-auto mt-2">
            <table className="table hover ">
                {/* head */}
                <thead>
                <tr className='bg-slate-700 text-slate-50'>
                    <th></th>
                    <th>Company Name</th>
                    <th>Contact Email</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="hover">
                    <th>1</th>
                    <td>vision studios</td>
                    <td>vision@gmail.com</td>
                    <td>Kumasi</td>
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
                    <td>gm@gmail.com</td>
                    <td>Germany</td>
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
                    <td>jwise@gmail.com</td>
                    <td>Accra</td>
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

export default SuppliersPage
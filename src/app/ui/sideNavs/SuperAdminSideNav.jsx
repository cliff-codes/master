import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md'
import SideNavLink from '../dashbaord/SideNavLink'
import { TiHome } from 'react-icons/ti'
import { AiFillHome } from 'react-icons/ai'
import Link from 'next/link'
import { TbDiscountCheckFilled } from 'react-icons/tb'
import { FaLuggageCart } from 'react-icons/fa'
import { FaPeopleCarryBox, FaUsersGear } from 'react-icons/fa6'
import { IoMdAnalytics } from 'react-icons/io'
import { GiFiles } from 'react-icons/gi'

const SuperAdminSideNav = () => {
  return (
    <div className=' rounded-l-none rounded-r-lg  pt-3 px-1  rounded-br-none bg-slate-800 sticky top-0'>
        <div className='w-full text-slate-50'>
            <div className='w-full flex place-items-center'>
                <MdAdminPanelSettings size={30} />
                <h1 className='text-2xl font-bold  p-4 hidden sm:block transition-all 200 ease-linear'>Super Admin</h1>
            </div>

            <div style={{height: "1px"}} className='w-full  rounded-lg bg-slate-300 mb-4'></div>
        </div>

       
        {/* side navigation for admin Dashboard */}
        <ul className=" menu p-4 w-80 min-h-full bg-slate-800 flex flex-col gap-3">
        {/* Sidebar content here */}
        <li>
            <div className='flex place-items-center text-slate-400 py-4 hover:bg-slate-600 hover:text-slate-50'>
              <AiFillHome size={24}/>
              <span>
                <Link href={'/admin'}>Home</Link>
              </span>
            </div>
        </li>
       
        <li className='text-slate-400'>
          <details close>
            <summary className='hover:bg-slate-600 hover:text-slate-50'>
              <div className='flex place-items-center py-2 gap-2'>
                <TbDiscountCheckFilled size={24}/>
                <span>Approvals</span>
              </div>
              
            </summary>
            <ul>
              <Link href='/super-admin/approvals/admin'>
                <li className='hover:bg-slate-600 hover:text-slate-50 py-2 px-1 rounded-md'>Admin Approvals</li>
              </Link>

              <Link href={'/super-admin/approvals/procurement-office'}>
                <li className='hover:bg-slate-600 hover:text-slate-50 py-2 px-1 rounded-md'>Procurement Approvals</li>
              </Link>
            </ul>
          </details>
        </li>

        <li className='text-slate-400'>
          <details close>
            <summary className='hover:bg-slate-600 hover:text-slate-50'>
              <div className='flex place-items-center py-2 gap-2'>
                <FaLuggageCart size={24}/>
                <span>Orders</span>
              </div>
              
            </summary>
            <ul>
              <Link href={'/super-admin/orders/budget-owner'}>
                <li className='hover:bg-slate-600 hover:text-slate-50 py-2 px-1   rounded-md'>Budget-Owner Orders</li>
              </Link>

              <Link href={'/super-admin/orders/procurement-office'}>
                <li className='hover:bg-slate-600 hover:text-slate-50 py-2 px-1   rounded-md'>Procurement Orders</li>
              </Link>
            </ul>
          </details>
        </li>

        <li className='text-slate-400'>
          <details close>
            <summary className='hover:bg-slate-600 hover:text-slate-50'>
              <div className='flex place-items-center py-2 gap-2'>
                <FaPeopleCarryBox size={24}/>
                <span>Suppliers</span>
              </div>
            </summary>
            <ul>
              <Link href={'/super-admin/suppliers/budget-owner'}>
                  <li className='hover:bg-slate-600 hover:text-slate-50 py-2 px-1 rounded-md'>Budget-Owner Suppliers</li>
              </Link>

              <Link href={'/super-admin/suppliers/procurement-office'}>
                <li className='hover:bg-slate-600 hover:text-slate-50 py-2 px-1 rounded-md'>Procurement Suppliers</li>
              </Link>
            </ul>
          </details>
        </li>

        <li>
            <Link href={'/super-admin/requests'}>
              <div className='flex place-items-center text-slate-400 py-4 hover:bg-slate-600 hover:text-slate-50'>
                <GiFiles size={24}/>
                <span>
                  Requests
                </span>
              </div>
            </Link>
        </li>


        <li>
            <div className='flex place-items-center text-slate-400 py-4 hover:bg-slate-600 hover:text-slate-50'>
                <IoMdAnalytics size={24}/>
                <span>
                  <Link href={'/super-admin/report-and-analytics'}>Report & Analytics</Link>
                </span>
              </div>
        </li>

        <li>
            <div className='flex place-items-center text-slate-400 py-4 hover:bg-slate-600 hover:text-slate-50'>
              <FaUsersGear size={24}/>
              <span>
                <Link href={'/super-admin/user-management'}>User Management</Link>
              </span>
            </div>
        </li>
      </ul>
    </div> 
  )
}

export default SuperAdminSideNav
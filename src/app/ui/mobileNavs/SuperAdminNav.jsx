import React from 'react'
import SideNavLink from '../dashbaord/SideNavLink'
import {IoMdAnalytics, IoMdNotifications} from 'react-icons/io'
import { AiFillHome } from 'react-icons/ai'
import { TbDiscountCheckFilled } from 'react-icons/tb'
import { FaUsersGear, FaPeopleCarryBox} from 'react-icons/fa6'
import { FaLuggageCart } from 'react-icons/fa'
import Link from 'next/link'


const SuperAdminNav = () => {
  return (
    <div className="drawer z-50 ">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full navbar border-b-2">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="flex-1 px-2 mx-2 uppercase font-semibold">Super-Admin</div>

        {/* notifications */}
        <div>
            <button className='h-9 hover:bg-slate-200 px-2 rounded-full transition-all 50 ease-linear'>
                <IoMdNotifications size={20}/>
            </button>
            <button className='btn'>
                Logout
            </button>
        </div>
      </div>

    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
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
              <li className='hover:bg-slate-600 hover:text-slate-50 py-1 rounded-md'><a>Admin Approvals</a></li>

              <li className='hover:bg-slate-600 hover:text-slate-50 py-1 rounded-md'><a>Procurement Approvals</a></li>
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
              <li className='hover:bg-slate-600 hover:text-slate-50 py-1 rounded-md'><a>Budget-Owner Orders</a></li>

              <li className='hover:bg-slate-600 hover:text-slate-50 py-1 rounded-md'><a>Procurement Orders</a></li>
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
              <li className='hover:bg-slate-600 hover:text-slate-50 py-1 rounded-md'><a>Budget-Owner Suppliers</a></li>

              <li className='hover:bg-slate-600 hover:text-slate-50 py-1 rounded-md'><a>Procurement Suppliers</a></li>
            </ul>
          </details>
        </li>

        <li>
            <div className='flex place-items-center text-slate-400 py-4 hover:bg-slate-600 hover:text-slate-50'>
              <IoMdAnalytics size={24}/>
              <span>
                <Link href={'/admin/report-analytics'}>Report & Analytics</Link>
              </span>
            </div>
        </li>

        <li>
            <div className='flex place-items-center text-slate-400 py-4 hover:bg-slate-600 hover:text-slate-50'>
              <FaUsersGear size={24}/>
              <span>
                <Link href={'/admin/user-management'}>User Management</Link>
              </span>
            </div>
        </li>
      </ul>
    </div>
  </div>
  )
}
export default SuperAdminNav
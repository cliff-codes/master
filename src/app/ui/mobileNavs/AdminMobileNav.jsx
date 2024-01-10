'use client'
import React from 'react'
import {IoMdNotifications, IoMdAnalytics} from 'react-icons/io'
import SideNavLink from '../../ui/dashbaord/SideNavLink'
import {AiFillHome} from 'react-icons/ai'
import { TbDiscountCheckFilled } from 'react-icons/tb'
import { FaUsersGear } from 'react-icons/fa6'

function closeDrawer(){
    const checkbox = document.getElementById("my-drawer-3")
    if(checkbox){
      checkbox.checked = false
    }
}

const AdminMobileNav = () => {
  return (
    <div className="drawer z-50 ">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full navbar border-b-2">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="flex-1 px-2 mx-2 uppercase font-semibold">Admin</div>

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
      <ul className=" menu p-4 w-80 min-h-full bg-slate-800">
        {/* Sidebar content here */}
        <li onClick={closeDrawer}>
            <SideNavLink icon={<AiFillHome size={24}/>} name={'Home'} route={'/admin'} />
        </li>
        <li onClick={closeDrawer}>
            <SideNavLink icon={<TbDiscountCheckFilled size={24}/>} name={'Approvals'} route={'/admin/approvals'} />
        </li>
        <li onClick={closeDrawer}>
            <SideNavLink icon={<IoMdAnalytics size={24}/>} name={'Report & Analytics'} route={'/admin/report-analytics'} />
        </li>

        <li onClick={closeDrawer}>
            <SideNavLink icon={<FaUsersGear/>} name={"User Management"} route={'/admin/user-management'}/>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default AdminMobileNav




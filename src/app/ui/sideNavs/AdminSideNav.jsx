import React from 'react'
import { RiAdminFill } from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import { TbDiscountCheckFilled } from "react-icons/tb";
import { FaUserGear } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import SideNavLink from '../dashbaord/SideNavLink'
import { MdLogout } from 'react-icons/md';

const AdminSideNav = () => {
  return (
    <div className='w-60 h-full'>
       <div className='flex flex-col justify-between h-full'>
            <div>
                <div className='flex mt-3 place-items-center gap-2 border-b-2 pb-3'>
                    <RiAdminFill size={50} className='text-slate-50'/>
                    <h1 className='text-slate-50 text-lg'>Administrator</h1>
                </div>

                {/* navigation links */}

                <div className='flex flex-col gap-2 mt-3'>
                    <SideNavLink icon={<AiFillHome size={24}/>} name={'Home'} route={'/admin'} />
                    <SideNavLink icon={<TbDiscountCheckFilled size={24}/>} name={'Approvals'} route={'/admin/approvals'} />
                    <SideNavLink icon={<IoMdAnalytics size={24}/>} name={'Report & Analytics'} route={'/admin/report-analytics'} />
                    <SideNavLink icon={<FaUserGear size={24}/>} name={'User Management'} route={'/admin/user-management'} />
                </div>
            </div>

            <div className = "text-xl w-ful hover:bg-slate-600">
                <SideNavLink icon={< MdLogout size={40}/>} name={"Logout"} route={'/login'}/>
            </div>
       </div>
    </div>
  )
}

export default AdminSideNav
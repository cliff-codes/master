'use client'
import React, {useState} from 'react'
import SideNavLink from '../dashbaord/SideNavLink'
import {MdAdminPanelSettings, MdAccountBalance} from 'react-icons/md'
import {FaUserCheck, FaLuggageCart} from 'react-icons/fa'
import { FaPeopleCarryBox } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { TbDiscountCheckFilled} from "react-icons/tb"
import { DiGoogleAnalytics } from "react-icons/di";
import { RiUserSettingsFill } from "react-icons/ri";
import {MdOutlineLogout} from 'react-icons/md'
import Link from 'next/link'



const ProcurementSideNav = () => {
  //checking from the login status to check the user type
  const [isAdmin, setIsAdmin] = useState(true)
    
  return (
    <div className='sm:w-72   rounded-l-none rounded-r-lg  pt-3 px-1  rounded-br-none bg-slate-800 sticky top-0'>

        <div className='w-full text-slate-50'>
            <div className='w-full flex place-items-center'>
                <MdAdminPanelSettings size={30} />
                <h1 className='text-2xl font-bold  p-4 hidden sm:block transition-all 200 ease-linear'>Procurement Officer</h1>
            </div>

            <div style={{height: "1px"}} className='w-full  rounded-lg bg-slate-300 mb-4'></div>
        </div>

        {
          isAdmin ? <div  className='w-full flex flex-col gap-4 '>
            {/* side navigation for admin Dashboard */}
            <SideNavLink route={'/procurement-officer'} icon={<TiHome size={24}/>} name={"Home"} />

            <SideNavLink route={'/procurement-officer/approvals'} icon={<TbDiscountCheckFilled size={24}/>} name={"Approvals"} />

            <SideNavLink route={'/procurement-officer/orders'} icon={<FaLuggageCart size={24}/>} name={"Orders"} />

            <SideNavLink route={'/procurement-officer/suppliers'} icon={<FaPeopleCarryBox size={24}/>} name={"Suppliers"} />
           
            <SideNavLink route={'/login'} icon={<MdOutlineLogout size={24}/>} name={"Logout"} />
          </div> : <div className='w-full flex flex-col gap-4 '>
            {/* side navigation links for Staff Client*/} 
            <SideNavLink name={'Dashboard'} route = {'/dashboard'} icon={<TiHome size={24} className='xss:text-xs' />}/>

            <SideNavLink name={'Approvals'} route={'/dashboard/approvals'} icon={<FaUserCheck size={24}/>}/>

            <SideNavLink name={'Analytics&Reports'} route={'/dashboard/analytics&reports'} icon={<DiGoogleAnalytics size={24}/>}/>

            <SideNavLink name={'User-Management'} route={'/dashboard/user-management'} icon={<RiUserSettingsFill size={24}/>}/>
          </div>
        }
    </div>
  )
}

export default ProcurementSideNav
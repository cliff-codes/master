'use client'
import React, {useState} from 'react'
import SideNavLink from '../dashbaord/SideNavLink'
import {MdAdminPanelSettings, MdAccountBalance} from 'react-icons/md'
import {FaUserCheck} from 'react-icons/fa'
import { TiHome } from "react-icons/ti";
import {TbShoppingCartCog} from "react-icons/tb"
import { DiGoogleAnalytics } from "react-icons/di";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
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
            <SideNavLink route={'/employee'} icon={<TiHome size={24}/>} name={"Home"} />
           
           
            <details close className='text-slate-400'>
              <summary className='hover:bg-slate-600 hover:text-slate-50 py-3 flex place-items-center pl-2 gap-2'> <span><TbShoppingCartCog size={24}/></span> Procurements <span><IoIosArrowDown  className='relative left-3'/></span></summary>
              <ul className='pl-3 w-full'>  
                <li  className='hover:bg-slate-600 hover:text-slate-50 py-3 pl-2 rounded-md w-full'><Link href={'/employee/create-RFQ'} >Create request for quotation</Link></li>
                <li  className='hover:bg-slate-600 hover:text-slate-50 pl-2 py-3 rounded-md'><Link href={'/employee/rfqs'}>Process RFQ</Link></li>
              </ul>
            </details>
           
            <details close className='text-slate-400'>
              <summary className='hover:bg-slate-600 hover:text-slate-50 py-3 flex place-items-center pl-2 gap-2'> <span><FaMoneyCheckAlt size={24}/></span> Accounts Payable <IoIosArrowDown  className='relative left-3'/></summary>
              <ul className=''> 
                <li  className='hover:bg-slate-600 hover:text-slate-50 py-3 pl-3 rounded-md'><Link href={'/create-rfq'}>Create request for quotation</Link></li>
                <li   className='hover:bg-slate-600 hover:text-slate-50 py-3 pl-3 rounded-md'><Link href={'/create-rfq'}>Process RFQ</Link></li>
              </ul>
            </details>
           
            <SideNavLink route={'/'} icon={<MdAccountBalance size={24}/>} name={"Budget Maintenance "} />
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
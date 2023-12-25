'use client'
import React, {useState} from 'react'
import { usePathname } from 'next/navigation'
import SideNavLink from '../dashbaord/SideNavLink'
import { TiHome } from 'react-icons/ti'
import { FaMoneyCheckAlt, FaUserCheck } from 'react-icons/fa'
import { DiGoogleAnalytics } from 'react-icons/di'
import { RiFileAddFill, RiUserSettingsFill } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { FileSignature, LogOut } from 'lucide-react'
import { TbShoppingCartCog } from "react-icons/tb";
import {MdAccountBalance, MdLogout} from "react-icons/md"
import { GrUserAdmin } from "react-icons/gr"
import Link from 'next/link'




const MobileNav = () => {
  const [isAdmin, setIsAdmin] = useState(true)

  // fetch user login status from dB
  const [longinStatus, setLoginStatus] = useState('Employee')
  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()

  //close drawer
  function closeDrawer(){
    const checkbox = document.getElementById("my-drawer-3")
    if(checkbox){
      checkbox.checked = false
    }
  }


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
        <div className="flex-1 px-2 mx-2 uppercase font-semibold">{currentPath}</div>

        {/* notifications */}
        <div>
            <button className='h-9 hover:bg-slate-200 px-2 rounded-full transition-all 50 ease-linear'>
                <IoMdNotifications size={20}/>
                </button>
        </div>
      </div>

    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className=" menu p-4 w-80 min-h-full bg-slate-800">
        {/* Sidebar content here */}
        {longinStatus === "Employee" ? <>
          <li onClick={closeDrawer}><SideNavLink route={'/employee'} icon={<TiHome size={24}/>} name={"Home"} /></li>

            <li className='pl-2'>
              <details close className='text-slate-400'>
                <summary className='hover:bg-slate-600 hover:text-slate-50 py-3'> <span><TbShoppingCartCog size={24}/></span> Procurements</summary>
                <ul> 
                  <li onClick={closeDrawer} className='hover:bg-slate-600 hover:text-slate-50 py-3 rounded-md'><Link href={'/employee/create-RFQ'} >Create request for quotation</Link></li>
                  <li onClick={closeDrawer} className='hover:bg-slate-600 hover:text-slate-50 py-3 rounded-md'><Link href={'/employee/rfqs'}>Process RFQ</Link></li>
                </ul>
              </details>
            </li>

            <li className='pl-2 mt-1'>
              <details close className='text-slate-400'>
                <summary className='hover:bg-slate-600 hover:text-slate-50 py-3'> <span><FaMoneyCheckAlt size={24}/></span> Accounts Payable</summary>
                <ul> 
                  <li onClick={closeDrawer} className='hover:bg-slate-600 hover:text-slate-50 py-3 rounded-md'><Link href={'/create-rfq'}>Create request for quotation</Link></li>
                  <li onClick={closeDrawer}  className='hover:bg-slate-600 hover:text-slate-50 py-3 rounded-md'><Link href={'/create-rfq'}>Process RFQ</Link></li>
                </ul>
              </details>
            </li>

          
            <li onClick={closeDrawer}><SideNavLink route={'/'} icon={<MdAccountBalance size={24}/>} name={"Budget Maintenance "} /></li>
            <li onClick={closeDrawer}><SideNavLink route={'/'} icon={<GrUserAdmin size={24}/>} name={"System Administrator "} /></li>
            <li>
              <SideNavLink name={"Logout"} route={'/login'} icon={<MdLogout size={24}/>}/>
            </li>

        </>: <>
        {/* admin user nav links */}
        <li className='' onClick={closeDrawer}>
          <SideNavLink name={'Dashboard'} route = {'/dashboard'} icon={<TiHome size={24} className='xss:text-xs' />}/>
        </li>

        <li  onClick={closeDrawer}>
          <SideNavLink name={'Approvals'} route={'/dashboard/approvals'} icon={<FaUserCheck size={24}/>}/>
        </li>


        <li  onClick={closeDrawer}>
          <SideNavLink name={'Analytics&Reports'} route={'/dashboard/analytics&reports'} icon={<DiGoogleAnalytics size={24}/>}/>
        </li>

        <li  onClick={closeDrawer}>
          <SideNavLink name={'User-Management'} route={'/dashboard/user-management'} icon={<RiUserSettingsFill size={24}/>}/>
        </li>
        </>
        }
      </ul>
    </div>
  </div>
  )
}

export default MobileNav
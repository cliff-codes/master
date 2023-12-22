'use client'
import React, {useState} from 'react'
import { usePathname } from 'next/navigation'
import SideNavLink from '../dashbaord/SideNavLink'
import { TiHome } from 'react-icons/ti'
import { FaMoneyCheckAlt, FaUserCheck } from 'react-icons/fa'
import { DiGoogleAnalytics } from 'react-icons/di'
import { RiFileAddFill, RiUserSettingsFill } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { FileSignature } from 'lucide-react'


const MobileNav = () => {
  const [isAdmin, setIsAdmin] = useState(true)
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
        {isAdmin ? <>
          <li onClick={closeDrawer}><SideNavLink route={'/'} icon={<RiFileAddFill size={24}/>} name={"New Requisition"} /></li>
            <li onClick={closeDrawer}><SideNavLink route={'/'} icon={<FileSignature size={24}/>} name={"Manage Requistion"} /></li>
            <li onClick={closeDrawer}><SideNavLink route={'/'} icon={<FaMoneyCheckAlt size={24}/>} name={"Budget"} /></li>
            <li onClick={closeDrawer}><SideNavLink route={'/'} icon={<FaUserCheck size={24}/>} name={"Approved Vendors"} /></li>
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
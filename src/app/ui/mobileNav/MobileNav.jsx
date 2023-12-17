'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import SideNavLink from '../dashbaord/SideNavLink'
import { TiHome } from 'react-icons/ti'
import { FaUserCheck } from 'react-icons/fa'
import { DiGoogleAnalytics } from 'react-icons/di'
import { RiUserSettingsFill } from 'react-icons/ri'

const MobileNav = () => {

  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()


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
      </div>

    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className=" menu p-4 w-80 min-h-full bg-slate-800">
        {/* Sidebar content here */}
        
        <li className=''>
          <SideNavLink name={'Dashboard'} route = {'/dashboard'} icon={<TiHome size={24} className='xss:text-xs' />}/>
        </li>

        <li>
          <SideNavLink name={'Approvals'} route={'/dashboard/approvals'} icon={<FaUserCheck size={24}/>}/>
        </li>


        <li>
          <SideNavLink name={'Analytics'} route={'/dashboard/analytics'} icon={<DiGoogleAnalytics size={24}/>}/>
        </li>

        <li>
          <SideNavLink name={'User-Management'} route={'/dashboard/user-management'} icon={<RiUserSettingsFill size={24}/>}/>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default MobileNav

import React from 'react'
import SideNavLink from './SideNavLink'
import {MdAdminPanelSettings} from 'react-icons/md'
import {FaUserCheck} from 'react-icons/fa'
import { TiHome } from "react-icons/ti";
import { DiGoogleAnalytics } from "react-icons/di";
import { RiUserSettingsFill } from "react-icons/ri";


const SideNav = () => {
    
  return (
    <div className='sm:w-72   rounded-l-none rounded-r-lg  pt-3 px-1  rounded-br-none bg-slate-800 sticky top-0'>

        <div className='w-full text-slate-50'>
            <div className='w-full flex place-items-center'>
                <MdAdminPanelSettings size={30} />
                <h1 className='text-2xl font-bold  p-4 hidden sm:block transition-all 200 ease-linear'>Admin</h1>
            </div>

            <div style={{height: "1px"}} className='w-full  rounded-lg bg-slate-300 mb-4'></div>
        </div>

        {/* side navigation links */} 
         <div className='w-full flex flex-col gap-4 '>
            <SideNavLink name={'Dashboard'} route = {'/dashboard'} icon={<TiHome size={24} className='xss:text-xs' />}/>

            <SideNavLink name={'Approvals'} route={'/dashboard/approvals'} icon={<FaUserCheck size={24}/>}/>

            <SideNavLink name={'Analytics&Reports'} route={'/dashboard/analytics&reports'} icon={<DiGoogleAnalytics size={24}/>}/>

            <SideNavLink name={'User-Management'} route={'/dashboard/user-management'} icon={<RiUserSettingsFill size={24}/>}/>
        </div>
    </div>
  )
}

export default SideNav

import React from 'react'
import SideNavLink from './SideNavLink'
import {MdSpaceDashboard, MdManageAccounts, MdAnalytics, MdAdminPanelSettings} from 'react-icons/md'
import {FaUserCheck} from 'react-icons/fa'
import { TiHome } from "react-icons/ti";
import { DiGoogleAnalytics } from "react-icons/di";
import { RiUserSettingsFill } from "react-icons/ri";


const SideNav = () => {
    
  return (
    <div className='min-h-screen w-11 sm:w-72 transition-all 200 ease-in  rounded-lg  pt-3 px-1 shadow-lg'>

        <div className='w-full'>
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

            <SideNavLink name={'Analytics'} route={'/dashboard/analytics'} icon={<DiGoogleAnalytics size={24}/>}/>

            <SideNavLink name={'User-Management'} route={'/dashboard/user-management'} icon={<RiUserSettingsFill size={24}/>}/>
        </div>
    </div>
  )
}

export default SideNav
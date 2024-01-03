'use client'
import React, {useState} from 'react'
import { usePathname } from 'next/navigation'
import SideNavLink from '../dashbaord/SideNavLink'
import { TiHome } from 'react-icons/ti'
import { FaLuggageCart } from 'react-icons/fa'

import { IoMdNotifications } from 'react-icons/io'

import { TbDiscountCheckFilled } from "react-icons/tb";
import { MdOutlineLogout} from "react-icons/md"
import { FaPeopleCarryBox } from 'react-icons/fa6'




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
        <li onClick={closeDrawer}>
          <SideNavLink route={'/employee'} icon={<TiHome size={24}/>} name={"Home"} />
        </li>
        <li onClick={closeDrawer}>
          <SideNavLink route={'/employee/approvals'} icon={<TbDiscountCheckFilled size={24}/>} name={"Approvals"} />
        </li>
        <li onClick={closeDrawer}>
          <SideNavLink route={'/employee/orders'} icon={<FaLuggageCart size={24}/>} name={"Orders"} />
        </li>
        <li onClick={closeDrawer}>
          <SideNavLink route={'/employee/suppliers'} icon={<FaPeopleCarryBox size={24}/>} name={"Suppliers"} />
        </li>
        <li onClick={closeDrawer}>
          <SideNavLink route={'/login'} icon={<MdOutlineLogout size={24}/>} name={"Logout"} />
        </li>
      </ul>
    </div>
  </div>
  )
}

export default MobileNav
import React from 'react'
import SideNavLink from '../dashbaord/SideNavLink'
import { TiHome } from 'react-icons/ti'
import { GiFiles } from 'react-icons/gi'
import { FaLuggageCart } from 'react-icons/fa'
import { FaPeopleCarryBox } from 'react-icons/fa6'
import { MdOutlineLogout } from 'react-icons/md'
import {BiSolidShoppingBags} from 'react-icons/bi'

const BudgetOwnerSideNav = () => {
  return (
    <div>
      <div className='w-full flex place-items-center'>
                <BiSolidShoppingBags size={30} className='text-slate-50 ml-8'/>
                <h1 className='text-2xl text-slate-50 font-bold  p-4 hidden sm:block transition-all 200 ease-linear'>Budget Owner</h1>
            </div>
      <ul className=" menu p-4 w-80 min-h-full bg-slate-800">
        <li>
          <SideNavLink route={'/budget-owner'} icon={<TiHome size={24}/>} name={"Home"} />
        </li>
        <li>
          <SideNavLink route={'/budget-owner/requests'} icon={<GiFiles size={24}/>} name={"Requests"} />
        </li>
        <li>
          <SideNavLink route={'/budget-owner/orders'} icon={<FaLuggageCart size={24}/>} name={"Orders"} />
        </li>
        <li>
          <SideNavLink route={'/budget-owner/suppliers'} icon={<FaPeopleCarryBox size={24}/>} name={"Supplier"} />
        </li>
        <li>
          <SideNavLink route={'/login'} icon={<MdOutlineLogout size={24}/>} name={"Logout"} />
        </li>
      </ul>
    </div>
  )
}

export default BudgetOwnerSideNav
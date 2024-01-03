import BudgetOwnerMobileNav from '../ui/mobileNavs/BudgetOwnerPageMobileNav'

export default function BudgetOwnerPageLayout({ children }) {
    return (
        <div className="w-full  overflow-y-auto  flex flex-col mb-8">
        <div>
            <BudgetOwnerMobileNav/>
        </div>
        {/* <SideNav/> */}
        <div className="mx-2">
            {children}
        </div>    
    </div>
    )
  }

import MobileNav from "../ui/mobileNavs/MobileNav"

export default function EmployeePageLayout({ children }) {
    return (
        <div className="w-full  overflow-y-auto  flex flex-col mb-8">
            <div>
                <MobileNav/>
            </div>
            {/* <SideNav/> */}
            <div className="mx-2">
                {children}
            </div>    
        </div>
    )
  }
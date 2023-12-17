
import MobileNav from "../ui/mobileNav/MobileNav"

export default function DashboardLayout({ children }) {
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
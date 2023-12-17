import SideNav from "../ui/dashbaord/SideNav";
import MobileNav from "../ui/mobileNav/MobileNav"

export default function DashboardLayout({ children }) {
    return (
        <div className="w-full">
            <div>
                <MobileNav/>
            </div>
            {/* <SideNav/> */}
            {children}
        </div>
    )
  }
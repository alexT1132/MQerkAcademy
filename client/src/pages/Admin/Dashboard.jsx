import {useState} from 'react'
import TopBar from "../../components/TopBarAdmin";
import SidebarAdmin from "../../components/SideBarAdmin";

function Dashboard() {

    const [active, isActive] = useState(true);

    const toggleSidebar = () => {
        isActive(!active);
    };

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="sidebarAdmin">
            <SidebarAdmin isActive={active} />
        </div>
    </div>
  )
}

export default Dashboard
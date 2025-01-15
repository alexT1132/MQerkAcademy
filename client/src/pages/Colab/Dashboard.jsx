import {useState} from 'react'
import TopBar from "../../components/TopBarAdmin";
import Sidebar from "../../components/SideBarColab";

function DashColab() {

    const [active, isActive] = useState(true);

    const toggleSidebar = () => {
        isActive(!active);
    };

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="sidebarAdmin">
            <Sidebar isActive={active} />
        </div>
    </div>
  )
}

export default DashColab;
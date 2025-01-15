import {useState} from 'react'
import TopBar from "../../components/TopBarColab";
import SideBar from "../../components/SideBar";

function Dashboard() {

    const [active, isActive] = useState(true);

    const toggleSidebar = () => {
        isActive(!active);
    };

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div style={{display: 'flex'}}>
          <SideBar isActive={active} />
          <div className="main-estudiante">Prueba</div>
        </div>
    </div>
  )
}

export default Dashboard
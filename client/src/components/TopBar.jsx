import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";
import Logo from "../assets/MQerk_logo.png";
import Avatar from "./ui/Avatar";
import { Link } from "react-router-dom";
import { IoMicOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Noti from "../components/ui/Notification";

function TopBar({toggleSidebar}) {
  return (
    <nav className='topBar-dash'>
        <div className="container-topbar-one">
          <Link className="icon-menu" onClick={toggleSidebar}>
            <MdOutlineMenu className="icon-menu-close" onClick={toggleSidebar} />
          </Link>
          <div className="logo-mqerk">
              <img className="logo-Topbar" src={Logo} />
          </div>
          <div className="barra-nav">
            <div className="contorno">
              <div className="section-icono">
                  <CiSearch className="icono-top" />
                </div>
              <div className="section-input">
                  <input type="text" className="filtro-dash" placeholder="Comienza la experiencia..." />
                </div>
              <div className="section-icono">
                  <IoMicOutline className="icono-top microfono" />
                </div>
            </div>
          </div>
          <div className="section-noti">
            <Noti className='icon-noti' />
          </div>
          <div className="avatar">
              <Avatar />
          </div>
        </div>
    </nav>
  )
}

export default TopBar

import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";
import Logo from "../assets/MQerk_logo.png";
import Avatar from "./ui/AvatarAdmin";
import { Link } from "react-router-dom";
import { IoMicOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Noti from "../components/ui/Notification";

function TopBar({toggleSidebar}) {
  return (
    <nav className='topBar-dash'>
        <div className="icon-menu">
            <Link onClick={toggleSidebar}>
              <MdOutlineMenu className="icon-menu-close" onClick={toggleSidebar} />
            </Link>
        </div>
        <div className="logo-mqerk">
            <img className="logo-Topbar" src={Logo} />
        </div>
        <div className="barra-nav">
          <div className="section-barra">
            <div className="section-icono">
              <CiSearch className="icono-top" />
            </div>
            <div className="section-input">
              <input type="text" className="filtro-dash" placeholder="Comienza la experiencia..." />
            </div>
            <div className="section-icono">
              <IoMicOutline className="icono-top" />
            </div>
          </div>
        </div>
        <div>
          <Noti />
        </div>
        <div className="avatar">
            <Avatar />
        </div>
    </nav>
  )
}

export default TopBar;
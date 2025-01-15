import Logo from "../assets/MQerk_logo.png";
import Guardianes from "../assets/guardianes.png";
import { Link } from "react-router-dom";

function NavIndex() {
  return (
    <nav className='topBar-registro'>
        <div className="container-topBar-two">
            <Link to='/' className="link-logo-two">
                <img className="logo-two" src={Logo} />
            </Link>
            <div className='titulo-nav-two'>
                <h1 className="title-two">Asesores Especializados en la Enseñanza de las Ciencias y Tecnología</h1>
            </div>
            <div className='topbar-guardianes'>
                <img className="logo-guardianes" src={Guardianes} />
            </div>
        </div>
    </nav>
  )
}

export default NavIndex;

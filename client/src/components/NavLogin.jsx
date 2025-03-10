import Logo from "../assets/MQerk_logo.png";
import Guardianes from "../assets/guardianes.png";
import { Link } from "react-router-dom";

function NavIndex() {
  return (
    <nav className='topBar'>
            <Link to='/'>
                <img className="logo" src={Logo} />
            </Link>
                <h1 className="title">Asesores Especializados en la Enseñanza de las Ciencias y Tecnología</h1>
                <img className="logo" src={Guardianes} />
    </nav>
  )
}

export default NavIndex;

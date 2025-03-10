import LogoMQerk from "../assets/MQerk_logo.png";
import { Link } from "react-router-dom";

function NavIndex() {

  return (
    <div className="topBar">
            <Link to='/'>
                <img className="logo" src={LogoMQerk} />
            </Link>
                <h2 className="title" >Asesores Especializados en la Enseñanza de las Ciencias y Tecnología</h2>
            <Link className="link-btn" to='/login'>
                <button className="btn-nav">
                    Iniciar Sesión
                </button>
            </Link>
        </div>
  )
}

export default NavIndex;
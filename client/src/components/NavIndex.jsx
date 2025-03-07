import LogoMQerk from "../assets/MQerk_logo.png";
import { Link } from "react-router-dom";

function NavIndex() {

  return (
    <div style={{height:'12vw', display:'flex'}} className="topBar">
        <div className="container-topBar">
            <Link className="link-logo" to='/'>
                <img className="logo" src={LogoMQerk} />
            </Link>
            <div className="titulo-nav">
                <h2 className="title" >Asesores Especializados en la Enseñanza de las Ciencias y Tecnología</h2>
            </div>
            <Link className="link-btn" to='/login'>
                <button className="btn-nav">
                    Iniciar Sesión
                </button>
            </Link>
        </div>
    </div>
  )
}

export default NavIndex;
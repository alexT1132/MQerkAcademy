import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import uno from "../assets/ICONOS-ADMIN/1.png";
import dos from "../assets/ICONOS-ADMIN/2.png";
import tres from "../assets/ICONOS-ADMIN/3.png";
import cuatro from "../assets/ICONOS-ADMIN/4.png";
import cinco from "../assets/ICONOS-ADMIN/5.png";
import seis from "../assets/ICONOS-ADMIN/6.png";
import siete from "../assets/ICONOS-ADMIN/7.png";
import ocho from "../assets/ICONOS-ADMIN/8.png";
import nueve from "../assets/ICONOS-ADMIN/9.png";
import diez from "../assets/ICONOS-ADMIN/10.png";
import once from "../assets/ICONOS-ADMIN/11.png";
import doce from "../assets/ICONOS-ADMIN/12.png";
import trece from "../assets/ICONOS-ADMIN/13.png";
import cerrar from "../assets/icons-dash/9.png";




function SideBar({ isActive }) {

    const {logout} = useAuth();

  return (
    <div className={`container-sidebar-admin ${isActive ? 'active' : ''}`}>
        <div className={`sidebar-admin ${isActive ? 'active' : ''}`}>
            <div className="nav-admin">
                <div className="menu-admin">
                    <ul>
                        <li>
                            <Link to='/dashboard' className='ruta'>
                                <img className="iconos" src={uno} />
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={dos} />
                            <span className="text">Asesores</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={tres} />
                            <span className="text">Estudiantes</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={cuatro} />
                            <span className="text">P. interno</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={cinco} />
                            <span className="text">Analiticas</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={seis} />
                            <span className="text">Reportes</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                                <img className="iconos" src={siete} />
                                <span className="text">Calendario</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={ocho} />
                            <span className="text">Email</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={nueve} />
                            <span className="text">Academia</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                                <img className="iconos" src={diez} />
                                <span className="text">Checkout</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={once} />
                            <span className="text">Documentación</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={doce} />
                            <span className="text">Eventos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                            <img className="iconos" src={trece} />
                            <span className="text">Autenticación</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta' to='/' onClick={() => logout()}>
                                <img className="iconos" src={cerrar} />
                                <span className="text">Cerrar sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
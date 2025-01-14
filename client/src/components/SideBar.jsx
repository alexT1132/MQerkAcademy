import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import Dash from "../assets/icons-dash/1.png";
import Cursos from "../assets/miscursos.png";
import Tres from "../assets/icons-dash/3.png";
import Cuatro from "../assets/icons-dash/4.png";
import Cinco from "../assets/icons-dash/5.png";
import Seis from "../assets/icons-dash/6.png";
import Siete from "../assets/icons-dash/7.png";
import Nueve from "../assets/icons-dash/9.png";


function SideBar({ isActive }) {

    const {logout} = useAuth();

  return (
    <div className={`container-sidebar ${isActive ? 'active' : ''}`}>
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
            <div className="nav">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/entrenamiento_examen_admision_universidad' className='ruta'>
                                <img className="iconos" src={Dash} />
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cursos" className='ruta'>
                                <img className="iconos" src={Cursos} />
                                <span className="text">Cursos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/entrenamiento_examen_admision_universidad/actividades' className='ruta'>
                                <img className="iconos" src={Tres} />
                                <span className="text">Mis actividades</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                                <img className="iconos" src={Cuatro} />
                                <span className="text">Simuladores</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta'>
                                <img className="iconos" src={Cinco} />
                                <span className="text">Feedback</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/entrenamiento_examen_admision_universidad/calendario' className='ruta'>
                                <img className="iconos" src={Seis} />
                                <span className="text">Agenda</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/entrenamiento_examen_admision_universidad/pagos' className='ruta'>
                                <img className="iconos" src={Siete} />
                                <span className="text">Mis pagos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='ruta' to='/' onClick={() => logout()}>
                                <img className="iconos" src={Nueve} />
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
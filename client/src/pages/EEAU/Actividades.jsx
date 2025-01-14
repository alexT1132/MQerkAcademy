import { useState } from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { FaAngleDoubleDown } from "react-icons/fa";
import MateriaOne from "./../../assets/btnsActividades/1.png";
import MateriaTwo from "./../../assets/btnsActividades/2.png";
import MateriaThree from "./../../assets/btnsActividades/3.png";
import MateriaFour from "./../../assets/btnsActividades/4.png";
import Chatbot from "../../assets/chatbot.png";

function Actividades() {

    const [active, isActive] = useState(true);
    const [materia, setMateria] = useState("");
    const [tipo, setTipo] = useState('');

    const toggleSidebar = () => {
        isActive(!active);
    };

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div style={{display: 'flex'}}>
            <SideBar isActive={active} />
            <div className="main-mis-actividades">
                <div className="section-titulo-mis-actividades">
                    <h1 className="titulo-mis-actividades">Áreas generales y módulos del curso: Entrenamiento para el Examen de Admisión a la Universidad</h1>
                </div>
                <div className="section-materias-mis-actividades">
                    <div className="icon-mis-actividades">
                        <FaAngleDoubleDown className="bobleFlecha" />
                        <h1 className="title-mis-materias" >Materias del curso y módulos específicos </h1>
                    </div>
                    <div className="body-section-materias-mis-actividades">
                        <div onClick={() => setMateria('español')} className="materia">
                            <div className="materia-header">
                                <img src={MateriaOne} className="logo-materia" />
                            </div>
                            <div className="materia-body">
                                <div className="btn-materia">Comprensión lectora y español</div>
                            </div>
                        </div>
                        <div onClick={() => setMateria('matematicas')} className="materia">
                            <div className="materia-header">
                                <img src={MateriaTwo} className="logo-materia" />
                            </div>
                            <div className="materia-body">
                                <div className="btn-materia">Ciencias exactas y matemáticas</div>
                            </div>
                        </div>
                        <div onClick={() => setMateria('pensamiento')} className="materia">
                            <div className="materia-header">
                                <img src={MateriaThree} className="logo-materia" />
                            </div>
                            <div className="materia-body">
                                <div className="btn-materia pensamiento">Pensamiento analítico y hab. transversales</div>
                            </div>
                        </div>
                        <div onClick={() => setMateria('modulos')} className="materia">
                            <div className="materia-header">
                                <img src={MateriaFour} className="logo-materia" />
                            </div>
                            <div className="materia-body">
                                <div className="btn-materia">Módulos específicos</div>
                            </div>
                        </div>
                    </div>
                </div>
                {materia === 'español' && (
                    <div className="section-btn-quiz">
                        <div className="btn-left">
                            <button className="btn-actividades" onClick={() => setTipo('actividades')}>Actividades</button>
                        </div>
                        <div className="btn-rigth">
                            <button className="btn-quizt" onClick={() => setTipo('quizt')}>Quizt</button>
                        </div>
                    </div>
                )}
                {materia === 'matematicas' && (
                    <div className="section-btn-quiz">
                        <div className="btn-left">
                            <button className="btn-actividades" onClick={() => setTipo('actividades')}>Actividades</button>
                        </div>
                        <div className="btn-rigth">
                            <button className="btn-quizt" onClick={() => setTipo('quizt')}>Quizt</button>
                        </div>
                    </div>
                )}
                {materia === 'pensamiento' && (
                    <div className="section-btn-quiz">
                        <div className="btn-left">
                            <button className="btn-actividades" onClick={() => setTipo('actividades')}>Actividades</button>
                        </div>
                        <div className="btn-rigth">
                            <button className="btn-quizt" onClick={() => setTipo('quizt')}>Quizt</button>
                        </div>
                    </div>
                )}
                {materia === 'modulos' && (
                    <div className="section-btn-quiz">
                        <div className="btn-left">
                            <button className="btn-actividades" onClick={() => setTipo('actividades')}>Actividades</button>
                        </div>
                        <div className="btn-rigth">
                            <button className="btn-quizt" onClick={() => setTipo('quizt')}>Quizt</button>
                        </div>
                    </div>
                )}
                {tipo == 'actividades' && (
                    <div className="section-table-actividades">
                    <table className="tabla-actividades" border='1'>
                        <thead className="thead-table">
                            <tr className="tr-table-actividades">
                                <th>No.</th>
                                <th>Actividades</th>
                                <th>Descargar</th>
                                <th>Fecha de entrega</th>
                                <th>Subir actividad</th>
                                <th>Entregada</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>
                        <tbody className="tbody-table">
                            <tr className="tr-table-actividades">
                                <td className="index-actividad">1</td>
                                <td>Nombre de la actividad</td>
                                <td>Boton</td>
                                <td>Fecha</td>
                                <td>Archivo</td>
                                <td>Estado</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                {tipo == 'quizt' && (
                    <div className="section-table-actividades">
                    <table className="tabla-actividades" border='1'>
                        <thead className="thead-table">
                            <tr className="tr-table-actividades">
                                <th>No.</th>
                                <th>Quizt</th>
                                <th>Fecha de entrega</th>
                                <th>Ejecutar</th>
                                <th>Entregada</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>
                        <tbody className="tbody-table">
                            <tr className="tr-table-actividades">
                                <td className="index-actividad">1</td>
                                <td>Nombre de la actividad</td>
                                <td>Fecha</td>
                                <td>Archivo</td>
                                <td>Estado</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
                <img src={Chatbot} className="chatbot" />
            </div>
        </div>
    </div>
  )
}

export default Actividades
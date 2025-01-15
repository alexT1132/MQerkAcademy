import { useEffect } from "react";
import TopBar from "../../components/TopBarColab";
import Universidad from "./../../assets/Entrenamiento_fondo.png";
import Preparatoria from "./../../assets/entrenamiento2.png";
import English from "./../../assets/english.png";
import Psicoeducacion from "./../../assets/psicoeducacion.png";
import Cohete from "./../../assets/COHETE.png";
import { Link } from "react-router-dom";
import { useCounter } from "../../context/CounterContext";
import { useAuth } from "../../context/AuthContext";
import Chatbot from "../../assets/chatbot.png";

function Cursos() {

    const {getDataCounter, Data} = useCounter();

    const {user} = useAuth();

    useEffect(() => {
        getDataCounter();
    })

  return (
    <div>
        <TopBar />
        <div className="main-cursos">
            <h1 className="cursos-title">Mis cursos:</h1>
            <div className="adquiridos">
                { 
                Data.map((item, index) => {
                    if(!item) {
                        return <h1 key={index} className="noCurso" >No haz adquirido ningun curso</h1>;
                    } else
                    if(item.client === user.id) {
                        if(item.curso === 'eeau') {
                            return <div key={index} className="card-cursos-adquirido">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Universidad} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Universidad</p>
                                </div>
                                <div className="curso-footer">
                                    <Link to='/entrenamiento_examen_admision_universidad' className="btn-adquirir">Ingresar</Link>
                                </div>
                            </div>
                        </div>
                        } 
                        if(item.curso === 'eeap'){
                            return <div className="card-cursos-adquirido">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Preparatoria} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Preparatoria</p>
                                </div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Ingresar</Link>
                                </div>
                            </div>
                        </div>
                        } 
                        if(item.curso === 'ee'){
                            return <div className="card-cursos-adquirido">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={English} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">English Elemental</p>
                                </div>
                                <div className="space-e-adquirido"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Ingresar</Link>
                                </div>
                            </div>
                        </div>
                        } 
                        if(item.curso === 'pov'){
                            return <div className="card-cursos-adquirido">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Psicoeducacion} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Psicoeducación y orientación vocacional</p>
                                </div>
                                <div className="space-ps-adquirido"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Ingresar</Link>
                                </div>
                            </div>
                        </div>
                        }
                    } else {
                        return <h1 key={index} className="noCurso" >No haz adquirido ningun curso</h1>;
                    }
                })}
            </div>
            <h1 className="cursos-title">Cursos disponibles:</h1>
            <div className="disponibles">
                {Data.map((item, index) => {
                    if(item) {
                        if(item.client === user.id){
                            if (item.curso === 'eeau') {
                                return <div key={index} className="card-cursos" style={{display: 'none'}}>
                                <div className="card-container-curso">
                                    <div className="curso-header">
                                        <img src={Universidad} />
                                    </div>
                                    <div className="curso-body">
                                        <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Universidad</p>
                                        <p>Contenido:</p>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Libros electrònicos PDF.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Conferencias gratuitas.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Atenciòn psicoeducativa.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Duraciòn de 8 meses.</p>
                                        </div>
                                    </div>
                                    <div className="space-u"></div>
                                    <div className="curso-footer">
                                        <Link to="/formulario-eeau" className="btn-adquirir">Adquirir</Link>
                                    </div>
                                </div>
                            </div>
                            } else {
                                return <div key={index} className="card-cursos">
                                <div className="card-container-curso">
                                    <div className="curso-header">
                                        <img src={Universidad} />
                                    </div>
                                    <div className="curso-body">
                                        <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Universidad</p>
                                        <p>Contenido:</p>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Libros electrònicos PDF.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Conferencias gratuitas.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Atenciòn psicoeducativa.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Duraciòn de 8 meses.</p>
                                        </div>
                                    </div>
                                    <div className="space-u"></div>
                                    <div className="curso-footer">
                                        <Link to="/formulario-eeau" className="btn-adquirir">Adquirir</Link>
                                    </div>
                                </div>
                            </div>
                            }
                        } else {
                            return <div key={index} className="card-cursos">
                                <div className="card-container-curso">
                                    <div className="curso-header">
                                        <img src={Universidad} />
                                    </div>
                                    <div className="curso-body">
                                        <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Universidad</p>
                                        <p>Contenido:</p>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Libros electrònicos PDF.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Conferencias gratuitas.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Atenciòn psicoeducativa.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Duraciòn de 8 meses.</p>
                                        </div>
                                    </div>
                                    <div className="space-u"></div>
                                    <div className="curso-footer">
                                        <Link to="/formulario-eeau" className="btn-adquirir">Adquirir</Link>
                                    </div>
                                </div>
                            </div>
                        }
                    } else {
                        return <div key={index} className="card-cursos">
                                <div className="card-container-curso">
                                    <div className="curso-header">
                                        <img src={Universidad} />
                                    </div>
                                    <div className="curso-body">
                                        <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Universidad</p>
                                        <p>Contenido:</p>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Libros electrònicos PDF.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Conferencias gratuitas.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Atenciòn psicoeducativa.</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                            <img src={Cohete} className="cohete" />
                                            <p className="descripcion">Duraciòn de 8 meses.</p>
                                        </div>
                                    </div>
                                    <div className="space-u"></div>
                                    <div className="curso-footer">
                                        <Link to="/formulario-eeau" className="btn-adquirir">Adquirir</Link>
                                    </div>
                                </div>
                            </div>
                    }
                })}
                {Data.map((item, index) => {
                    if(item) {
                        if(item.client === user.id){
                            if (item.curso === 'eeap') {
                                return <div key={index} className="card-cursos" style={{display: 'none'}}>
                                    <div className="card-container-curso">
                                        <div className="curso-header">
                                            <img src={Preparatoria} />
                                        </div>
                                        <div className="curso-body">
                                            <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Preparatoria</p>
                                            <p>Contenido:</p>
                                        </div>
                                        <div className="contenido-descripcion">
                                                <img src={Cohete} className="cohete" />
                                                <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                            </div>
                                            <div className="contenido-descripcion">
                                                <img src={Cohete} className="cohete" />
                                                <p className="descripcion">Libros electrònicos PDF.</p>
                                            </div>
                                            <div className="contenido-descripcion">
                                                <img src={Cohete} className="cohete" />
                                                <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                            </div>
                                            <div className="contenido-descripcion">
                                                <img src={Cohete} className="cohete" />
                                                <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                            </div>
                                            <div className="contenido-descripcion">
                                                <img src={Cohete} className="cohete" />
                                                <p className="descripcion">Duraciòn de 5 meses.</p>
                                            </div>
                                            <div className="space-p"></div>
                                        <div className="curso-footer">
                                            <Link className="btn-adquirir">Adquirir</Link>
                                        </div>
                                    </div>
                                </div>
                            } else {
                                return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Preparatoria} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Preparatoria</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Libros electrònicos PDF.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Duraciòn de 5 meses.</p>
                                    </div>
                                    <div className="space-p"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                            }
                        } else {
                            return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Preparatoria} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Preparatoria</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Libros electrònicos PDF.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Duraciòn de 5 meses.</p>
                                    </div>
                                    <div className="space-p"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                        }
                    } else {
                        return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Preparatoria} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Entrenamiento para el Examen de Admisiòn a la Preparatoria</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Guìas digitales con ejercicios semejantes al examen de admisiòn.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Libros electrònicos PDF.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Simuladores del examen de admisiòn online.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Plataformas de aprendizaje educativo.</p>
                                    </div>
                                    <div className="contenido-descripcion">
                                        <img src={Cohete} className="cohete" />
                                        <p className="descripcion">Duraciòn de 5 meses.</p>
                                    </div>
                                    <div className="space-p"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                    }
                })}
                {Data.map((item, index) => {
                    if(item) {
                        if(item.client === user.id){
                            if (item.curso === 'ee') {
                                return <div key={index} className="card-cursos" style={{display: 'none'}}>
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={English} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">English Elemental</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Guìas de estudios.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Plataformas de aprendizaje.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Libros digitales con actividades aplicadas en el idioma ingles.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Clases presenciales.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Preparaciòn para el examen de unidad.</p>
                                </div>
                                <div className="space-e"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                            } else {
                                return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={English} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">English Elemental</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Guìas de estudios.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Plataformas de aprendizaje.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Libros digitales con actividades aplicadas en el idioma ingles.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Clases presenciales.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Preparaciòn para el examen de unidad.</p>
                                </div>
                                <div className="space-e"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                            }
                        } else {
                            return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={English} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">English Elemental</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Guìas de estudios.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Plataformas de aprendizaje.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Libros digitales con actividades aplicadas en el idioma ingles.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Clases presenciales.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Preparaciòn para el examen de unidad.</p>
                                </div>
                                <div className="space-e"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                        }
                    } else {
                        return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={English} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">English Elemental</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Guìas de estudios.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Contenido digital que se utilizarà en las clases.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Plataformas de aprendizaje.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Libros digitales con actividades aplicadas en el idioma ingles.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Clases presenciales.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Preparaciòn para el examen de unidad.</p>
                                </div>
                                <div className="space-e"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                    }
                })}
                {Data.map((item, index) => {
                    if(item) {
                        if(item.client === user.id){
                            if (item.curso === 'pov') {
                                return <div key={index} className="card-cursos" style={{display: 'none'}}>
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Psicoeducacion} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Psicoeducación y orientación vocacional</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Atenciòn psicològica.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Elaboraciòn de test vocacional.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Exploraciòn mental.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Toma de desiciones.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Sesiones personalizadas.</p>
                                </div>
                                <div className="space-ps"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                            } else {
                                return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Psicoeducacion} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Psicoeducación y orientación vocacional</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Atenciòn psicològica.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Elaboraciòn de test vocacional.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Exploraciòn mental.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Toma de desiciones.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Sesiones personalizadas.</p>
                                </div>
                                <div className="space-ps"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                            }
                        } else {
                            return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Psicoeducacion} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Psicoeducación y orientación vocacional</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Atenciòn psicològica.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Elaboraciòn de test vocacional.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Exploraciòn mental.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Toma de desiciones.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Sesiones personalizadas.</p>
                                </div>
                                <div className="space-ps"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                        }
                    } else {
                        return <div key={index} className="card-cursos">
                            <div className="card-container-curso">
                                <div className="curso-header">
                                    <img src={Psicoeducacion} />
                                </div>
                                <div className="curso-body">
                                    <p className="nombre-curso">Psicoeducación y orientación vocacional</p>
                                    <p>Contenido:</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Atenciòn psicològica.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Elaboraciòn de test vocacional.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Exploraciòn mental.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Toma de desiciones.</p>
                                </div>
                                <div className="contenido-descripcion">
                                    <img src={Cohete} className="cohete" />
                                    <p className="descripcion">Sesiones personalizadas.</p>
                                </div>
                                <div className="space-ps"></div>
                                <div className="curso-footer">
                                    <Link className="btn-adquirir">Adquirir</Link>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
            <img src={Chatbot} className="chatbot" />
            <br />
        </div>
    </div>
  )
}

export default Cursos
import {useState, useEffect} from 'react'
import TopBar from "../../components/TopBarColab.jsx";
import SideBar from "../../components/SideBar";
import { useEeau } from "../../context/EeauContext";
import { useAuth } from "../../context/AuthContext";
import { Host } from "../../api/axios.js";
import correo from "../../assets/icons-usuario/11.png";
import curso from "../../assets/icons-usuario/12.png";
import bachiller from "../../assets/icons-usuario/13.png";
import academia from "../../assets/icons-usuario/14.png";
import quince from "../../assets/icons-usuario/15.png";
import dieciseis from "../../assets/icons-usuario/16.png";
import diecisiete from "../../assets/icons-usuario/17.png";
import BarchartOne from "../../components/charts/BarChart1.jsx";
import Dona from "../../components/charts/Dona.jsx";
import BarChartTwo from "../../components/charts/BarChart2.jsx";
import Medidor from "../../components/charts/Medidor.jsx";
import Chatbot from "../../assets/chatbot.png";


function Eeau({isActive}) {
    const [activacion, isActivacion] = useState(true);

    const {getData, userData} = useEeau();

    const {user} = useAuth();

    const toggleSidebar = () => {
      isActivacion(!activacion);
    };

    useEffect(() => {
        getData()
    })

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div style={{display: 'flex'}}>
          <SideBar isActive={activacion} />
          <div className={`main-estudiante ${activacion ? 'active' : ''}`}>
          <div className="section-info">
              <div className="section_foto_nombre">
              {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div key={dato._id} className="apartado_foto">
                        <img className={`foto-perfil ${activacion ? 'active' : ''}`} src={Host+dato.foto} />
                      </div>
                    ))
                  }
                  {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_nombre" key={dato._id}>
                        {dato.nombres} {dato.apellidos}
                      </div>
                    ))
                  }
              </div>
              <div className="section_info_1">
                  {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={correo} className='img-correo' />
                        <p className='data'>Correo electrónico:</p>
                        <p>{dato.correo}</p>
                      </div>
                    ))
                  }
                <div className="apartado_datos">
                  <img src={curso} className='img-correo' />
                  <p className='data'>Curso Activo:</p>
                  <p>E.E.A.U</p>
                </div>
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={bachiller} className='img-correo' />
                        <p className='data'>Bachillerato Actual:</p>
                        <p>{dato.na}</p>
                      </div>
                    ))
                  }
                <div className="apartado_datos">
                        <img src={academia} className='img-correo' />
                        <p className='data'>Academia:</p>
                        <p>MQerk Academy</p>
                </div>
              </div>
              <div className="section_info_2">
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={quince} className='img-correo' />
                        <p className='data'>Opción de universidad:</p>
                        <p>{dato.universidades},{dato.otraUni}</p>
                      </div>
                    ))
                  } 
                  {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={dieciseis} className='img-correo' />
                        <p className='data'>Opción de licenciatura:</p>
                        <p>{dato.licenciatura}</p>
                      </div>
                    ))
                  } 
                <div className="apartado_datos">
                  <img src={diecisiete} className='img-correo' />
                  <p className='data'>Asesor a cargo:</p>
                  <p>L.C.Q Kelvin Valentin Gómez Ramírez</p>
                </div>
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={academia} className='img-correo' />
                        <p className='data'>Grupo:</p>
                        <p>{dato.grupo}</p>
                      </div>
                    ))
                  }                   
              </div>
            </div>
            <div className="charts-section">
              <div className="title-status" style={{textAlign: 'center', color: '#5115bc'}}>
                <h2>TU STATUS</h2>
              </div>
              <div className="charts">
                <div className="graficas">
                <p style={{textAlign: 'center'}}>Avances de actividad</p>
                <div className="grafica1">
                    <BarchartOne />
                </div>
                </div>
                <div className="graficas">
                  <p style={{textAlign: 'center'}}>Resultados del simulador</p>
                  <div className="grafica2">
                    <Dona />
                </div>
                </div>
                <div className="graficas">
                  <p style={{textAlign: 'center'}}>% de cada simulador</p>
                    <BarChartTwo />
                </div>
                <div className="graficas">
                  <p style={{textAlign: 'center'}}>Feedback</p>
                    <Medidor />
                </div>
              </div>
            </div>
            <img src={Chatbot} className="chatbot" />
          </div>
        </div>
    </div>
  )
}

export default Eeau
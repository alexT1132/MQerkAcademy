import {useState, useEffect} from 'react'
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { useEeau } from "../../context/EeauContext";
import { useAuth } from "../../context/AuthContext";
import { Host } from "../../api/axios.js";
import correo from "../../assets/icons-usuario/11.png";
import bachiller from "../../assets/icons-usuario/13.png";
import quince from "../../assets/icons-usuario/15.png";
import dieciseis from "../../assets/icons-usuario/16.png";
import diecisiete from "../../assets/icons-usuario/17.png";
import doce from "../../assets/icons-usuario/12.png";
import catorce from "../../assets/icons-usuario/14.png";
import diecinueve from "../../assets/icons-perfil/19.png";
import veinte from "../../assets/icons-perfil/20.png";
import veintiuno from "../../assets/icons-perfil/21.png";
import veintidos from "../../assets/icons-perfil/22.png";


function Eeau() {
    const [active, isActive] = useState(true);

    const {getData, userData} = useEeau();

    const {user} = useAuth();

    const toggleSidebar = () => {
        isActive(!active);
    };

    useEffect(() => {
        getData()
    })

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div style={{display: 'flex'}}>
          <SideBar isActive={active} />
          <div className={`main-estudiante ${active ? 'active' : ''} mi_perfil`}>
          <div className="section-info">
              <div className={`section_foto_nombre ${active ? 'active' : ''}`}>
              {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div key={dato._id} className="apartado_foto">
                        <img className={`foto-perfil ${active ? 'active' : ''}`} src={Host+dato.foto} />
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
              <div className="section_info_1 mi_perfil">
                <div className="section-datos-personales">
                    <h1 className='title-datos-personales mi_perfil'>Datos personales:</h1>
                </div>
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
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={diecinueve} className='img-correo' />
                        <p className='data'>Municipio o comunidad:</p>
                        <p>{dato.comunidad}</p>
                      </div>
                    ))
                  }
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={veinte} className='img-correo' />
                        <p className='data'>Nombre de mi tutor:</p>
                        <p>{dato.tutor}</p>
                      </div>
                    ))
                  }
              </div>
              <div className="section_info_2 mi_perfil">
              <div className="section-btn-editar">
                    <button className='btn-editar-datos'>Editar perfil</button>
                </div>
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={veintiuno} className='img-correo' />
                        <p className='data'>Mi numero de telefono:</p>
                        <p>{dato.telefono}</p>
                      </div>
                    ))
                  } 
                  {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={veintiuno} className='img-correo' />
                        <p className='data'>Telefono de mi tutor:</p>
                        <p>{dato.telefonoTutor}</p>
                      </div>
                    ))
                  }             
              </div>
            </div>
            <div className="apartado mi_perfil">
            <div className="section_info_1 mi_perfil">
                <div className="section-datos-personales">
                    <h1 className='title-datos-personales mi_perfil'>Datos académicos:</h1>
                </div>
                      <div className="apartado_datos">
                        <img src={catorce} className='img-correo' />
                        <p className='data'>Academia:</p>
                        <p>MQerK Academy</p>
                      </div>
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={bachiller} className='img-correo' />
                        <p className='data'>Bachillerato actual:</p>
                        <p>{dato.na} {dato.otroNa}</p>
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
                  {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={quince} className='img-correo' />
                        <p className='data'>Opción de universidad:</p>
                        <p>{dato.universidades} {dato.otraUni}</p>
                      </div>
                    ))
                  }
            </div>
            <div className="section_info_1 miperfil">
                <div className="section-datos-personales">
                    <h1 className='title-datos-personales mi_perfil'>Datos del curso:</h1>
                </div>
                      <div className="apartado_datos">
                        <img src={doce} className='img-correo' />
                        <p className='data'>Curso activo:</p>
                        <p>E.E.A.U</p>
                      </div>
                      <div className="apartado_datos">
                        <img src={diecisiete} className='img-correo' />
                        <p className='data'>Asesor a cargo:</p>
                        <p>L.C.Q. Kelvin Valentin Gómez Ramirez</p>
                      </div>
                {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={bachiller} className='img-correo' />
                        <p className='data'>Grupo:</p>
                        <p>{dato.grupo}</p>
                      </div>
                    ))
                  }
                  {userData
                    .filter((dato) => dato.usuario === user.id)
                    .map((dato) => (
                      <div className="apartado_datos" key={dato._id}>
                        <img src={veintidos} className='img-correo' />
                        <p className='data'>Modalidad:</p>
                        <p>{dato.modalidad}</p>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eeau
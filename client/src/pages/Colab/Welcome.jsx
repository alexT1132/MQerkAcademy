import React from 'react'
import Nav from "../../components/NavLogin";
import { useNavigate, useLocation } from "react-router-dom";

function Welcome() {

  const location = useLocation();
  const previo = location.state;

  const navigate = useNavigate();

  return (
    <div>
        <Nav />
        <div className="index-colab-page">
            <div className="title-index-colab">
                <h1 className='registro-previo-title'>¡Bienvenido(a) {previo.nombres} {previo.apellidos} a MQerKAcademy!</h1>
            </div>
            <div className="subtitle-welcome">
              <div className="subtitle-bienvenida">Estamos muy emocionados de contar contigo como parte de nuestro proceso de selección. Tu talento y experiencia son clave para seguir construyendo una academia disruptiva y que prepare a los estudiantes para enfrentar los retos del futuro.</div>
            </div>
            <div className="card-section-welcome">
              <div className="card-container-welcome">
                <div className="card-body-welcome">
                  <p className="parrafo-card-welcome primer">Una vez culminado la entrevista en Recursos Humanos, ahora necesitamos que completes algunos pasos importantes:</p>
                  <p className="parrafo-card-welcome segundo">1. Test psicológicos y pruebas académicas: Estos nos ayudarán a conocer más sobre tus habilidades, conocimientos y áreas de especialidad.</p>
                  <p className="parrafo-card-welcome segundo">2. Una vez hayas acreditados los test y pruebas,podrás subir tus documentos: Por favor, asegúrate de cargar los documentos requeridos en el formato indicado para agilizar tu proceso de contratación.</p>
                  <p className="parrafo-card-welcome tercero">En MQerKAcademy valoramos el compromiso, la pasión por la educación y la creatividad para transformar vidas. Estamos seguros de que juntos lograremos grandes cosas.</p>
                  <p className="parrafo-card-welcome cuarto">Si tienes alguna pregunta o necesitas apoyo, no dudes en comunicarte con nuestro equipo.</p>
                  <p className="parrafo-card-welcome cuarto">¡Mucho éxito y bienvenido(a) a esta nueva etapa!</p>
                  <p className="parrafo-card-welcome primer">El equipo de MQerKAcademy</p>
                </div>
              </div>
            </div>
            <div className="section-btn-welcome">
              <button className='btn-welcome-inicio-tests' onClick={() => navigate('/pruebas', {state: previo})} >Iniciar</button>
            </div>
        </div>
    </div>
  )
}

export default Welcome
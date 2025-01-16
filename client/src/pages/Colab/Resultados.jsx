import React from 'react'
import NavLogin from "../../components/NavLogin";
import TablaResultados from "../../components/ui/TablaResultados";
import { useLocation, useNavigate } from "react-router-dom";
import { useResult } from "../../context/ResultContext";

function Resultados() {

  const {val} = useResult();

  const navigate = useNavigate();
  const location = useLocation();
  const {previo} = location.state || {};

  return (
    <div>
        <NavLogin />
        <h1 className="titulo-form-colab primero">{previo.nombres} {previo.apellidos}</h1>
        <h1 className="titulo-form-colab primero">Informe Ejecutivo de Resultados: Evaluación Integral</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p className='parrafo-prueba-instruccion' style={{width: '70%'}}>El presente informe consolida los resultados obtenidos en una serie de pruebas psicológicas, académicas y técnicas aplicadas para evaluar las competencias, habilidades y aptitudes del candidato(a). Este análisis exhaustivo tiene como finalidad determinar la alineación del perfil del evaluado con los estándares requeridos para desempeñar exitosamente el rol de asesor(a) educativo, destacando fortalezas y áreas clave para el desarrollo profesional.</p>
        </div>
        <br />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: '40%'}}>
            <TablaResultados />
          </div>
        </div>
        <br />
        {
          val ? <div className='section-iniciar-tramite'>
                  <button className='btn-iniciar-tramite'>Iniciar tramite</button>
                </div> 
                : 
                <div className='section-iniciar-tramite'>
                  <button onClick={() => navigate('/')} className='btn-iniciar-tramite'>Finalizar</button>
                </div>
        }
    </div>
  )
}

export default Resultados
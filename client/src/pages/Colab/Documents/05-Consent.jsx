import NavLogin from "../../../components/NavLogin"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Bienvenida(){
    return(
        <div>
            <NavLogin/>

            <div>
                <h1 className="instrucciones-reg"> 5. Información adicional </h1>      {/*Falta agregar la constante del usuario*/}
            


            
                <p className="parrafo-reg">
                Incluye lo que no se haya solicitado en las secciones anteriores.
                </p>
            </div>
            
            <div>
                {/* ¿Cómo te enteraste de MQerKAcademy? LISTA— (Redes sociales (Facebook, Instagram, etc.), Recomendación de un amigo/colega, Publicidad en línea, Evento o feria educativa, Página web, Otro (especificar))
                    ¿Por qué te gustaría ser asesor en MQerKAcademy? LISTA — (Contribuir a la educación, Desarrollo profesional, Interés en ciencias y tecnología, Flexibilidad horaria, Otro (especificar))
                    ¿Estarías dispuesto a participar en formaciones continuas o capacitaciones internas? LISTA (SI—- NO)
                    Serian 3 CHECKLIST
                    
                    Expectativa salarial (opcional):
                    TEXTFIELD

                    Disponibilidad para comenzar a trabajar (fecha):
                    DATEPICKER
                    */}
            </div>
            <br/>
            
            <div>
            
                <h1 className="instrucciones-reg">6. Confirmación y consentimiento</h1>
            

            
                <p className="parrafo-reg">
                Al completar este formulario, confirmas que la información proporcionada es verídica y autorizas a MQerKAcademy
                a utilizar estos datos únicamente para fines relacionados con el proceso de reclutamiento y contratación, conforme
                a la normativa de protección de datos aplicable. Por favor, firma digitalmente o marca la casilla de consentimiento
                para proceder
                </p>
                
                {/* ¿Autorizas a MQerKAcademy para almacenar y procesar tus datos personales de acuerdo con las políticas de privacidad?
                    (Sí/No)
                    CHECKBOX (REQUIRED)

                    Firma digital o nombre completo como confirmación de la veracidad de los datos proporcionados.
                    REACT BUTTON (REQUIRED)
                    */}

            
                <button className="btn-cont-reg">Finalizar</button>
            </div>

        </div>


)
}

export default Bienvenida;
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
                <h1 className="instrucciones-reg">3. Información profesional</h1>
            

            
                <p className="parrafo-reg">
                Ingresa la información relacionada con tu experiencia profesional, incluyendo roles previos,
                instituciones donde has trabajado, y áreas de especialización.
                Esta información nos ayudará a evaluar mejor tu perfil como asesor.
                </p>
            </div>
            <div>
                {/* Área de interés o departamento al que aplicas:
                    Administración
                    Marketing
                    Recursos humanos
                    Tecnología
                    Finanzas
                    Logística
                    Atención al cliente
                    Ventas
                    Otro (especificar)
                    CHECKLIST
                    */}

                {/* Puesto de trabajo actual o último puesto
                    TEXTFIELD */}

                {/* Nombre de la empresa actual o anterior
                    TEXTFIELD outlined-multiline-static*/}

                {/* Funciones y responsabilidades en el puesto anterior: */}
                

                {/* Experiencia laboral (años):
                    Menos de 1 año
                    1-2 años
                    3-5 años
                    6-10 años
                    Más de 10 años
                    CHECKLIST
                    */}

                {/* Herramientas o software que dominas:
                    Microsoft Office (Word, Excel, PowerPoint)
                    Google Workspace (Docs, Sheets, Slides)
                    CRM (especificar cuál)
                    Herramientas de marketing digital (Google Ads, Facebook Ads, etc.)
                    Software de contabilidad (especificar)
                    Otro (especificar)
                    CHECKLIST
                    */}

                {/* Conocimientos o habilidades técnicas específicas (opcional):
                    Ejemplos: diseño gráfico, programación, análisis financiero, gestión de proyectos, etc.
                    TEXTFIELD
                    */}
                <button className="btn-cont-reg">Siguiente</button>
            </div>

        </div>


)
}

export default Bienvenida;
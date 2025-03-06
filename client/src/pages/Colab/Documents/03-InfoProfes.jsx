import NavLogin from "../../../components/NavLogin"
import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";


function Bienvenida(){
    return(
        <html lang="es">

            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <NavLogin/>
            <body>
            <main>
            <article>          
                <h1 className="instrucciones-reg">3. Información profesional</h1>
            

            
                <p className="parrafo-reg">
                Ingresa la información relacionada con tu experiencia profesional, incluyendo roles previos,
                instituciones donde has trabajado, y áreas de especialización.
                Esta información nos ayudará a evaluar mejor tu perfil como asesor.
                </p>
            </article>

            <form className="cent-form"
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'stretch'
                    }}>
                {/* Área de interés o departamento al que aplicas:
                    */}
                <FormGroup
                style={{
                    'font-family':"Roboto,Helvetica,Arial,sans-serif",
                    textAlign:'justify',

                    }}>
                        <h2>Área de interés o departamento al que aplicas</h2>
                        <hr />
                        <FormControlLabel control={<Checkbox />} label="Administración" />
                        <FormControlLabel control={<Checkbox />} label="Marketing" />
                        <FormControlLabel control={<Checkbox />} label="Recursos humanos" />
                        <FormControlLabel control={<Checkbox />} label="Tecnología" />
                        <FormControlLabel control={<Checkbox />} label="Finanzas" />
                        <FormControlLabel control={<Checkbox />} label="Logística" />
                        <FormControlLabel control={<Checkbox />} label="Atención al cliente" />
                        <FormControlLabel control={<Checkbox />} label="Ventas" />
                        <FormControlLabel control={<Checkbox />} label="Otro (especificar)" />
                </FormGroup>

                
                <fieldset>
                    <h2>Informacion sobre anterior puesto/trabajo</h2>
                    <hr />
                    <TextField
                        required
                        label="Actual/último puesto de trabajo"
                        variant="outlined"
                        helperText='ej. Gerente general'
                        multiline
                        fullWidth
                        style={{
                            'margin-top':'15px',
                            'margin-bottom':'25px'
                        }}
                    />
                    
                    <TextField
                        required
                        label="Empresa"
                        variant="outlined"
                        helperText='ej. GEGSA, Login360.'
                        multiline
                        fullWidth
                        style={{
                            'margin-bottom':'25px'
                        }}
                    />
                    

                    {/* Funciones y responsabilidades en el puesto anterior: */}
                    <TextField
                        required
                        label="Funiones/responsabilidades"
                        variant="outlined"
                        helperText='Explica de forma detallada las funciones que realizabas en tu anterios puesto.'
                        multiline
                        rows={4}
                        fullWidth
                    />

                </fieldset>

                <FormControl fullWidth>
                    <FormLabel
                        id="radio-buttons-group-label">
                    </FormLabel>
                        <h2>Experiencia laboral</h2>
                        <hr />
                        <RadioGroup
                            row
                            aria-labelledby="radio-buttons-group-label"
                            name="radio-buttons-group"
                            required
                            style={{display:'flex', flexDirection:'column'}}
                            >
                    
                                <FormControlLabel value="xp1" control={<Radio />} label="Menos de 1 año" />
                                <FormControlLabel value="xp2" control={<Radio />} label="1-2 años" />
                                <FormControlLabel value="xp3" control={<Radio />} label="3-5 años" />
                                <FormControlLabel value="xp4" control={<Radio />} label="6-10 años" />
                                <FormControlLabel value="xp5" control={<Radio />} label="Más de 10 años" />
                                
                        </RadioGroup>
                </FormControl>
                
                {/* Herramientas o software que dominas
                    */}
                <FormGroup
                style={{
                    'textAlign':'justify',
                    'font-family':"Roboto,Helvetica,Arial,sans-serif",
                    rowGap:'50%'
                    }}>
                        <h2>Herramientas o software que dominas</h2>
                        <hr />
                        <FormControlLabel control={<Checkbox />} label="Microsoft Office (Word, Excel, PowerPoint)" />
                        <FormControlLabel control={<Checkbox />} label="Google Workspace (Docs, Sheets, Slides)" />
                        <FormControlLabel control={<Checkbox />} label="CRM (especificar cuál)" />
                        <FormControlLabel control={<Checkbox />} label="Herramientas de marketing digital (Google Ads, Facebook Ads, etc.)" />
                        <FormControlLabel control={<Checkbox />} label="Software de contabilidad (especificar)" />
                        <FormControlLabel control={<Checkbox />} label="Otro (especificar)" />
                        
                </FormGroup>

                {/* Conocimientos o habilidades técnicas específicas (opcional):
                    Ejemplos: diseño gráfico, programación, análisis financiero, gestión de proyectos, etc.
                    TEXTFIELD
                    */}
                <FormGroup
                    helperText='Este apartado es opcional'
                    style={{
                    'font-family':"Roboto,Helvetica,Arial,sans-serif"
                    }}>
                        <h2>Conocimientos o habilidades técnicas específicas</h2>
                        <hr />
                        <FormControlLabel control={<Checkbox />} label="Microsoft Office (Word, Excel, PowerPoint)" />
                        <FormControlLabel control={<Checkbox />} label="Google Workspace (Docs, Sheets, Slides)" />
                        <FormControlLabel control={<Checkbox />} label="CRM (especificar cuál)" />
                        <FormControlLabel control={<Checkbox />} label="Herramientas de marketing digital (Google Ads, Facebook Ads, etc.)" />
                        <FormControlLabel control={<Checkbox />} label="Software de contabilidad (especificar)" />
                        <FormControlLabel control={<Checkbox />} label="Otro (especificar)" />
                        
                </FormGroup>


                </form>
                </main>
                </body>
                <button className="btn-cont-reg">Siguiente</button>

                </html>
)
}

export default Bienvenida;
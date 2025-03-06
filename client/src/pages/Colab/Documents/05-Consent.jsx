import NavLogin from "../../../components/NavLogin"
import * as React from 'react';
import {FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel, RadioGroup, Radio, OutlinedInput, InputAdornment, InputLabel} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
                        <h1 className="instrucciones-reg"> 5. Información adicional </h1>      {/*Falta agregar la constante del usuario*/}
                    
                        <p className="parrafo-reg">
                        Incluye lo que no se haya solicitado en las secciones anteriores.
                        </p>
                    </article>
                
                    <form className="cent-form">
                        <FormGroup
                        style={{
                            'textAlign':'justify',
                            'font-family':"Roboto,Helvetica,Arial,sans-serif",
                            rowGap:'50%'
                            }}>
                            <h2>¿Cómo te enteraste de MQerKAcademy?</h2>
                            <hr />
                            <FormControlLabel control={<Checkbox />} label="Redes sociales (Facebook, Instagram, X, etc.)" />
                            <FormControlLabel control={<Checkbox />} label="Recomendación de un amigo/colega" />
                            <FormControlLabel control={<Checkbox />} label="Publicidad en línea" />
                            <FormControlLabel control={<Checkbox />} label="Evento o feria educativa" />
                            <FormControlLabel control={<Checkbox />} label="Página web" />
                            <FormControlLabel control={<Checkbox />} label="Otro (especificar)" />
                                
                        </FormGroup>

                        <FormGroup
                        style={{
                            'textAlign':'justify',
                            'font-family':"Roboto,Helvetica,Arial,sans-serif",
                            rowGap:'50%'
                            }}>
                            <h2>¿Por qué te gustaría ser asesor en MQerKAcademy?</h2>
                            <hr />
                            <FormControlLabel control={<Checkbox />} label="Contribuir a la educación" />
                            <FormControlLabel control={<Checkbox />} label="Desarrollo profesional" />
                            <FormControlLabel control={<Checkbox />} label="Interés en ciencias y tecnología" />
                            <FormControlLabel control={<Checkbox />} label="Flexibilidad horaria" />
                            <FormControlLabel control={<Checkbox />} label="Otro (especificar)" />
                                
                        </FormGroup>

                        <FormControl>
                            <FormLabel id="radio-buttons-group-label"></FormLabel>
                                <h2>¿Estarías dispuesto a participar en formaciones continuas o capacitaciones internas?</h2>
                                <hr />
                                <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={(e)=> setGen(e.target.value)}
                                required
                                style={{display:'flex', 'justifyContent':'space-around'}}
                                >
                                    <hr />
                                    <FormControlLabel value="y" control={<Radio />} label="Sí" />
                                    <FormControlLabel value="n" control={<Radio />} label="No" />
                                    
                                </RadioGroup>
                        </FormControl>
                        

                        <fieldset>

                        <div>
                        <h2>Indique su expectativa salarial</h2>
                        <hr style={{'margin-bottom':'15px'}}/>
                        </div>

                        <FormControl>
                        <InputLabel htmlFor="outlined-adornment-amount">en pesos mexicanos</InputLabel>
                        <OutlinedInput
                            
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Salario deseado"
                        />

                        </FormControl>
                            <h2>Disponibilidad para comenzar a trabajar</h2>
                            <hr style={{'margin-bottom':'15px'}}/>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    format="DD - MM - YYYY"
                                    timezone="system"
                                    label="Disponible a partir de día"
                                    onChange={(e) => setNac(e.target.value)} 
                                    required/>
                                </LocalizationProvider>

                        </fieldset>

                    </form>
                    <br/>
                    <article>
                
                    <h1 className="instrucciones-reg">6. Confirmación y consentimiento</h1>
                

                
                    <p className="parrafo-reg">
                    Al completar este formulario, confirmas que la información proporcionada es verídica y autorizas a MQerKAcademy
                    a utilizar estos datos únicamente para fines relacionados con el proceso de reclutamiento y contratación, conforme
                    a la normativa de protección de datos aplicable. Por favor, firma digitalmente o marca la casilla de consentimiento
                    para proceder
                    </p>
                    </article>
                    
                    <form className="cent-form">

                        
                        <FormControl>
                        <h2>¿Autorizas a MQerKAcademy para almacenar y procesar tus datos personales de acuerdo con las políticas de privacidad?</h2>
                            <FormLabel id="radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={(e)=> setGen(e.target.value)}
                                    required
                                    style={{display:'flex', justifyContent:'space-around'}}
                                    >
                            
                                        <FormControlLabel value="y" control={<Radio />} label="Sí, autorizo el uso de mis datos" />
                                        <FormControlLabel style={{color:'red'}} value="n" control={<Radio />} label="No autorizo el uso de mis datos" />
                                        
                                </RadioGroup>
                        </FormControl>
                        <h2>Firma digital o nombre completo como confirmación de la veracidad de los datos proporcionados.</h2>

                    </form>

                
                    
            </main>
            <button className="btn-cont-reg">Finalizar</button>

            </body>
        </html>


)
}

export default Bienvenida;
//ruta: http://192.168.0.19:PORT/colab-info-pers
//App.jsx line 49

import NavLogin from "../../../components/NavLogin";
import { Municipios, Nacionalidad} from "./const.js";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';                    // Componentes importados
import { LocalizationProvider } from '@mui/x-date-pickers';    // para el date picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker';                        // .

import { Typography, TextField, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Autocomplete } from "@mui/material";


function InfoPer(){
const [dir, setDir] = useState('');
const [mun, setMun] = useState('');
const [nac, setNac] = useState('');
const [nacion, setNacion] = useState('');
const [gen, setGen] = useState('');
const [rfc, setRfc] = useState('');

const navigate = useNavigate();

const handleSubmit = (event) => {
event.preventDefault();

        const previo = {
            dir,
            mun,
            nac,
            nacion,
            gen,
            rfc
        }

        navigate('/colab-info-pers', { state: previo });

}

    
    function RFCInput() {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
      
        // Expresión regular para validar el RFC
    const rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-Z\d]{2}[A\d]$/i;
    
    const handleChange = (event) => {
    const newValue = event.target.value.toUpperCase(); // Convertir a mayúsculas automáticamente
    setValue(newValue);
      
        // Validar el valor actual con la expresión regular
        if (!rfcRegex.test(newValue)) {
        setError(true);
        } else{
        setError(false);
        }
        };

      return {value, error, handleChange};
    }

    const {value, error, handleChange}=RFCInput();
    
    
    return(

<html lang="es">
  <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
        <body>
           
            <NavLogin/>
            <main>
                <h1 className="encabezado-reg">Bienvenid@: Nombre de usuario </h1>      {/*Falta agregar la constante del usuario*/}
            


            
                <p className="parrafo-reg">
                Como parte de nuestro proceso de reclutamiento de asesores, es fundamental llevar un registro detallado.
                Por ello, te invitamos a completar cuidadosamente el formulario siguiendo las instrucciones proporcionadas.
                </p>
            


            
                <h1 className="instrucciones-reg">1. Información personal</h1>
            

            
                <p className="parrafo-reg">
                Por favor, completa cada campo de esta sección con tus datos personales de manera precisa y actualizada.
                Asegúrate de verificar la información antes de enviarla.
                </p>
                
            <form
            className="cent-form">

                {/* Direccion */}
                  <TextField
                    fullWidth
                    label="Dirección:" 
                    variant="outlined" 
                    name='direccion' 
                    onChange={(e) => setDir(e.target.value)} 
                    value={dir}
                    required
                  />

                {/* Municipio */}
                  <Autocomplete
                    disablePortal
                    options={Municipios}
                    renderInput={(params) => <TextField {...params} label="Municipio" />}
                    noOptionsText='Opción inválida'
                    onChange={(e) => setMun(e.target.value)} 
                    autoSelect
                    />

                {/* Fecha de nacimiento */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    format="DD - MM - YYYY"
                    timezone="system"
                    label="Fecha de nacimiento"
                    onChange={(e) => setNac(e.target.value)} 
                    required/>
                  </LocalizationProvider>

                {/* Nacionalidad */}
                  <Autocomplete
                    disablePortal
                    onChange={(e) => setNacion(e.target.value)} 
                    options={Nacionalidad}
                    renderInput={(params) => <TextField {...params} label="Nacionalidad" />}
                    />

                {/* Genero */}
                  <FormControl>
                    <FormLabel id="radio-buttons-group-label">Género</FormLabel>
                      <RadioGroup
                          row
                          aria-labelledby="radio-buttons-group-label"
                          name="radio-buttons-group"
                          onChange={(e)=> setGen(e.target.value)}
                          required
                          style={{display:'flex', flexDirection:'column'}}
                          >
                  
                              <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                              <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                              <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                              
                      </RadioGroup>
                    </FormControl>
                

                {/* RFC */}
                  <TextField required                    //Añadir paramentros
                            label="RFC"
                            variant="outlined"
                            value={value}
                            error={error}
                            onChange={(e)=> setRfc(e.target.value)}
                            helperText={error ? 'Ingresa un RFC válido' : ''}
                                                        
                            />
                    {!error && value && (
                    <Typography color="green" style={{ marginTop: '10px' }}>
                    RFC válido
                    </Typography>
                    )}
                
                
              
              
          </form>
          
        </main>
        <button className='footer-btn-index-colab'>Continuar</button>
        </body>
        </html>
)
}

export default InfoPer;
//ruta: http://192.168.1.20:PORT/colab-info-pers
//App.jsx line 49

import NavLogin from "../../../components/NavLogin";
import { Municipios, Nacionalidad} from "./const.js";
import React, {useState} from 'react';
import { useLocation } from "react-router-dom";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';                    // Componentes importados
import { LocalizationProvider } from '@mui/x-date-pickers';    // para el date picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker';                        // .

import {InputLabel, Select} from '@mui/material';      //Nuevo componente para listas
import { Typography, TextField, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Box } from "@mui/material";



function InfoPer(){

  const location = useLocation();
  const {previo} = location.state || {};

const [dir, setDir] = useState('');
const [mun, setMun] = useState('');
const [nac, setNac] = useState('');
const [nacion, setNacion] = useState('');
const [gen, setGen] = useState('');
const [rfc, setRfc] = useState('');
    
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


        <Box>
           
            <NavLogin/>
            
            <div>
                <h1 className="encabezado-reg">Bienvenid@ {previo.nombres} {previo.apellidos} </h1>      {/*Falta agregar la constante del usuario*/}
            


            
                <p className="parrafo-reg">
                Como parte de nuestro proceso de reclutamiento de asesores, es fundamental llevar un registro detallado.
                Por ello, te invitamos a completar cuidadosamente el formulario siguiendo las instrucciones proporcionadas.
                </p>
            


            
                <h1 className="instrucciones-reg">1. Información personal</h1>
            

            
                <p className="parrafo-reg">
                Por favor, completa cada campo de esta sección con tus datos personales de manera precisa y actualizada.
                Asegúrate de verificar la información antes de enviarla.
                </p>
                
            </div>

            
            <div className="form-index-colab">
            <form className='form-campos-colab'>

                {/* Direccion */}
                <div className='campos-card-index-colab'>
                  <TextField 
                      id="outlined-basic" 
                      label="Dirección:" 
                      variant="outlined" 
                      name='direccion'
                      sx={{width: '90%'}} 
                      onChange={(e) => setDir(e.target.value)} 
                      value={dir}
                      required
                  />
                </div>

                {/* Municipio */}
                <div className='campos-card-index-colab'>
                  <TextField 
                    id="outlined-basic" 
                    label="Municipio:" 
                    variant="outlined" 
                    name='municipio'
                    sx={{width: '90%'}} 
                    onChange={(e) => setMun(e.target.value)} 
                    value={mun}
                    required
                  />
                </div>

                {/* Fecha de nacimiento */}

                <div className='campos-card-index-colab'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                format="DD - MM - YYYY"
                sx={{width: '90%'}} 
                timezone="system"
                label="Fecha de nacimiento"
                onChange={(e)=>setNac(e.target.value)}
                required/>
                </LocalizationProvider>
                </div>

                {/* Nacionalidad */}
                <div className='campos-card-index-colab'>
                  <TextField 
                    id="outlined-basic" 
                    label="Nacionalidad:" 
                    variant="outlined" 
                    name='Nacion'
                    sx={{width: '90%'}} 
                    onChange={(e) => setNacion(e.target.value)} 
                    value={nacion}
                    required
                  />
                </div>

                {/* Genero */}
                <div className='campos-card-index-colab'>
                <FormControl>
                    <FormLabel id="radio-buttons-group-label">Género</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={(e)=> setGen(e.target.value)}
                        required
                        >
                
                            <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                        
                    </RadioGroup>
                    </FormControl>
                </div>
                

                {/* RFC */}
                <div className='campos-card-index-colab'>
                <TextField 
                    id="outlined-basic" 
                    label="RFC:" 
                    variant="outlined" 
                    name='RFC'
                    sx={{width: '90%'}} 
                    onChange={(e) => setRfc(e.target.value)} 
                    value={rfc}
                    required
                  />
                </div>

                
              
              <button type='submit' className='footer-btn-index-colab'>Continuar</button>
          </form>
        </div>
        </Box>


)
}

export default InfoPer;
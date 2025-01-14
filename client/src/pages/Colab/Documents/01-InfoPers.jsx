//ruta: http://192.168.1.20:PORT/colab-info-pers
//App.jsx line 49

import NavLogin from "../../../components/NavLogin";
import { Municipios, Nacionalidad} from "./const.js";
import React, {useState} from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';                    // Componentes importados
import { LocalizationProvider } from '@mui/x-date-pickers';    // para el date picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker';                        // .

import Autocomplete from '@mui/material/Autocomplete';      //Nuevo componente para listas
import { Typography, TextField, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Box } from "@mui/material";


function InfoPer(){
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
            
            <Box>
                <h1 className="encabezado-reg">Bienvenid@: Nombre de usuario </h1>      {/*Falta agregar la constante del usuario*/}
            


            
                <p className="parrafo-reg">
                Como parte de nuestro proceso de reclutamiento de asesores, es fundamental llevar un registro detallado.
                Por ello, te invitamos a completar cuidadosamente el formulario siguiendo las instrucciones proporcionadas.
                </p>
            

            <br/>

            
                <h1 className="instrucciones-reg">1. Información personal</h1>
            

            
                <p className="parrafo-reg">
                Por favor, completa cada campo de esta sección con tus datos personales de manera precisa y actualizada.
                Asegúrate de verificar la información antes de enviarla.
                </p>
                
            </Box>

            <main>
            <Box>
                <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
                noValidate
                autoComplete="off"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2} // Espaciado entre los componentes
                flexWrap="wrap" // Para manejar tamaños pequeños
                >
                
                
                <TextField
                    required
                    id="filled-multiline-flexible"
                    label="Direccion"
                    multiline
                    maxRows={8}
                />



                <Autocomplete
                    disablePortal
                    options={Municipios}
                    renderInput={(params) => <TextField {...params} label="Municipio" />}
                    noOptionsText='Opción inválida'
                    autoSelect
                    />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                format="DD - MM - YYYY"
                timezone="system"
                label="Fecha de nacimiento" />
                </LocalizationProvider>

                <Autocomplete
                    disablePortal
                    options={Nacionalidad}
                    renderInput={(params) => <TextField {...params} label="Nacionalidad" />}
                    />

                <FormControl>
                        <FormLabel id="radio-buttons-group-label">Género</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                        <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                        <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                    </RadioGroup>
                    </FormControl>


                <Box>
                <TextField  required                    //Añadir paramentros
                            label="RFC"
                            variant="outlined"
                            value={value}
                            onChange={handleChange}
                            error={error}
                            helperText={error ? 'Ingresa un RFC válido' : ''}
                            fullWidth
                            id="outlined-basic"
                            
                            />
                {!error && value && (
                <Typography color="green" style={{ marginTop: '10px' }}>
                RFC válido
                </Typography>
      )}
                </Box>
                </Box>

            <br />

                <button className="btn-cont-reg">Siguiente</button>
            </Box>
            </main>

        </Box>


)
}

export default InfoPer;
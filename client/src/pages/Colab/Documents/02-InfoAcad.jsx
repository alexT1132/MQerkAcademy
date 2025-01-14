//ruta: http://192.168.1.20:PORT/colab-info-acad
//App.jsx line 50

import NavLogin from "../../../components/NavLogin";
import { Instituciones } from "./const.js";
import * as React from 'react';
import { TextField, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Button, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Autocomplete from '@mui/material/Autocomplete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';                    // Componentes importados
import { LocalizationProvider } from '@mui/x-date-pickers';                         // para el date picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker';   




function Bienvenida(){
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 0,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 0,
      });

    
    
    return(

        <body
        className="contariner-info">
            <NavLogin/>

                <h1 className="instrucciones-reg">2. Información académica</h1>
            

            
                <p className="parrafo-reg">
                Proporciona los detalles de tu formación académica y certificaciones adicionales.
                Incluye información completa y específica sobre tu nivel de estudios, títulos obtenidos,
                idiomas que dominas y cualquier curso relevante que respalde tu experiencia profesional.
                </p>
            
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

            <FormControl
            required>
            <FormLabel id="radio-buttons-group-label">Nivel de estudios</FormLabel>
            <RadioGroup
            
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            >
            <FormControlLabel value="n1" control={<Radio />} label="Secundaria" />
            <FormControlLabel value="n2" control={<Radio />} label="Bachillerato" />
            <FormControlLabel value="n3" control={<Radio />} label="Licenciatura" />
            <FormControlLabel value="n4" control={<Radio />} label="Maestría" />
            <FormControlLabel value="n5" control={<Radio />} label="Doctorado" />
            {/* Falta agregar una manera de especificar el nivel de estudios */}
            <FormControlLabel value="otro" control={<Radio />} label="Otro" />  
            </RadioGroup>
            </FormControl>

            <Box>

                <Autocomplete
                    disablePortal
                    options={Instituciones}
                    renderInput={(params) => <TextField {...params} label="Institución" />}
                    noOptionsText='Opción inválida'
                    autoSelect
                    />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="oulined-basic"
                    label='Titulo académico'
                    helperText='Ejemplo: Ing. Sistemas Computacionales'
                    />
                
                <Button
                style={{'margin-bottom':'8%'}}
                component="label"
                variant="contained"
                fullWidth
                startIcon={<CloudUploadIcon />}
                >
                Archivo
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
                </Button>

                
            </Box>
            

            
            

            

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                openTo="year"
                format="YYYY"
                minDate={new Date('21-01-1900')}
                label="Año en que se graduó" />
                </LocalizationProvider> */}

            {/* Especialidad o area de estudios */}

            {/* Certificaciones o cursos adicionales
                la idea es que el colaborador pueda
                subir su certificado */}

            {/* Se va a añadir un checkbox para seleccionar el idioma
                que dominen */}
            
                
            </Box>
            <button className="btn-cont-reg">Siguiente</button>
            </body>
)
}
export default Bienvenida;
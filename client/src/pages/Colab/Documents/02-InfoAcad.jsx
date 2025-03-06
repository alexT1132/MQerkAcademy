//ruta: http://192.168.0.19:PORT/colab-info-acad
//App.jsx line 50

import NavLogin from "../../../components/NavLogin";
import { Instituciones, Estudios, Especialidad } from "./const.js";
import * as React from 'react';
import { TextField, Autocomplete, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

    <html lang="es">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body
        className="contariner-info">
            <NavLogin/>
            <main>
                <section>
                <h1 className="instrucciones-reg">2. Información académica</h1>
            

            
                <p className="parrafo-reg">
                Proporciona los detalles de tu formación académica y certificaciones adicionales.
                Incluye información completa y específica sobre tu nivel de estudios, títulos obtenidos,
                idiomas que dominas y cualquier curso relevante que respalde tu experiencia profesional.
                </p>
                </section>
            
            
            <form
            className="cent-form">
            
                <Autocomplete
                    disablePortal
                    options={Estudios}
                    renderInput={(params) => <TextField {...params} label="Nivel de estudios" />}
                    noOptionsText='Opción inválida'
                    autoSelect
                    />

                <Autocomplete
                    disablePortal
                    options={Instituciones}
                    renderInput={(params) => <TextField {...params} label="Institución" />}
                    noOptionsText='Opción inválida'
                    autoSelect
                    />

                {/* Especialidad o area de estudios */}
            
                <Autocomplete
                    fullWidth
                    disablePortal
                    options={Especialidad}
                    renderInput={(params) => <TextField {...params} label="Especialidad o área de estudios" />}
                    noOptionsText='Opción inválida'
                    autoSelect
                    />

                
                
            
            
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    openTo="year"
                    format="YYYY"
                    label="Año en que se graduó" />
                    </LocalizationProvider>

            
            

                <fieldset>
                <label>Título academico    
                <br />
                <Button
                    fullWidth
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    >
                
                Archivo
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
                </Button>
                </label>
                </fieldset>
            
            {/* Certificaciones adicionales */}
            <fieldset>
                <label>Certificaciones adicionales
                    <br />
                    <Button
                    fullWidth
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    >
                
                    Archivo
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                    />
                    </Button>
                </label>
            </fieldset>

            {/* idioma que dominan */}
            <FormGroup>Idiomas adicionales
                <FormControlLabel control={<Checkbox />} label="Inglés" />
                <FormControlLabel control={<Checkbox />} label="Japonés" />
                <FormControlLabel control={<Checkbox />} label="Francés" />
            </FormGroup>

            </form>
            </main>
            <button className="btn-cont-reg">Siguiente</button>
            </body>
            </html>
)
}
export default Bienvenida;
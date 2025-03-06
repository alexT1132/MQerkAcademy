import NavLogin from "../../../components/NavLogin"
import * as React from 'react';
import {Button, styled} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

function Bienvenida(){

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

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
                <h1 className="instrucciones-reg">4. Documentos personales y oficiales</h1>
            

            
                <p className="parrafo-reg">
                Adjunta en formato PDF los documentos personales y oficiales requeridos,  que respalde tu registro.
                Asegúrate de que todos los archivos sean legibles y estén actualizados
                </p>
            </article>

            <form
                className="cent-form"
                style={{
                    alignItems:'end',
                    'padding-top':'10%',
                    gap:'50px',
                    padding:'80px'
                }}
                >
                <label>
                    Identificación oficial (INE, pasaporte, cartilla militar, etc.):
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

                <label>
                    Comprobante de domicilio reciente (no más de 3 meses de antiguedad):
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

                <label>
                    Cédula de identificación fiscal SAT:
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

                <label>
                    Título o cédula profesional (en caso de aplicar):
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

                <label>
                    Comprobante de certificaciones adicionales: (OPCIONAL)
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

                <label>
                    Carta de recomendación laboral: (OPCIONAL)
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

                <label>
                    Currículum vitae actualizado:
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

                <label>
                    Fotografía tamaño pasaporte FORMAL (PNG,JPG):
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
            </form>
            </main>
            </body>

            
            <button className="btn-cont-reg">Siguiente</button>
    </html>


)
}

export default Bienvenida;
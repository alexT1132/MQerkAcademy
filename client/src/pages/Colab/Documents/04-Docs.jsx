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
                <h1 className="instrucciones-reg">4. Documentos personales y oficiales</h1>
            

            
                <p className="parrafo-reg">
                Adjunta en formato PDF los documentos personales y oficiales requeridos,  que respalde tu registro.
                Asegúrate de que todos los archivos sean legibles y estén actualizados
                </p>
            </div>
            <div>

                {/* Subir identificación oficial (INE, pasaporte, etc.):
                Subir comprobante de domicilio reciente:
                Subir la cédula de identificaciòn fiscal SAT:
                Subir título o cédula profesional (en caso de aplicar):
                Subir comprobante de certificaciones adicionales: (OPCIONAL)
                Subir carta de recomendación laboral: (OPCIONAL)
                Subir currículum vitae actualizado:
                Subir fotografía tamaño pasaporte FORMAL (PNG,JPG):
                
                Todo esto va a ser un react button (fileupload), son 8*/}

            
                <button className="btn-cont-reg">Siguiente</button>
            </div>

        </div>


)
}

export default Bienvenida;
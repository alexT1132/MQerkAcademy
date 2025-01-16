import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useLocation } from "react-router-dom";
import { useResult } from "../../context/ResultContext";

export default function ColumnGroupingTable() {

    const {Definicion} = useResult();

  const location = useLocation();
  const {DataBigFive, DataDass, DataZavic, DataBaron, ResultWais, ResultAcademica} = location.state || {};

  const resultBigfive = DataBigFive.Bigfive1 + DataBigFive.Bigfive2 + DataBigFive.Bigfive3 + DataBigFive.Bigfive4 + DataBigFive.Bigfive5
  + DataBigFive.Bigfive6 + DataBigFive.Bigfive7 + DataBigFive.Bigfive8 + DataBigFive.Bigfive9 + DataBigFive.Bigfive10 + 
  DataBigFive.Bigfive11 + DataBigFive.Bigfive12 + DataBigFive.Bigfive13 + DataBigFive.Bigfive14 + DataBigFive.Bigfive15 + DataBigFive.Bigfive16
  + DataBigFive.Bigfive17 + DataBigFive.Bigfive18 + DataBigFive.Bigfive19 + DataBigFive.Bigfive20;

  const resultDass = DataDass.Dass1 + DataDass.Dass2 + DataDass.Dass3 + DataDass.Dass4 + DataDass.Dass5 + DataDass.Dass6
  + DataDass.Dass7 + DataDass.Dass8 + DataDass.Dass9 + DataDass.Dass10 + DataDass.Dass11 + DataDass.Dass12 + DataDass.Dass13 
  + DataDass.Dass14 + DataDass.Dass15 + DataDass.Dass16 + DataDass.Dass17 + DataDass.Dass18 + DataDass.Dass19 + DataDass.Dass20 + DataDass.Dass21;

  const resultZavic = DataZavic.Zavic2 + DataZavic.Zavic4 + DataZavic.Zavic8 + DataZavic.Zavic10 + DataZavic.Zavic12 + DataZavic.Zavic14 + DataZavic.Zavic16 + DataZavic.Zavic18 + DataZavic.Zavic20 + DataZavic.Zavic22 + DataZavic.Zavic24 + DataZavic.Zavic26 + DataZavic.Zavic28 + DataZavic.Zavic30 + DataZavic.Zavic32 + DataZavic.Zavic34 + DataZavic.Zavic36 + DataZavic.Zavic38 + DataZavic.Zavic40 + DataZavic.Zavic42 + DataZavic.Zavic44 + DataZavic.Zavic46 + DataZavic.Zavic48 + DataZavic.Zavic50 + DataZavic.Zavic52 + DataZavic.Zavic54 + DataZavic.Zavic56 + DataZavic.Zavic58 + DataZavic.Zavic60;

  const resultBoron = DataBaron.Bornon1 + DataBaron.Bornon2 + DataBaron.Bornon3 + DataBaron.Bornon4 + DataBaron.Bornon5 + DataBaron.Bornon6 + DataBaron.Bornon7 + DataBaron.Bornon8 + DataBaron.Bornon9 + DataBaron.Bornon10 + DataBaron.Bornon11 + DataBaron.Bornon12 + DataBaron.Bornon13 + DataBaron.Bornon14 + DataBaron.Bornon15 + DataBaron.Bornon16 + DataBaron.Bornon17 + DataBaron.Bornon18 + DataBaron.Bornon19 + DataBaron.Bornon20 + DataBaron.Bornon21 + DataBaron.Bornon22 + DataBaron.Bornon23 + DataBaron.Bornon24 + DataBaron.Bornon25;

  const TotalPuntos = resultBigfive + resultDass + resultZavic + resultBoron + ResultWais + ResultAcademica;

  const aceptacionBigFive = (
    resultBigfive > 65 
  ) ? "Aceptado" : "Rechazado";

  const aceptacionDass = (
    resultDass <= 50 
  ) ? "Aceptado" : "Rechazado";

  const aceptacionZavic = (
    resultZavic <= 110 
  ) ? "Aceptado" : "Rechazado";

  const aceptacionBARON = (
    resultBoron >= 90 && 
    resultBoron <= 120
  ) ? "Aceptado" : "Rechazado";

  const aceptacionWais = (
    ResultWais >= 150 
  ) ? "Aceptado" : "Rechazado";

  const aceptacionAcademica = (
    ResultAcademica >= 150 &&
    ResultAcademica <= 200 
  ) ? "Aceptado" : "Rechazado";

const aceptacion = (
    resultBigfive > 65 &&
    resultDass <= 50 &&
    resultZavic <= 110 &&
    resultBoron >= 90 && 
    resultBoron <= 120 &&
    ResultWais >= 150 &&
    ResultAcademica >= 150 &&
    ResultAcademica <= 200 
  ) ? "Aceptado" : "Rechazado";

  Definicion(aceptacion);

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 580 }}>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell style={{ top: 57, textAlign: 'center' }}>
                  Test / Pruebas
                </TableCell>
                <TableCell style={{ top: 57, textAlign: 'center' }}>
                  Puntaje obtenido
                </TableCell>
                <TableCell style={{ top: 57, width: '40%', textAlign: 'center' }}>
                  Evaluación
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Test de personalidad
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacionBigFive === 'Aceptado' ? 'green' : aceptacionBigFive === 'Rechazado' ? 'red' : 'inherit'}}>
                    {resultBigfive}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}} >
                    Compatible con el perfil de asesor educativo
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Test DASS-21
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacionDass === 'Aceptado' ? 'green' : aceptacionDass === 'Rechazado' ? 'red' : 'inherit'}}>
                    {resultDass}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}} >
                    Dentro de rangos normales
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Test de zavic
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacionZavic === 'Aceptado' ? 'green' : aceptacionZavic === 'Rechazado' ? 'red' : 'inherit'}}>
                    {resultZavic}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}} >
                    Valores alineados con liderazgo y ética profesional
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Test de Inteligencia emocional
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacionBARON === 'Aceptado' ? 'green' : aceptacionBARON === 'Rechazado' ? 'red' : 'inherit'}}>
                    {resultBoron}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}} >
                    Adecuada capacidad de gestión emocional
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Test de WAIS
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacionWais === 'Aceptado' ? 'green' : aceptacionWais === 'Rechazado' ? 'red' : 'inherit'}}>
                    {ResultWais}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}} >
                    Inteligencia superior al promedio
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Prueba académica
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacionAcademica === 'Aceptado' ? 'green' : aceptacionAcademica === 'Rechazado' ? 'red' : 'inherit'}}>
                    {ResultAcademica}
                </TableCell>
                <TableCell sx={{textAlign: 'center'}} >
                    Excelencia de habilidades técnicas y académicas
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell sx={{textAlign: 'center'}}>
                    Total de puntos
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacion === 'Aceptado' ? 'green' : aceptacion === 'Rechazado' ? 'red' : 'inherit'}}>
                    {TotalPuntos}
                </TableCell>
                <TableCell sx={{textAlign: 'center', fontWeight: 600, color: aceptacion === 'Aceptado' ? 'green' : aceptacion === 'Rechazado' ? 'red' : 'inherit'}} >
                    {aceptacion}
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

import {useState} from 'react'
import TopBar from "../../components/NavLogin";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

function Form() {

    const [step, setStep] = useState(1);
    // OPCIONES MULTIPLES
    const [isChecked, setIsChecked] = useState('');
    const [estado, setEstado] = useState({});

    // OPCIONES MULTIPLES
    const [isClase, setIsClase] = useState('');
    const [estadoClase, setEstadoClase] = useState({});

    const checkboxOptions1 = ['Español', 'Ingles', 'Frances'];

    const checkboxClases = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

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

      const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
        if (isChecked) {
          setInputValue('');
        }
      };

    const nextStep = () => {
        setStep(step + 1);
      };
    
      const prevStep = () => {
        setStep(step - 1);
      };

  return (
    <div>
        <TopBar />
        <div className="form-colab-page">
            <div className="div-title-form-colab">
                <h1 className="titulo-form-colab">ENTRENAMIENTO PARA EL EXAMEN DE ADMISIÓN</h1>
            </div>
            <div className="form-section-colab">
                <div className="form-container-colab">
                    {step === 1 && (
                        <form onSubmit={nextStep}>
                            <ul className="step-wizard-list">
                                <li className="step-wizard-item">
                                    <span className="progress-count-selected">1</span>
                                    <span className="progress-label">Datos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">2</span>
                                    <span className="progress-label">Datos académicos</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">3</span>
                                    <span className="progress-label">Datos profesionales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">4</span>
                                    <span className="progress-label">Documentos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">5</span>
                                    <span className="progress-label">Informacion adicional</span>
                                </li>
                            </ul>
                        <div>
                        <div className="steps-container-inputs">
                            <br />
                            <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Nombre completo:"
                                        name="nombres" 
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        type='email'
                                        id="outlined-basic" 
                                        label="Correo electronico:" 
                                        name="correo"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Numero de telefono:" 
                                        name="telefono"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Fecha de nacimiento:"
                                        name="fecha"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Direccion completa:" 
                                        name="domicilio"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Nacionalidad:" 
                                        name="nacionalidad"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Genero:" 
                                        name="genero"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Estado civil:" 
                                        name="estadoCivil"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="RFC:" 
                                        name="rfc"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            </div>
                            <div className="control-btns-steps-one">
                            <button type="submit" className="btn-next-step-one">Siguiente</button>
                            </div>
                        </div>
                        </div>
                        </form>
                    )}
                    {step === 2 && (
                        <form onSubmit={nextStep}>
                            <ul className="step-wizard-list">
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">1</span>
                                    <span className="progress-label">Datos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-selected">2</span>
                                    <span className="progress-label">Datos académicos</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">3</span>
                                    <span className="progress-label">Datos profesionales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">4</span>
                                    <span className="progress-label">Documentos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">5</span>
                                    <span className="progress-label">Informacion adicional</span>
                                </li>
                            </ul>
                        <div>
                        <div className="steps-container-inputs">
                            <br />
                            <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Nivel maximo de estudios:</InputLabel>
                                            <Select
                                            name="estudios"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Nivel maximo de estudios:"
                                            >
                                                <MenuItem value='Secundaria'>Secundaria</MenuItem>
                                                <MenuItem value='Bachillerato'>Bachillerato</MenuItem>
                                                <MenuItem value='Licenciatura'>Licenciatura</MenuItem>
                                                <MenuItem value='Maestria'>Maestria</MenuItem>
                                                <MenuItem value='Doctorado'>Doctorado</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Titulo academico de:" 
                                        name="titulo"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Institucion educativa:" 
                                        name="institucion"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Año de graduacion:" 
                                        name="graduacion"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Certificaciones o cursos adicionales:" 
                                        name="certificacion"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <FormGroup>
                                        <h3>Indica el o los idiomas que dominas:</h3>
                                        <br />
                                        <Grid item xs={12}>
                                            <div className="contenedor-opcionesmultiples">
                                            {checkboxOptions1.map((option) => (
                                        <div key={option}>
                                            <input
                                            type="checkbox"
                                            name={option}
                                            checked={estado[option] || false}
                                            />
                                            <label htmlFor={option}>{option}</label>
                                        </div>
                                        ))}
                                        <div className="section-checkbox-aparte">
                                            <input type="checkbox" className="checkbox-aparte" checked={isChecked} onChange={(e) => handleCheckboxChange(e.target.value)} />
                                            <label htmlFor='Otro'>Otro</label>
                                        </div>
                                            </div>
                                        </Grid>
                                        </FormGroup>
                                    </Grid>
                                    {isChecked && (
                                        <Grid item xs={12}>
                                            <TextField 
                                            id="outlined-basic" 
                                            label="Especifica cual" 
                                            name="otroidioma"
                                            variant="outlined" 
                                            sx={{width: '100%'}} 
                                            />
                                        </Grid>
                                    )}
                                    <Grid item xs={12}>
                                    <FormGroup>
                                        <h3>Indica el o los idiomas que dominas:</h3>
                                        <br />
                                            <div className="contenedor-opcionesmultiples">
                                            {checkboxClases.map((dia) => (
                                        <div key={dia}>
                                            <input
                                            type="checkbox"
                                            name={dia}
                                            checked={estadoClase[dia] || false}
                                            />
                                            <label htmlFor={dia}>{dia}</label>
                                        </div>
                                        ))}
                                            </div>
                                        </FormGroup>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Disponibilidad de horario:</InputLabel>
                                            <Select
                                            name="disponibilidad"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Disponibilidad de horario:"
                                            >
                                                <MenuItem value='Mañanas (8:00 am - 12:00 pm)'>Mañanas (8:00 am - 12:00 pm)</MenuItem>
                                                <MenuItem value='Tardes (12:00 pm - 5:00 pm)'>Tardes (12:00 pm - 5:00 pm)</MenuItem>
                                                <MenuItem value='Noches (5:00 pm - 9:00 pm)'>Noches (5:00 pm - 9:00 pm)</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            </div>
                            <div className="control-btns-steps">
                                <button type="button" className="btn-next-step" onClick={prevStep}>Anterior</button>
                                <button type="submit" className="btn-next-step">Siguiente</button>
                            </div>
                        </div>
                        </div>
                        </form>
                    )}
                    {step === 3 && (
                        <form onSubmit={nextStep}>
                            <ul className="step-wizard-list">
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">1</span>
                                    <span className="progress-label">Datos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">2</span>
                                    <span className="progress-label">Datos académicos</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-selected">3</span>
                                    <span className="progress-label">Datos profesionales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">4</span>
                                    <span className="progress-label">Documentos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">5</span>
                                    <span className="progress-label">Informacion adicional</span>
                                </li>
                            </ul>
                        <div>
                        <div className="steps-container-inputs">
                            <br />
                            <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Experiencia laboral:</InputLabel>
                                            <Select
                                            name="experiencia"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Nivel maximo de estudios:"
                                            >
                                                <MenuItem value='SecundMenos de 1 año'>Menos de 1 año</MenuItem>
                                                <MenuItem value='1-2 años'>1-2 años</MenuItem>
                                                <MenuItem value='3-5 años'>3-5 años</MenuItem>
                                                <MenuItem value='Más de 5 años'>Más de 5 años</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Áreas de especialización:</InputLabel>
                                            <Select
                                            name="especializacion"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Áreas de especialización:"
                                            >
                                                <MenuItem value='Ciencias exactas'>Ciencias exactas</MenuItem>
                                                <MenuItem value='Ciencias sociales'>Ciencias sociales</MenuItem>
                                                <MenuItem value='Educación'>Educación</MenuItem>
                                                <MenuItem value='Ingeniería y tecnología'>Ingeniería y tecnología</MenuItem>
                                                <MenuItem value='Medicina y salud'>Medicina y salud</MenuItem>
                                                <MenuItem value='Arte y humanidades'>Arte y humanidades</MenuItem>
                                                <MenuItem value='Negocios y administración'>Negocios y administración</MenuItem>
                                                <MenuItem value='Otro'>Otro</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Experiencia previa en asesorías o tutorías educativas:" 
                                        name="titulo"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Nombre de la institución o empresa actual:" 
                                        name="titulo"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Puesto actual:" 
                                        name="titulo"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField 
                                        id="outlined-basic" 
                                        label="Descripción breve de funciones:" 
                                        name="titulo"
                                        variant="outlined" 
                                        sx={{width: '100%'}} 
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Conocimientos en plataformas educativas digitales:</InputLabel>
                                            <Select
                                            name="plataformas"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Conocimientos en plataformas educativas digitales:"
                                            >
                                                <MenuItem value='Google Classroom'>Google Classroom</MenuItem>
                                                <MenuItem value='Microsoft Teams'>Microsoft Teams</MenuItem>
                                                <MenuItem value='Zoom'>Zoom</MenuItem>
                                                <MenuItem value='Moodle'>Moodle</MenuItem>
                                                <MenuItem value='Edmodo'>Edmodo</MenuItem>
                                                <MenuItem value='Otra'>Otra</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            </div>
                            <div className="control-btns-steps">
                                <button type="button" className="btn-next-step" onClick={prevStep}>Anterior</button>
                                <button type="submit" className="btn-next-step">Siguiente</button>
                            </div>
                        </div>
                        </div>
                        </form>
                    )}
                    {step === 4 && (
                        <form onSubmit={nextStep}>
                            <ul className="step-wizard-list">
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">1</span>
                                    <span className="progress-label">Datos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">2</span>
                                    <span className="progress-label">Datos académicos</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">3</span>
                                    <span className="progress-label">Datos profesionales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-selected">4</span>
                                    <span className="progress-label">Documentos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count">5</span>
                                    <span className="progress-label">Información Adicional</span>
                                </li>
                            </ul>
                        <div>
                        <div className="steps-container-inputs">
                            <br />
                            <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir identificación oficial (INE, pasaporte, etc.)</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir comprobante de domicilio reciente:</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir la cédula de identificaciòn fiscal SAT</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir título o cédula profesional (en caso de aplicar)</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir comprobante de certificaciones adicionales (OPCIONAL)</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir carta de recomendación laboral (OPCIONAL)</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir currículum vitae actualizado</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                        sx={{width: '90%'}}
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        <p>Subir fotografía tamaño pasaporte FORMAL (PNG, JPG)</p>
                                        <VisuallyHiddenInput
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            </div>
                            <div className="control-btns-steps">
                                <button type="button" className="btn-next-step" onClick={prevStep}>Anterior</button>
                                <button type="submit" className="btn-next-step">Siguiente</button>
                            </div>
                        </div>
                        </div>
                        </form>
                    )}
                    {step === 5 && (
                        <form onSubmit={nextStep}>
                            <ul className="step-wizard-list">
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">1</span>
                                    <span className="progress-label">Datos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">2</span>
                                    <span className="progress-label">Datos académicos</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">3</span>
                                    <span className="progress-label">Datos profesionales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-finish">4</span>
                                    <span className="progress-label">Documentos personales</span>
                                </li>
                                <li className="step-wizard-item">
                                    <span className="progress-count-selected">5</span>
                                    <span className="progress-label">Información Adicional</span>
                                </li>
                            </ul>
                        <div>
                        <div className="steps-container-inputs">
                            <br />
                            <div className="container-steps">
                            <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">¿Cómo te enteraste de MQerKAcademy?</InputLabel>
                                            <Select
                                            name="estudios"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="¿Cómo te enteraste de MQerKAcademy?"
                                            >
                                                <MenuItem value='Redes sociales'>Redes sociales</MenuItem>
                                                <MenuItem value='Facebook'>Facebook</MenuItem>
                                                <MenuItem value='Instagram'>Instagram</MenuItem>
                                                <MenuItem value='Recomendaciones de un amigo/colega'>Recomendaciones de un amigo/colega</MenuItem>
                                                <MenuItem value='Publicidad en linea'>Publicidad en linea</MenuItem>
                                                <MenuItem value='Evento o feria educativa'>Evento o Feria educativa</MenuItem>
                                                <MenuItem value='Pagina web'>Pagina web</MenuItem>
                                                <MenuItem value='Otro'>Otro</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">¿Por qué te gustaría ser asesor en MQerKAcademy?</InputLabel>
                                            <Select
                                            name="estudios"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="¿Por qué te gustaría ser asesor en MQerKAcademy?"
                                            >
                                                <MenuItem value='Contribuir a la educación'>Contribuir a la educación</MenuItem>
                                                <MenuItem value='Desarrollo profesional'>Desarrollo profesional</MenuItem>
                                                <MenuItem value='Interés en ciencias y tecnología'>Interés en ciencias y tecnología</MenuItem>
                                                <MenuItem value='Flexibilidad horaria'>Flexibilidad horaria</MenuItem>
                                                <MenuItem value='Otro'>Otro</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">¿Estarías dispuesto a participar en formaciones continuas o capacitaciones internas?</InputLabel>
                                            <Select
                                            name="estudios"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="¿Estarías dispuesto a participar en formaciones continuas o capacitaciones internas?"
                                            >
                                                <MenuItem value='Si'>Si</MenuItem>
                                                <MenuItem value='No'>No</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            </div>
                            <div className="control-btns-steps">
                                <button type="button" className="btn-next-step" onClick={prevStep}>Anterior</button>
                                <button type="submit" className="btn-next-step">Finalizar</button>
                            </div>
                        </div>
                        </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
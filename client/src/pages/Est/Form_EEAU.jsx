import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/joy/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Topbar from "../../components/TopBar";
import Textarea from '@mui/joy/Textarea';
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";
import { useCounter } from "../../context/CounterContext";
import { useEeau } from "../../context/EeauContext";
import { useNavigate } from "react-router-dom";

function Form_EEAU() {

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

  const {user} = useAuth();

  const {getDataCounterEEAU, contador, createCounter} = useCounter();

  const navigate = useNavigate();

  const {createEEAU, createFoto, foto, acceso} = useEeau();

  // INFORMACION DE LOS FORMULARIOS

    const [step, setStep] = useState(1);
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [comunidad, setComunidadSeleccionada] = useState('');
    const [otraComunidad, setOtraComunidad] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tutor, setTutor] = useState('');
    const [telefonoTutor, setTelefonoTutor] = useState('');
    const [na, setNaSeleccionado] = useState('');
    const [otroNa, setOtroNa] = useState('');
    const [grado, setGradoSeleccionado] = useState('');
    const [discapacidad, setDiscapacidadSeleccionada] = useState('');
    const [otraDiscapacidad, setOtraDiscapacidad] = useState('');
    const [orientacion, setOrientacionSeleccionada] = useState('');
    const [otraUni, setOtraUniSeleccionada] = useState('');
    const [licenciatura, setLicenciaturaSeleccionada] = useState('');
    const [grupo, setGrupoSeleccionado] = useState('');
    const [modalidad, setModalidadSeleccionada] = useState('');
    const [pago, setPagoSeleccionado] = useState('');
    const [tipoPago, setTipoPagoSeleccionado] = useState('');
    const [duracion, setDuracion] = useState('');
    const [opcional1, setOpcional1] = useState('');
    const [opcional2, setOpcional2] = useState('');

    const [curso, setCurso] = useState('eeau');


    // Manejar el cambio en los checkboxes
    const handleUniversidades = (event) => {
    const { name, checked } = event.target;
    setEstado((prev) => ({ ...prev, [name]: checked })); // Actualizar el estado del checkbox
  }


    // OPCIONES MULTIPLES
    const [isChecked, setIsChecked] = useState('');
    const [estado, setEstado] = useState({}); // Estado para checkboxes

    // Obtener las claves del objeto
    const universidades = Object.keys(estado);

    // Opciones para los checkboxes
  const checkboxOptions1 = ['UNAM', 'IPN', 'UV', 'BUAP', 'NAVAL', 'UDG', 'UNPA', 'ITTUX'];
  const checkboxOptions2 = ['TECNM', 'ANAHUAC', 'UAQ', 'UDLAP', 'NORMAL SUPERIOR'];

  // Obtener los últimos dos dígitos del año
  const year = new Date().getFullYear().toString().slice(-2);

  // Estado para el folio y el contador
  const [folio, setFolio] = useState('');
  const [counter, setCounter] = useState('');


  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    if (isChecked) {
      setInputValue(''); // Limpiar el input si se desmarca
    }
  };


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Manejador de evento para cada campo de texto
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  // Manejador de evento para la foto de perfil
  const handleImageChange = (e) => {
    createFoto(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(telefono === telefonoTutor){

      Swal.fire({
        title: "Error",
        text: "Los números de teléfono coinciden",
        icon: "error"
      });

    } else {

      const formData = new FormData();
      formData.append('nombres', nombres);
      formData.append('apellidos', apellidos);
      formData.append('comunidad', comunidad);
      formData.append('otraComunidad', otraComunidad);
      formData.append('correo', correo);
      formData.append('telefono', telefono);
      formData.append('tutor', tutor);
      formData.append('telefonoTutor', telefonoTutor);
      formData.append('foto', foto);
      formData.append('na', na);
      formData.append('otroNa', otroNa);
      formData.append('grado', grado);
      formData.append('discapacidad', discapacidad);
      formData.append('otraDiscapacidad', otraDiscapacidad);
      formData.append('orientacion', orientacion);
      formData.append('universidades', universidades);
      formData.append('otraUni', otraUni);
      formData.append('licenciatura', licenciatura);
      formData.append('grupo', grupo);
      formData.append('modalidad', modalidad);
      formData.append('pago', pago);
      formData.append('tipoPago', tipoPago);
      formData.append('duracion', duracion);
      formData.append('opcional1', opcional1);
      formData.append('opcional2', opcional2);
      formData.append('folio', folio);
      formData.append('usuario', user.id);

      const formDataCounter = {
        client: user.id,
        curso,
        año: year,
        codigo: counter
      }

      createEEAU(formData);

      createCounter(formDataCounter);

    }

  };

  useEffect(() => {
    if(acceso) navigate('/entrenamiento_examen_admision_universidad');
  }, [acceso]);

  useEffect(() => {
    if (!contador){
      setCounter('0001');
      setFolio(`MEEAU${year}-${counter}`)
    } else 
    if(contador.codigo){
      const nuevoCodigo = (parseInt(contador.codigo, 10) + 1).toString().padStart(4, '0');
      setCounter(nuevoCodigo);
      setFolio(`MEEAU${year}-${counter}`)
    }
  })

  useEffect(() => {
    getDataCounterEEAU();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la ventana al inicio de la página
  }, []);


  return (
    <div>
      <Topbar />
      <div className="form-eeau-page">
      <div className="div-title-formPage">
        <h1 className="titulo-form">ENTRENAMIENTO PARA EL EXAMEN DE ADMISIÓN</h1>
        <h1 className="titulo-form">A LA UNIVERSIDAD</h1>
      </div>
      <div className="folio-section">
        <h2>{folio}</h2>
      </div>
      <div className="section-subtitle">
        <div className="subtitle">
          <h3 className="form-inscription-title">Formulario de inscripción</h3>
        </div>
      </div>
      <div className="form-section-eeau">
        <div className="form-container-eeau">
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
                <span className="progress-label">Datos del curso</span>
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
            label="Nombre(s):"
            name="nombres" 
            value={nombres} 
            onChange={(e) => handleChange(e, setNombres)}
            variant="outlined" 
            sx={{width: '100%'}} 
            required
            />
        </Grid>
        <Grid item xs={6}>
            <TextField 
            id="outlined-basic" 
            label="Apellidos:" 
            name="apellidos"
            value={apellidos} 
            onChange={(e) => handleChange(e, setApellidos)}
            variant="outlined" 
            sx={{width: '100%'}} 
            required
            />
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">Municipio o comunidad:</InputLabel>
                <Select
                onChange={(e) => handleChange(e, setComunidadSeleccionada)}
                value={comunidad}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Municipio o comunidad:"
                >
                <MenuItem value='San Juan Bautista Tuxtepec'>San Juan Bautista Tuxtepec</MenuItem>
                <MenuItem value='San José Chiltepec'>San José Chiltepec</MenuItem>
                <MenuItem value='Santa María Jacatepec'>Santa María Jacatepec</MenuItem>
                <MenuItem value='Ayotzintepec'>Ayotzintepec</MenuItem>
                <MenuItem value='Loma Bonita'>Loma Bonita</MenuItem>
                <MenuItem value='San Lucas Ojitlán'>San Lucas Ojitlán</MenuItem>
                <MenuItem value='San Juan Bautista Valle Nacional'>San Juan Bautista Valle Nacional</MenuItem>
                <MenuItem value='Otra'>Otra</MenuItem>
                </Select>
        </FormControl>
        </Grid>
        {comunidad === 'Otra' && (
        <Grid item xs={12}>
            <TextField 
            id="outlined-basic" 
            label="Indica cuál:" 
            name="otraComunidad"
            value={otraComunidad} 
            onChange={(e) => handleChange(e, setOtraComunidad)}
            variant="outlined" 
            sx={{width: '100%'}} 
            />
        </Grid>
        )}
        <Grid item xs={6}>
            <TextField 
            type="email"
            id="outlined-basic" 
            label="Correo electrónico:" 
            name="correo"
            value={correo} 
            onChange={(e) => handleChange(e, setCorreo)} 
            variant="outlined" 
            sx={{width: '100%'}} 
            required
            />
        </Grid>
        <Grid item xs={6}>
            <TextField 
            id="outlined-basic" 
            label="Tu número de teléfono:"
            name="telefono"
            value={telefono} 
            onChange={(e) => handleChange(e, setTelefono)}
            variant="outlined" 
            sx={{width: '100%'}} 
            required
            />
        </Grid>
        <Grid item xs={6}>
            <TextField 
            id="outlined-basic" 
            label="Nombre del tutor:" 
            name="tutor"
            value={tutor} 
            onChange={(e) => handleChange(e, setTutor)}
            variant="outlined" 
            sx={{width: '100%'}} 
            required
            />
        </Grid>
        <Grid item xs={6}>
            <TextField 
            id="outlined-basic" 
            label="Número de teléfono del tutor:" 
            name="telefonoTutor"
            value={telefonoTutor} 
            onChange={(e) => handleChange(e, setTelefonoTutor)}
            variant="outlined" 
            sx={{width: '100%'}} 
            required
            />
        </Grid>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px'}}>
          <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        {foto !== null && (
          <p>Foto subida exitosamente</p>
        )}
        {foto === null && (
          <p>Subir foto de perfil</p>
        )}
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          multiple
        />
      </Button>
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
                  <span className="progress-label">Datos del curso</span>
                </li>
              </ul>
              <div>
            <div className="steps-container-inputs">
              <br />
              <div className="container-steps">
                <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Nivel académico actual o cursado:</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setNaSeleccionado)}
                  value={na}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Nivel académico actual o cursado:"
                  >
                  <MenuItem value='CBTis'>CBTis</MenuItem>
                  <MenuItem value='COBAO'>COBAO</MenuItem>
                  <MenuItem value='CONALEP'>CONALEP</MenuItem>
                  <MenuItem value='CBTF'>CBTF</MenuItem>
                  <MenuItem value='CBTA'>CBTA</MenuItem>
                  <MenuItem value='CECYTE'>CECYTE</MenuItem>
                  <MenuItem value='IEBO'>IEBO</MenuItem>
                  <MenuItem value='COLEGIO AMÉRICA'>COLEGIO AMÉRICA</MenuItem>
                  <MenuItem value='COLEGIO TUXTEPEC'>COLEGIO TUXTEPEC</MenuItem>
                  <MenuItem value='OTRA'>OTRA</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          {na === 'OTRA' && (
          <Grid item xs={12}>
              <TextField 
              id="outlined-basic" 
              label="Indica cuál:" 
              name="otraNa"
              value={otroNa} 
              onChange={(e) => handleChange(e, setOtroNa)}
              variant="outlined" 
              sx={{width: '100%'}} 
              />
          </Grid>
          )}
          <Grid item xs={12}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Grado o semestre:</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setGradoSeleccionado)}
                  value={grado}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Grado o semestre:"
                  >
                  <MenuItem value='5to semestre'>5to semestre</MenuItem>
                  <MenuItem value='6to semestre'>6to semestre</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">¿Sufres de alguna discapacidad o trastorno?</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setDiscapacidadSeleccionada)}
                  value={discapacidad}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="¿Sufres de alguna discapacidad o trastorno?"
                  >
                  <MenuItem value='Ninguna'>Ninguna</MenuItem>
                  <MenuItem value='Trastornos de aprendizaje (Dislexia)'>Trastornos de aprendizaje (Dislexia)</MenuItem>
                  <MenuItem value='Trastorno por déficit de atención e hiperactividad (TDAH)'>Trastorno por déficit de atención e hiperactividad (TDAH)</MenuItem>
                  <MenuItem value='Trastornos del espectro autista (TEA)'>Trastornos del espectro autista (TEA)</MenuItem>
                  <MenuItem value='Trastornos de ansiedad'>Trastornos de ansiedad</MenuItem>
                  <MenuItem value='Trastornos del estado de ánimo'>Trastornos del estado de ánimo</MenuItem>
                  <MenuItem value='Trastornos de la conducta'>Trastornos de la conducta</MenuItem>
                  <MenuItem value='Trastornos del procesamiento sensorial'>Trastornos del procesamiento sensorial</MenuItem>
                  <MenuItem value='Dificultades de comunicación'>Dificultades de comunicación</MenuItem>
                  <MenuItem value='Discapacidad física'>Discapacidad física</MenuItem>
                  <MenuItem value='Otro'>Otro</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          {discapacidad === 'Otro' && (
          <Grid item xs={12}>
              <TextField 
              id="outlined-basic" 
              label="Indica cuál:" 
              name="otraDiscapacidad"
              value={otraDiscapacidad} 
              onChange={(e) => handleChange(e, setOtraDiscapacidad)}
              variant="outlined" 
              sx={{width: '100%'}} 
              />
          </Grid>
          )}
          <Grid item xs={12}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">¿Ocupas orientación vocacional para determinar a qué universidad y licenciatura elegir?</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setOrientacionSeleccionada)}
                  value={orientacion}
                  name="orientacion"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="¿Ocupas orientación vocacional para determinar a qué universidad y licenciatura elegir?"
                  >
                  <MenuItem value='Si'>Si</MenuItem>
                  <MenuItem value='No'>No</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          {orientacion === 'No' && (
          <Grid item xs={12}>
            <FormGroup>
              <h3>Indica la o las universidades a las cuales te postulas</h3>
              <br />
              <Grid item xs={12}>
                <div className="contenedor-opcionesmultiples">
                {checkboxOptions1.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  name={option}
                  checked={estado[option] || false}
                  onChange={handleUniversidades}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
                </div>
              </Grid>
              <br />
              <Grid item xs={12}>
              <div className="contenedor-opcionesmultiples-two">
                {checkboxOptions2.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  name={option}
                  checked={estado[option] || false}
                  onChange={handleUniversidades}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
                  <div className="section-checkbox-aparte">
                    <input type="checkbox" className="checkbox-aparte" checked={isChecked} onChange={(e) => handleCheckboxChange(e.target.value)} />
                    <label htmlFor='OTRA(S)'>OTRA(S)</label>
                  </div>
                </div>
              </Grid>
            </FormGroup>
          </Grid>
          )}
          {isChecked && (
          <Grid item xs={12}>
            <TextField 
            id="outlined-basic" 
            label="Indica cual(es)" 
            name="otraUni"
            value={otraUni} 
            onChange={(e) => handleChange(e, setOtraUniSeleccionada)}
            variant="outlined" 
            sx={{width: '100%'}} 
            />
          </Grid>
        )}
          {orientacion === 'No' && (
          <Grid item xs={12}>
            <TextField 
            id="outlined-basic" 
            label="¿A qué licenciatura te postulas?" 
            name="licenciatura"
            value={licenciatura} 
            onChange={(e) => handleChange(e, setLicenciaturaSeleccionada)}
            variant="outlined" 
            sx={{width: '100%'}} 
            />
          </Grid>
          )}
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
          <form onSubmit={handleSubmit}>
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
                  <span className="progress-label">Datos del curso</span>
                </li>
              </ul>
              <br />
              <div className="container-steps">
                <Box sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Grupo:</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setGrupoSeleccionado)}
                  value={grupo}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Grupo:"
                  >
                  <MenuItem value='Matutino M1'>Matutino M1</MenuItem>
                  <MenuItem value='Matutino M2'>Matutino M2</MenuItem>
                  <MenuItem value='Vespertino V1'>Vespertino V1</MenuItem>
                  <MenuItem value='Vespertino V2'>Vespertino V2</MenuItem>
                  <MenuItem value='Sabatino S1'>Sabatino S1</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Modalidad:</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setModalidadSeleccionada)}
                  value={modalidad}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Modalidad:"
                  >
                  <MenuItem value='Presencial'>Presencial</MenuItem>
                  <MenuItem value='Virtual'>Virtual</MenuItem>
                  <MenuItem value='Mixta'>Mixta</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Plan de pago del curso:</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setPagoSeleccionado)}
                  value={pago}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Plan de pago del curso:"
                  >
                  <MenuItem value='MENSUAL DE $1,500'>MENSUAL DE $1,500 MXN</MenuItem>
                  <MenuItem value='PLAN START DOS PAGOS DE $5,500.OO MXN'>PLAN START DOS PAGOS DE $5,500 MXN</MenuItem>
                  <MenuItem value='PLAN PREMIUM ÚNICO PAGO DE $10,400'>PLAN PREMIUM ÚNICO PAGO DE $10,400 MXN</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Forma de pago:</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setTipoPagoSeleccionado)}
                  value={tipoPago}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="¿Ocupas orientación vocacional para determinar a qué universidad y licenciatura elegir?"
                  >
                  <MenuItem value='Efectivo'>Efectivo</MenuItem>
                  <MenuItem value='Transferencia'>Transferencia</MenuItem>
                  <MenuItem value='Deposito'>Deposito</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">Duración (Meses):</InputLabel>
                  <Select
                  onChange={(e) => handleChange(e, setDuracion)}
                  value={duracion}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Duración (Meses):"
                  >
                  <MenuItem value='8'>8</MenuItem>
                  <MenuItem value='7'>7</MenuItem>
                  <MenuItem value='6'>6</MenuItem>
                  <MenuItem value='5'>5</MenuItem>
                  <MenuItem value='4'>4</MenuItem>
                  <MenuItem value='3'>3</MenuItem>
                  <MenuItem value='2'>2</MenuItem>
                  <MenuItem value='1'>1</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl fullWidth>
                  <FormLabel>¿Qué cambio quieres lograr en tu país con una acción de acuerdo al finalizar tu carrera profesional? (OPCIONAL)</FormLabel>
                  <Textarea placeholder="Escribe tu respuesta..." value={opcional1} onChange={(e) => handleChange(e, setOpcional1)} minRows={2} />
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl fullWidth>
                  <FormLabel>Agrega un comentario de lo que esperas de nosotros: (OPCIONAL)</FormLabel>
                  <Textarea placeholder="Escribe tu respuesta..." value={opcional2} onChange={(e) => handleChange(e, setOpcional2)} minRows={2} />
              </FormControl>
          </Grid>
        </Grid>
                </Box>
              </div>
              <div className="control-btns-steps">
                <button type="button" className="btn-next-step" onClick={prevStep}>Anterior</button>
                <button type="submit" className="btn-next-step">Finalizar</button>
              </div>
          </form>
        )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form_EEAU
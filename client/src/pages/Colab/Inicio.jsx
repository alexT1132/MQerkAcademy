import {useState} from 'react'
import Nav from "../../components/NavLogin";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from "react-router-dom";

function index() {

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [area, setArea] = useState('');
  const [estudios, setEstudios] = useState('');
  const [identificador, setIdentificador] = useState('');

      const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

            const previo = {
              nombres,
              apellidos,
              correo,
              telefono,
              area,
              estudios,
              identificador
            }

            navigate('/welcome-colab', { state: previo });

    }


  return (
    
    <div>
      <Nav />
      <div className="index-colab-page">
        <div className="title-index-colab">
          <h1 className='registro-previo-title'>Registro previo de datos generales</h1>
        </div>
        <div className="form-index-colab">
          <form className='form-campos-colab' onSubmit={handleSubmit}>
              <div className='card-index-colab'>
                <div className='campos-card-index-colab'>
                  <TextField 
                      id="outlined-basic" 
                      label="Nombre(s):" 
                      variant="outlined" 
                      name='nombre'
                      sx={{width: '90%'}} 
                      onChange={(e) => setNombres(e.target.value)} 
                      value={nombres}
                      required
                  />
                </div>
                <div className='campos-card-index-colab'>
                  <TextField 
                    id="outlined-basic" 
                    label="Apellidos:" 
                    variant="outlined" 
                    name='apellidos'
                    sx={{width: '90%'}} 
                    onChange={(e) => setApellidos(e.target.value)} 
                    value={apellidos}
                    required
                  />
                </div>
                <div className='campos-card-index-colab'>
                  <TextField 
                    id="outlined-basic" 
                    label="Correo electrónico:" 
                    variant="outlined" 
                    name='email'
                    sx={{width: '90%'}}
                    onChange={(e) => setCorreo(e.target.value)} 
                    value={correo}
                    required 
                  />
                </div>
                <div className='campos-card-index-colab'>
                  <TextField 
                    id="outlined-basic" 
                    label="Número de teléfono:" 
                    variant="outlined" 
                    name='telefono'
                    sx={{width: '90%'}} 
                    onChange={(e) => setTelefono(e.target.value)} 
                    value={telefono}
                    required
                  />
                </div>
                <div className='campos-card-index-colab'>
                  <FormControl fullWidth required sx={{width: '90%'}} >
                      <InputLabel id="demo-simple-select-label">Área de especialización:</InputLabel>
                      <Select
                      onChange={(e) => setArea(e.target.value)} 
                      value={area}
                      name='area'
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label='Área de especialización:'
                      >
                          <MenuItem value='Ciencias Exactas'>Ciencias Exactas</MenuItem>
                          <MenuItem value='Ciencias de la Salud'>Ciencias de la Salud</MenuItem>
                          <MenuItem value='Ciencias Económico - Administrativo'>Ciencias Económico - Administrativo</MenuItem>
                          <MenuItem value='Ingeniería'>Ingeniería</MenuItem>
                          <MenuItem value='Tecnología'>Tecnología</MenuItem>
                          <MenuItem value='Ciencias Químico - Biológico'>Ciencias Químico - Biológico</MenuItem>
                          <MenuItem value='Ciencias Sociales y humanidades'>Ciencias Sociales y humanidades</MenuItem>
                      </Select>
                  </FormControl>
                </div>
                <div className='campos-card-index-colab'>
                  <FormControl fullWidth required sx={{width: '90%'}} >
                      <InputLabel id="demo-simple-select-label">Grado de estudio:</InputLabel>
                      <Select
                      onChange={(e) => setEstudios(e.target.value)} 
                      value={estudios}
                      name='grado'
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label='Grado de estudio'
                      >
                          <MenuItem value='Licenciatura'>Licenciatura</MenuItem>
                          <MenuItem value='Maestría'>Maestría</MenuItem>
                          <MenuItem value='Técnico'>Técnico</MenuItem>
                          <MenuItem value='Especialista'>Especialista</MenuItem>
                      </Select>
                  </FormControl>
                </div>
              </div>
              <div className='campo-id-colab'>
                <TextField 
                    id="outlined-basic" 
                    label="Introduce tu ID:" 
                    variant="outlined" 
                    name='id'
                    sx={{width: '95%'}}
                    onChange={(e) => setIdentificador(e.target.value)} 
                    value={identificador}
                    required
                />
              </div>
              <button type='submit' className='footer-btn-index-colab'>Continuar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default index
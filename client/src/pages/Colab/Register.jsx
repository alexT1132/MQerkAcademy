import React, {useState} from 'react'
import Navbar from "../../components/NavLogin";
import { FaUser, FaLock  } from "react-icons/fa";
import { Message } from "../../components/ui/message";


function Register() {

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [role, setRole] = useState('colaborador');
    const [errors, setErrors] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!usuario){
            setErrors('Ingresa un usuario');
            setUsuario('');
        } else if(!contraseña){
            setErrors('Ingresa una contraseña');
            setContraseña('');
        } else {

            try {

                const datosUsuario = {
                    usuario,
                    contraseña,
                    role,
                }

                signup(datosUsuario);

            } catch (error) {
                console.log(error);
            }

        }
        
        // Borrar mensaje después de 5 segundos
        setTimeout(() => {
            setErrors('');
        }, 5000);
        
      };

  return (
    <div className='body-registro-colaborador' >
        <Navbar />
        <div className="section-registro-colab">
            <div className="Alert-message colab">
                {errors && <Message message={errors} />}
            </div>
            <br />
            <div className="card-registro-colab">
                <br />
                <div className="titulo-registro-card">
                    <h1 className="titulo-registro-card">Registro de usuario</h1>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="cuerpo-registro-colab">
                        <div className="input-form-registro">
                            <div className="icon-section-registro">
                                <FaUser className="icon-registro" />
                            </div>
                            <input 
                            autoComplete='off'
                            type="text" 
                            className='input-registro' 
                            name="usuario" 
                            placeholder="Crea tu usuario" 
                            />
                        </div>
                        <div className="input-form-registro">
                            <div className="icon-section-registro">
                                <FaLock className="icon-registro" />
                            </div>
                            <input 
                            type="text" 
                            className='input-registro' 
                            name="contraseña" 
                            placeholder="Crea tu contraseña" 
                            />
                        </div>
                        <div className="footer-registro">
                            <button className="btn-registro">Continuar</button>
                        </div>
                        <br />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
import { useEffect, useState } from "react";
import NavRegistro from "../components/NavLogin";
import { FaUser, FaLock  } from "react-icons/fa";
import { Message } from "../components/ui/message";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterEst() {

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [role, setRole] = useState('estudiante');
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const {signup, isAuthenticated, errors: registerErrors, user} = useAuth();

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

      useEffect(() => {
        if (isAuthenticated) {
            if(user.role === 'estudiante'){
                navigate('/cursos');
            }
        }
    }, [isAuthenticated]);

  return (
    <div className="page-registro">
        <NavRegistro />
        <div className="sectionRegistro">
            <div className="Alert-message">
                {registerErrors.map((error, i) => (
                    <Message message={error} key={i} />
                ))}
                {errors && <Message message={errors} />}
            </div>
            <div className="card-registro">
                <br />
                <div className="titulo-registro-card">
                    <h1 className="titulo-registro-card">CREA TU USUARIO</h1>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="cuerpo-registro-eeau">
                        <div className="input-form-registro">
                            <div className="icon-section-registro">
                                <FaUser className="icon-registro" />
                            </div>
                            <input 
                            type="text" 
                            className='input-registro' 
                            name="usuario" 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                            placeholder="Crea tu usuario" 
                            />
                        </div>
                        <div className="input-form-registro">
                            <div className="icon-section-registro">
                                <FaLock className="icon-registro" />
                            </div>
                            <input 
                            type="password" 
                            className='input-registro' 
                            name="contraseña" 
                            value={contraseña} 
                            onChange={(e) => setContraseña(e.target.value)} 
                            placeholder="Crea tu contraseña" 
                            />
                        </div>
                        <div className="footer-registro">
                            <button className="btn-registro">Continuar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterEst
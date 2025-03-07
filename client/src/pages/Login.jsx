import { useState, useEffect } from "react";
import NavRegistro from "../components/NavLogin";
import { FaUser, FaLock  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Message } from "../components/ui/message";
import { useAuth } from "../context/AuthContext";


function Login() {

    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();

    const {signin, errors: LoginErrors, isAuthenticated, user} = useAuth();

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

                const userData = {
                    usuario,
                    contraseña
                }
        
                signin(userData);

            } catch (error) {

                console.log(error);

            }
        }

      };

      // Borrar mensaje después de 5 segundos
    setTimeout(() => {
        setErrors('');
    }, 5000);

      useEffect(() => {
        if (isAuthenticated) {
            if(user.role === 'estudiante'){
                navigate('/cursos');
            } else
            if(user.role === 'administrador'){
                navigate('/dashboard');
            }
        }
    }, [isAuthenticated]);

  return (
    <>
        
    
    <NavRegistro />
    <div className="page-login">
        
        <div className="sectionLogin">
            <div className="card-login">
                <div className="card-login-header">
                    <FaUser className="iconUser" />
                </div>

                <div className='titulo-login-card'>
                    <h1 className='titulo-card'>Iniciar sesión</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-login">
                        <div className="input-form-login">
                            <div className="icon-login">
                                <FaUser className="icon" />
                            </div>
                            <input 
                            className='input-log' 
                            name="usuario" 
                            type="text" value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                            placeholder='Usuario...' 
                            />
                        </div>
                        <div className="input-form-login">
                            <div className="icon-login">
                                <FaLock className="icon" />
                            </div>
                            <input 
                            className='input-log' 
                            name="contraseña" 
                            type="password" 
                            value={contraseña} 
                            onChange={(e) => setContraseña(e.target.value)} 
                            placeholder='Contraseña...' 
                            />
                        </div>
                        <div className="form-btn-login">
                            <button className='btn-login'>Ingresar</button>
                        </div>
                        <div className="footer-login">
                        <p className="linkOne">¿No tienes una cuenta?<Link to='/registro_Est' className="link" >Regístrate aquí...</Link></p>
                            <Link>
                                <p className="linkTwo link">¿Olvidaste tu contraseña?</p>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <br />
            <div className="Alert-message-login">
                {LoginErrors.map((error, i) => (
                    <Message message={error} key={i} />
                ))}
                {errors && <Message message={errors} />}
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
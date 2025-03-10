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
        <main className="sectionLogin" onSubmit={handleSubmit}>
            <form className="card-login">
                <div className="card-login-header">
                    <FaUser className="iconUser" />
                </div>
                <h1 className='titulo-card'>Iniciar sesión</h1>
                            <div className="input-form-login">
                            <FaUser className="icon" />
                            <input
                            className='input-log'
                            name="usuario"
                            type="text" value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder='Usuario...' >
                            </input>
                            </div>

                    
                            <div className="input-form-login">
                            <FaLock className="icon" />
                            <input
                            className='input-log'
                            name="contraseña"
                            type="password"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            placeholder='Contraseña...'
                            />
                            </div>
                            <button className='btn-login'>Ingresar</button>
                        <div style={{margin:'10px'}}>
                            <p className="linkOne">¿No tienes una cuenta?
                                <Link to='/registro_Est' className="link" >Regístrate aquí...
                                </Link>
                            </p>
                            <Link>
                                <p className="linkTwo link">¿Olvidaste tu contraseña?</p>
                            </Link>
                        </div>

                    
            </form>
            <div className="Alert-message-login">
                        {LoginErrors.map((error, i) => (
                            <Message message={error} key={i} />
                        ))}
                        {errors && <Message message={errors} />}
                    </div>
        </main>
</>
  )
}

export default Login
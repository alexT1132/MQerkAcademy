import { useState } from "react";
import { Link } from "react-router-dom";

function NavIndex() {

    const [showButtons, setShowButtons] = useState(false);

    const toggleButtons = () => {
        setShowButtons(!showButtons);
      };

  return (
    
        
    
    <div className="body-index">
        <div>
            <h2 className="title-index">¡Bienvenidos!</h2>
        </div>
        <div>
            <h2 className="title-registrate">Regístrate como:</h2>
        
        <div className="contenedor-btns-index">
            <a className="btn-option">
            <Link style={{display:'flex'}} to='/registro_Est'>
                <button>Estudiante</button>
            </Link>
            </a>

            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
            <a className="btn-option">
                <button onClick={toggleButtons}>Colaborador</button>
            </a>
            <div style={{
            display: 'flex',
            'justify-content': 'center',
            'flexDirection':'column'
            }}>
            {showButtons && (
                <>
                    <a className="btn-option-extra">
                        <Link to='/colab'>
                            <button>Asesor</button>
                        </Link>
                    </a>

                    <a className="btn-option-extra">
                        <Link>
                            <button>P. Interno</button>
                        </Link>
                    </a>
                </>
                
            )}
            </div>
            </div>
            
        </div>
        
        </div>
        </div>
  )
}

export default NavIndex;
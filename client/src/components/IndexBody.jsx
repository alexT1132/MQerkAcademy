import { useState } from "react";
import { Link } from "react-router-dom";

function NavIndex() {

    const [showButtons, setShowButtons] = useState(false);

    const toggleButtons = () => {
        setShowButtons(!showButtons);
      };

  return (
    <div className="body-index">
        <div className="titulo-body">
            <h2 className="title-index">¡Bienvenidos!</h2>
        </div>
        <div className="space"></div>
        <div className="titulo-registrate">
            <h2 className="title-registrate">Regístrate como:</h2>
        </div>
        <div className="contenedor-btns-index">
            <Link className="btn-option" to='/registro_Est'>
                <button>Estudiante</button>
            </Link>
            <Link className="btn-option">
                <button onClick={toggleButtons}>Colaborador</button>
            </Link>
            {showButtons && (
                <div className="btns-extra">
                    <Link to='/colab' className="btn-option-extra">
                        <button>Colaborador</button>
                    </Link>
                    <Link className="btn-option-extra">
                        <button>P. Interno</button>
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default NavIndex;
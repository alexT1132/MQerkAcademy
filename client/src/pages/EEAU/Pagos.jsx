import { useState } from "react";
import TopBar from "../../components/TopBarColab";
import SideBar from "../../components/SideBar";
import { FaCcMastercard, FaMoneyBillAlt } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";

function Pagos() {

    const [active, isActive] = useState(true);

    const toggleSidebar = () => {
        isActive(!active);
    };

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="contenedor-central-pagos">
            <SideBar isActive={active} />
            <div className="main-pagos">
                <div className="section-tarjetas-pagos">
                    <div className="carta tarjeta">
                        <div className="title-tarjeta">Pago con tarjeta de</div>
                        <div className="title-tarjeta">crédito o débito</div>
                        <div className="icon-tarjeta">
                            <FaCcMastercard className="credito" />
                        </div>
                    </div>
                    <div className="carta transferencia">
                        <div className="title-tarjeta">Transferencia</div>
                        <div className="title-tarjeta">SPEI o depósito </div>
                        <div className="icon-tarjeta">
                            <GoArrowSwitch className="credito" />
                        </div>
                    </div>
                    <div className="carta efectivo">
                        <div className="title-tarjeta efectivo">EFECTIVO</div>
                        <div className="icon-tarjeta">
                            <FaMoneyBillAlt  className="credito" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagos
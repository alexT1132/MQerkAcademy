import { useState } from "react";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import CalendarioEventos from "../../components/ui/CalendarEeau";
import { FaPlus } from "react-icons/fa6";

function Calendario() {

    const [active, isActive] = useState(true);

    const toggleSidebar = () => {
        isActive(!active);
    };

  return (
    <div>
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="contenedor-central-calendario">
          <SideBar isActive={active} />
          <div className="main-calendario">
              <div className="calendar">
                <div className="calendar-header">
                  <button className="create-event">
                    <FaPlus />
                    Crear
                  </button>
                </div>
                <div className="calendar-body">
                  <CalendarioEventos />
                </div>
              </div>
              <div className="events">
                <div className="events-header">Eventos y actividades importantes del mes</div>
                <div className="events-body">
                  <div className="event">
                    <div className="dia">1</div>
                    <div className="actividad">DESCRIPCION DE LA ACTIVIDAD Y HORARIO</div>
                  </div>
                  <div className="event">
                    <div className="dia">3</div>
                    <div className="actividad">DESCRIPCION DE LA ACTIVIDAD Y HORARIO</div>
                  </div>
                  <div className="event">
                    <div className="dia">5</div>
                    <div className="actividad">PAGO CORRESPONDIENTE DEL MES</div>
                  </div>
                </div>
              </div>
          </div>
          <div className="footer-calendar">
          <div className="contenedor-colors">
            <div className="color1"></div>
            <div className="nom-color">Actividades / Tareas</div>
          </div>
          <div className="contenedor-colors">
            <div className="color2"></div>
            <div className="nom-color">Simuladores</div>
          </div>
          <div className="contenedor-colors">
            <div className="color3"></div>
            <div className="nom-color">Conferencias / talleres</div>
          </div>
          <div className="contenedor-colors">
            <div className="color4"></div>
            <div className="nom-color">Fecha de pago</div>
          </div>
          <div className="contenedor-colors">
            <div className="color5"></div>
            <div className="nom-color">No hay clases / Vacaciones</div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Calendario
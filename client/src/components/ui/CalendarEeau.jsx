import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import esLocale from "@fullcalendar/core/locales/es";

function CalendarEeau() {
  return (
    <div className="container fullcalendar">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            hiddenDays={[0]}
            height='430px'
            locale={esLocale}
            headerToolbar={{
                start: 'prev',
                center: 'title',
                end: 'next'
            }}
        />
    </div>
  )
}

export default CalendarEeau
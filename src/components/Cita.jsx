import React from 'react'

const Cita = ({cita, eliminarCita}) => ( 
    <div className="cita">
        <p>Paciente: <span>{cita.nombres} {cita.apellidos}</span></p>
        <p>Fecha de la cita: <span>{cita.fecha}</span></p>
        <p>Hora de la cita: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width" onClick={()=> eliminarCita(cita.id)}>Eliminar</button>
    </div>
);

 
export default Cita;
import React from 'react'

const Cita = ({cita}) => ( 
    <div className="cita">
        <p>Paciente: <span>{cita.nombres} {cita.apellidos}</span></p>
        <p>Fecha de la cita: <span>{cita.fecha}</span></p>
        <p>Hora de la cita: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>
    </div>
);

 
export default Cita;
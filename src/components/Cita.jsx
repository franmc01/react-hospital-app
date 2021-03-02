import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => ( 
    <div className="cita">
        <p>Paciente: <span>{cita.nombres} {cita.apellidos}</span></p>
        <p>Fecha de la cita: <span>{cita.fecha}</span></p>
        <p>Hora de la cita: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width" onClick={()=> eliminarCita(cita.id)}>Eliminar</button>
    </div>
);

Cita.prototype = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

 
export default Cita;
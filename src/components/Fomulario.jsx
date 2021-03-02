import React, { Fragment, useState } from 'react';


const Formulario = () => {

    //State para la citas
    const [cita, guardarCita] = useState({
        nombres: '',
        apellidos: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Función que se ejecuta cada vez que el usuario en un input
    const handleChange = (event) => {
        guardarCita({
            ...cita,
            [event.target.name]: event.target.value
        });
    }

    const { apellidos, nombres, fecha, hora, sintomas  } = cita;

    return (
        <Fragment>
            <h3>Agendar Cita</h3>
            <form>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="nombres">Nombre de la persona</label>
                        <input type="text"
                            name="nombres"
                            className="u-full-width"
                            placeholder="Nombres"
                            onChange={handleChange}
                            value={nombres}
                        />
                        <label htmlFor="fecha">Fecha de recepción</label>
                        <input type="date"
                            name="fecha"
                            className="u-full-width"
                            onChange={handleChange}
                            value={fecha}
                        />
                    </div>

                    <div className="six columns">
                        <label htmlFor="apellidos">Apellidos de la persona</label>
                        <input type="text"
                            name="apellidos"
                            className="u-full-width"
                            placeholder="Apellidos"
                            onChange={handleChange}
                            value={apellidos}
                        />
                        <label htmlFor="Hora">Hora de recepción</label>
                        <input type="time"
                            name="hora"
                            className="u-full-width"
                            onChange={handleChange}
                            value={hora}
                        />
                    </div>
                </div>

                <label htmlFor="Hora">Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button className="u-full-width button-primary"
                    type="submit">
                    Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;
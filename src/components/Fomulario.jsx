import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid'

const Formulario = () => {

    //State para la citas
    const [cita, guardarCita] = useState({
        nombres: '',
        apellidos: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //State para manejar los errores
    const [error, setError] = useState(false)

    //Función que se ejecuta cada vez que el usuario en un input
    const handleInputChange = (event) => {
        guardarCita({
            ...cita,
            [event.target.name]: event.target.value
        });
    }

    //Desestrutuación del state cita
    const { apellidos, nombres, fecha, hora, sintomas } = cita;


    //Funcion que se ejecuta cuando se envia el form
    const agendarCita = (event) => {
        event.preventDefault();

        //Validar el form
        if (!apellidos.trim() || !nombres.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()) {
            setError(true);
        }

        //Eliminar la alerta de error si ya hay error
        setError(false);

        //Asignar un id a la cita
        cita.id = nanoid();

        //Crear la cita y mostrarla en el DOM


    }
    return (
        <Fragment>
            <h3>Agendar Cita</h3>
            {
                error ? <p className="alerta-error">
                    Debe completar todos campos
                        </p>
                    : null
            }

            <form onSubmit={agendarCita}>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="nombres">Nombre de la persona</label>
                        <input type="text"
                            name="nombres"
                            className="u-full-width"
                            placeholder="Nombres"
                            onChange={handleInputChange}
                            value={nombres}
                        />
                        <label htmlFor="fecha">Fecha de recepción</label>
                        <input type="date"
                            name="fecha"
                            className="u-full-width"
                            onChange={handleInputChange}
                            value={fecha}
                        />
                    </div>

                    <div className="six columns">
                        <label htmlFor="apellidos">Apellidos de la persona</label>
                        <input type="text"
                            name="apellidos"
                            className="u-full-width"
                            placeholder="Apellidos"
                            onChange={handleInputChange}
                            value={apellidos}
                        />
                        <label htmlFor="Hora">Hora de recepción</label>
                        <input type="time"
                            name="hora"
                            className="u-full-width"
                            onChange={handleInputChange}
                            value={hora}
                        />
                    </div>
                </div>

                <label htmlFor="Hora">Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleInputChange}
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
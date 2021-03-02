import React, { Fragment } from 'react';


const Formulario = () => {
    return (
        <Fragment>
            <h3>Agendar Cita</h3>
            <form>
                <div class="row">
                    <div class="six columns">
                        <label htmlFor="nombres">Nombre de la persona</label>
                        <input type="text"
                            name="nombres"
                            className="u-full-width"
                            placeholder="Nombres"
                        />
                        <label htmlFor="fecha">Fecha de recepción</label>
                        <input type="date"
                            name="fecha"
                            className="u-full-width"
                        />
                    </div>

                    <div className="six columns">
                    <label htmlFor="apellidos">Apellidos de la persona</label>
                        <input type="text"
                            name="apellidos"
                            className="u-full-width"
                            placeholder="Apellidos"
                        />
                        <label htmlFor="Hora">Hora de recepción</label>
                        <input type="time"
                            name="fecha"
                            className="u-full-width"
                        />
                    </div>
                </div>

                <label htmlFor="Hora">Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
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
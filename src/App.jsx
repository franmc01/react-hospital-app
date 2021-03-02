import React, { Fragment, useState } from 'react'
import Formulario from './components/Fomulario';
import Cita from './components/Cita';

function App() {

  //Arreglo de todas las citas
  const [citas, guardarCita] = useState([]);

  //Funcion que lea la nueva cita y la agrege a las que  a existen
  const crearCita = (cita) => {
    guardarCita([...citas, cita])
  }

  //Funcion para eliminar la cita
  const eliminarCita = (id) => {
    const nuevas = citas.filter(cita => cita.id !== id);
    guardarCita(nuevas)
  }



  return (
    <Fragment>
      <h1>Admistrador de citas - Hospital Sisco</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h4>Lista de citas pendientes</h4>
            {
              (citas.length===0) 
                ? <p className="alerta-info">No hay citas pendientes</p>
                : citas.map(cita => (
                  <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
                ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

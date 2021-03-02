import React, { Fragment, useState } from 'react'
import Formulario from './components/Fomulario';
import Cita from './components/Cita';

function App() {

  //Arreglo de todas las citas
  const [citas, guardarCita] = useState([]);

  //Funcion que lea la nueva cita y la agrege a las que  a existen
  const crearCita = (cita) => {
    guardarCita([...citas, cita])
    console.log(citas)
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
            {citas.map(cita=>(
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

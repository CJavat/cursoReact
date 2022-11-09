import './App.css';
import Tarea from './components/Tarea';
import freeCodeCampoLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampoLogo}
          alt="freeCodeCampoLogo"
          className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React'/>
        {
          /* 
            ME QUEDE EN EL COPMONENTE FORMULARIO 
            MINUTO: 6:07:08.
            */
        }
      </div>
    </div>
  );
}

export default App;

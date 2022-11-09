import './App.css';
import freeCodeCampoLogo from './img/freecodecamp-logo.png';
import ListaDeTareas from './components/ListaDeTareas';

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
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

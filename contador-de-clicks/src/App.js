import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './components/boton'
import Contador from './components/contador'
import { useState } from 'react'

function App() {
  
  const [numeroClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numeroClicks + 1);
  };
  
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numeroClicks={ numeroClicks }
        />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
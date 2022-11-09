import React, {useState} from "react";
import '../css/TareaFormulario.css'

import { v4 as uuidv4 } from 'uuid'; // IMPORTAR PAQUETE.

function TareaFormulario(props) {
  
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva); // SE ENVIAN ESTOS PROPS CUANDO EL FORMULARIO ES ENVIADO.
  };

  return(
    <form 
      className="tarea-formulario"
      onSubmit={ manejarEnvio }>
      <input 
        className="tarea-input"
        type="text" 
        placeholder="Escribe una Tarea."
        name="texto"
        onChange={ manejarCambio }
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
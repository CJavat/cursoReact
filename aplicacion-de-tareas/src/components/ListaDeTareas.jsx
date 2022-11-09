import React, {useState} from "react"; // USESTATE ES UN HOOK.
import '../css/ListaDeTareas.css';

import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTareas(props) {

  const [tareas, setTareas] = useState([]); // SE INICIALIZA LA VARIABLE COMO UN ARREGLO VACIO.

  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas]; /* Con el Spreed Operator (...) convierte el arreglo en tareas individuales.*/
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea
    });
    setTareas(tareasActualizadas);
  };

  return(
    <> {/* FRAGMENTOS --> SIRVE PARA PODER PONER ETIQUETAS SI NADA. SE ELIMINAN EN LA EJECUCION. */}
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={ tarea.texto }
                completada={ tarea.completada }
                completarTarea={ completarTarea }
                eliminarTarea={ eliminarTarea }
              />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas
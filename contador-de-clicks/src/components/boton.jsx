import React from "react";
import '../css/Boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }) { // SINTAXIS DE DESTRUCTURACIÓN PARA NO PONER "PROPS".
	return (
		<button
			className={ esBotonDeClick ? "boton-clic" : "boton-reiniciar" }
			onClick={ manejarClick }>
				{ texto }
		</button>
	);
}

export default Boton;
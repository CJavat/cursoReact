import React from "react";
import '../css/Boton.css'

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };

    return(/* PARA QUE PUEDAS ESCRIBIR DENTRO DEL COMPONENTE. EJEMPLO <P> "ESTE TEXTO" </P> */
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}> 
                { props.children }
        </div>
    );
}

export default Boton;
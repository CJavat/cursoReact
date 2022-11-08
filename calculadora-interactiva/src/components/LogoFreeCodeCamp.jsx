import React from "react";
import freeCodeCampLogo from '../img/freecodecamp-logo.png'
import '../css/LogoFreeCodeCamp.css'

function LogoFreeCodeCamp(props) {
  return(
    <div className='freecodecamp-logo-contenedor'>
      <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="Logo de freeCodeCamp" 
      />
    </div>
  );
}

export default LogoFreeCodeCamp;
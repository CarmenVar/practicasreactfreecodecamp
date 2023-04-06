import React from "react";
import "../stylesheet/Boton.css";
function Boton(props){
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== ".") && (valor !== "=")
  }
  return(
    <div
    className={ `boton-contenedor ${esOperador(props.children)?"operador":null }`}>
<div
onClick = { () => props.manejarClic(props.children)}>
      {props.children}
</div>
      
    </div>
    
  )
}
export default Boton;
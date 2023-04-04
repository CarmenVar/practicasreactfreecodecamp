import React from "react";
import "../stylesheets/Testimonio.css";
// vamos a usar componenentes funcionales
//export function Testimonio(){  
  //exportacion por defecto
  function Testimonio(props){
  return(
    <div className="contenedor-testimonio">

      <img className="imagen-testimonio"
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt="Foto de Alejandro" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>

      </div>

    </div>
  )
}
export default Testimonio;//exportación nombrada
import React from 'react'
import "./UbicacionEstrategica.css"
import Boton from "../Boton/Boton"
import { scroller } from '../../helpers/scroller'

const UbicaciónEstrategica = () => {
  return (
    <div className='ubicacion-estrategica-contenedor'>
      <h3>Ubicación <strong>estratégica</strong></h3>
      <p>La localización geográfica del negocio es una decisión de tipo estratégico, <strong>vital para la viabilidad y rendimiento del mismo.</strong></p>
      <div onClick={() => scroller("quienes-somos-contanedor",0)}> 
        <Boton Boton valor="Ver en el mapa" invertido={true} tipo="ancla" href="https://goo.gl/maps/cLNdDHhaTnQWZrXd6" target={"_blak"}>Ver mapa</Boton>
      </div>
    </div>
  )
}

export default UbicaciónEstrategica
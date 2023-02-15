import React from 'react'
import Boton from '../Boton/Boton'
import  "./NuestroServicio.css"
import {scroller} from "../../helpers/scroller"
import Fade from "react-reveal/Fade";


const NuestroServicio = () => {
  return (
    <div className='container nuestro-servicio-contanedor'>
      <Fade big>
        <h1>Nuestro <strong>servicio</strong></h1>
        <p>La renta de vehículos genera una excelente rentabilidad en dólares. <strong>Una  inversión que genera un crecimiento inmediato.</strong></p>
        <a href="#" target={'_blank'} className='nuestro-servicio-contanedor__imagen'>
          <img width="288px" src="/NuestroServicio/Logo-car-rental-miami.svg" alt="Logo" />
        </a>
        <h3>Partner exclusivo en MIAMI FL</h3>
        <div onClick={() => scroller(".contacto-contenedor",100)}>
          <Boton Boton scroller={scroller} type="boton" valor="Contactarse" invertido={false}>Contactarse</Boton>
        </div>
      </Fade>
    </div>
  )
}

export default NuestroServicio
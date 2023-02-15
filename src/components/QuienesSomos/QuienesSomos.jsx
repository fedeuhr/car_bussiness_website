import React from 'react'
import "./QuienesSomos.css"
import Fade from "react-reveal/Fade";

const QuienesSomos = () => {
  return (
    <>
      <div className='container quienes-somos-contanedor'>
          <Fade big>
        <div className='quienes-somos-contanedor__contenido'>
          <div className='quienes-somos-contanedor__contenido__enunciado'>
            <h1>Quiénes somos</h1>
            <p>Somos una empresa especializada en inversiones en USA , abarcamos todo el proceso de inversión, definimos el modelo exacto y mas conveniente para nuestros socios inversores generando rentabilidad en dólares.
            </p>
          </div>
          <ul className='quienes-somos-contanedor__contenido__atributos'>
            <li><div className='quienes-somos-contanedor__contenido__atributos__borde'></div>Rendimiento</li>
            <li><div className='quienes-somos-contanedor__contenido__atributos__borde'></div>Crecimiento</li>
            <li><div className='quienes-somos-contanedor__contenido__atributos__borde'></div>Rentabilidad</li>
          </ul>
        </div>
        <figure className='quienes-somos-contanedor__contenido__imagen'>
          <img src='/QuienesSomos/quienes-somos.webp' alt='Auto' />
          <div className='quienes-somos-contanedor__contenido__imagen__fondo'></div>
        </figure>
        </Fade>
      </div>
    </>
  )
}

export default QuienesSomos
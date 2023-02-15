import React from 'react'
import "./Boton.css"

const Boton = ({tipo,type, valor, invertido,href,children,target}) => {
  return (
    <>
    {
        tipo === "boton"
        ?  <button className={`boton ${invertido ? "boton-invertido" : "boton-normal"}`} type={type}>{children}</button>
        : <a className={`boton ${invertido ? "boton-invertido" : "boton-normal"}`} href={href} target={target}>{children}</a>
      }
   
   </>
  )
}

export default Boton
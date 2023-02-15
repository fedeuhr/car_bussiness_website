import React from 'react'
import { goTop } from '../../helpers/goTop'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer-contenedor'>
      <div className='container'>
        <figure title='Ir al principio' onClick={() => goTop("smooth")} className='footer-contenedor__logo'>
          <img src='/iconos/footer/logo.svg' alt='Logo' />
        </figure>
        {/* <div className="footer-contenedor__contacto">
          <a title='WhatsApp' href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-contenedor__contacto__item">
            <img src='/iconos/footer/whatsapp.svg' alt='WhatsApp'/>
            <p>+54 9 11 1234-1234</p>
          </a>
          <a title='Llamada teléfonica' href="tel:+" className="footer-contenedor__contacto__item">
            <img src='/iconos/footer/telefono.svg' alt='Llamada teléfonica'/>
            <p>0800 123 1234</p>
          </a>
        </div> */}
        <div className='footer-contenedor__social-media'>
          <a title='Facebook' href="https://facebook.com/carbusinessmiami" target="_blank" rel="noopener noreferrer">
            <img src='/iconos/footer/facebook.svg' alt='Facebook' />
          </a>
          <a title='Instagram' href="https://instagram.com/carbusinessmiami" target="_blank" rel="noopener noreferrer">
            <img src='/iconos/footer/instagram.svg' alt='Instagram' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
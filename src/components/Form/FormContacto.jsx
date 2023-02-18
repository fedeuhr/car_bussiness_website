import React from 'react'
import Boton from '../Boton/Boton'
import "./FormContacto.css"
import autosJSON from "../../datosAutos/autos.json"
import ValidateForm from '../../helpers/validateForm';
import PhoneInput from "react-phone-number-input";
import validate from '../../helpers/validate';

const FormContacto = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, isSubmitting } =
  ValidateForm(submitForm,validate);
  

  return (
    <div className='container contacto-contenedor'>
      <div>
      <h3>Contacto</h3>
        <p>Nuestro proceso de inversión es muy simple
          <br/><strong>¡Tu vehículo preferido está a unos clics de distancia!</strong>
        </p>
        <form>
        <div>
          <div className='contacto-contenedor__inputs'>
          <div className='contacto-contenedor__inputname'>
            <input className={`${errors.name && "contacto-contenedor__input--error"}`} type="text" placeholder='Nombre' name="name" id="" value={values.name} onChange={handleChange} />
            {errors.name && (
            <small className="contacto-contenedor__input__error">
              {errors.name}
            </small>
          )}
          </div>
            <div className='contacto-contenedor__inputtel'>
            <PhoneInput
            country="AR"
            defaultCountry="AR"
            value={values.tel}
            onChange={handleChange}
            placeholder="Teléfono"
            className={`contacto-contenedor__select ${errors.tel && "contacto-contenedor__input--error"}`}
            type="phone"
            name="tel"
            id="tel"
          />
          {errors.tel && (
            <small className="contacto-contenedor__input__error">
              {errors.tel}
            </small>
          )}
          </div>
          </div>
          <div className='contacto-contenedor__input'>
          <select className={`contacto-contenedor__select ${errors.auto && "contacto-contenedor__input--error"}`} name="auto" id="" value={values.auto} onChange={handleChange}>
              <option value="" defaultChecked hidden>Elegí tu auto</option>
            {
              autosJSON.map((item) => (
                <option value={item.marca+ " " +item.modelo}>{item.marca} {item.modelo}</option>
              ))
            }
          </select>
          {errors.auto && (
            <small className="contacto-contenedor__input__error">
              {errors.auto}
            </small>
          )}
          </div>
          <div className='contacto-contenedor__input'>
            <textarea className={`contacto-contenedor__textarea ${errors.message && "contacto-contenedor__input--error"}`} name="message" placeholder='Mensaje' id="" cols="30" rows="2" value={values.message} onChange={handleChange}></textarea>
            {errors.message && (
            <small className="contacto-contenedor__input__error">
              {errors.message}
            </small>
            )}
          </div>
          <div className='contacto-contenedor__boton'>
            <Boton tipo={"boton"} type={"submit"} >Enviar</Boton>
          </div>
          </div>
          <p>{isSubmitting && Object.keys(errors).length === 0 ? "Su mensaje fue enviado Correctamente!" : ""}</p>
          
        </form>
        </div>
    </div>
  )
}

export default FormContacto;
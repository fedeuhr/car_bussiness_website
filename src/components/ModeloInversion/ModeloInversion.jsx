import React from "react";
import "./ModeloInversion.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const ModeloInversion = () => {

  return (
    <div className='container'>
      <div className='modelo-inversion'>
        <div className="modelo-inversion-titulo">
          <div className="modelo-inversion-titulo_linea"></div>
          <h2 className="modelo-inversion-titulo_h2">Modelo de <strong className='modelo-inversion-strong'>inversión</strong></h2>
        </div>
        <p>Descubrí como invertir puede cambiar tu vida</p>
      </div>

      <div className='modelo-inversion-grid'>

        <div className='inversion-estable'>
          <div className="linea-responsive"></div>
          <div className='inversion-estable-titulo'>
            <p>Inversión estable y segura</p>
            <p>Invertir en el negocio de la renta de vehículos en los Estados Unidos, es invertir en el negocio más seguro y rentable.</p>
          </div>
        </div>

        <div className='inversion-items'>
          <p><div className="linea"></div>Sé socio/inversor</p>
          <p><div className="linea"></div>Recibí la rentabilidad en USD</p>
          <p><div className="linea"></div>Obtené información en tiempo real</p>
        </div>

        <div className='modelo-inversion-img'>
          <img src="./modelo-de-inversión.webp" alt="" />
        </div>
      </div>


      <div className="contenedor-slider">
        <div className="contenedor-descuento">
          <p>30%</p>
          <p>OFF</p>
        </div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          
          navigation={true}
          modules={[Scrollbar, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="xxxxx">
              <div className="contenedor-modelo">
                <h3>Volkswagen <strong>Taos</strong></h3> 
                <p>5 pasajeros</p>
              </div>
              <img src="./autos/VW-Taos.png" alt="" />
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className="xxxxx">
              <div className="contenedor-modelo">
                <h3>Hyundai <strong>Elantra</strong></h3> 
                <p>5 pasajeros</p>
              </div>
              <img src="./autos/Hyundai-Elantra.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xxxxx">
              <div className="contenedor-modelo">
                <h3>Jeep <strong>Renegade</strong></h3> 
                <p>5 pasajeros</p>
              </div>
              <img src="./autos/Jeep-Renegade.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xxxxx">
              <div className="contenedor-modelo">
                <h3>Mini <strong>Countryman</strong></h3> 
                <p>5 pasajeros</p>
              </div>
              <img src="./autos/Mini-Countryman.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xxxxx">
              <div className="contenedor-modelo">
                <h3>Nissan <strong>Versa</strong></h3> 
                <p>5 pasajeros</p>
              </div>
              <img src="./autos/Nissan-Versa.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xxxxx">
              <div className="contenedor-modelo">
                <h3>Toyota <strong>Corolla</strong></h3> 
                <p>5 pasajeros</p>
              </div>
              <img src="./autos/Toyota-Corolla.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ModeloInversion;

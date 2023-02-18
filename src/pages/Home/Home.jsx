import React from "react";
import NuestroServicio from "../../components/NuestroServicio/NuestroServicio";
import QuienesSomos from "../../components/QuienesSomos/QuienesSomos";
import UbicacionEstrategica from "../../components/UbicaciónEstrategica/UbicaciónEstrategica"
import ModeloInversion from "../../components/ModeloInversion/ModeloInversion"
import FormContacto from "../../components/Form/FormContacto";

const Home = () => {
  return(
    <>
    <div>
        {
          window.innerWidth <= 1024
            ? <video src="car_bussiness_website/header/video_banner-mobile.mp4" autoPlay loop muted playsInline className="bannerVideo"/>
            : <video src="car_bussiness_website/header/video_banner.mp4" autoPlay loop muted playsInline className="bannerVideo"/>
        }
        
      </div>
      <QuienesSomos />
      <NuestroServicio />
      <UbicacionEstrategica/>
      <ModeloInversion />
      <FormContacto />
    </>
  );
}

export {Home};

import React, { useState } from 'react'
import './Header.css'

import { Link } from "react-router-dom";
import { scroller } from "../../helpers/scroller";
import {goTop} from "../../helpers/goTop"

const logo = "./header/Logo.svg"

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  const goHomeBur = () => {
    goTop("behanvior");
    if (navOpen === true) {
      setNavOpen(!navOpen);
    }
  };

  const goNosotros = () => {
    scroller(".quienes-somos-contanedor", 100);
    if (navOpen === true) {
      setNavOpen(!navOpen);
    }
  }

  const goServicios = () => {
    scroller(".nuestro-servicio-contanedor", 0);
    if (navOpen === true) {
      setNavOpen(!navOpen);
    }
  }

  const goInversion = () => {
    scroller(".modelo-inversion", 125);
    if (navOpen === true) {
      setNavOpen(!navOpen);
    }
  }

  const goCatalogos = () => {
    scroller(".contenedor-slider", 100);
    if (navOpen === true) {
      setNavOpen(!navOpen);
    }
  };

  const goContacto = () => {
    scroller(".contacto-contenedor", 100);
    if (navOpen === true) {
      setNavOpen(!navOpen);
    }
  };

  return (
    <>
      <header
        className={navOpen ? "header backdropOff" : "header backdropOn"}
      >
        <div className="container">
          <div className="burger-container">
            <Link to="/" className="logo-link">
              <img
                loading="lazy"
                src={logo}
                alt=""
                className="logoRes"
                onClick={goHomeBur}
              />
            </Link>
            <div
              className={
                navOpen ? "burger burger-close" : "burger burger-branding"
              }
              onClick={handleClick}
            ></div>
          </div>
          <div
            className={navOpen ? "navbar-responsive open" : "navbar-responsive"}
          >
            <Link to="/" className="logo-link">
              <img
                loading="lazy"
                src={logo}
                alt=""
                className="logo"
                onClick={goHomeBur}
              />
            </Link>
            <div className="navbar-items">
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="nav-links"
                onClick={goNosotros}
              >
                Nosotros
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="nav-links"
                onClick={goServicios}
              >
                Servicios
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="nav-links"
                onClick={goInversion}
              >
                Inversión
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="nav-links"
                onClick={goCatalogos}
              >
                Catálogos
              </Link>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="nav-links"
                onClick={goContacto}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header
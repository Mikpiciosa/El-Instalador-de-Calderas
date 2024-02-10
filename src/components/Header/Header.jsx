import "./Header.css";
import { HamburgerIcon } from "../../assets/icons/HamburgerIcon.jsx";
import { ClosedIcon } from "../../assets/icons/ClosedIcon.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [IsNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!IsNavActive);
  };

  return (
    <header className="header">
      <img
        className="header__logo"
        src="/logo.svg"
        alt="Logo Instalador de Calderas"
      />
      <nav className="header__nav--mobile">
        <span onClick={toggleNav}>
          {IsNavActive ? <ClosedIcon /> : <HamburgerIcon />}
        </span>
        <ul className={`nav__list ${IsNavActive ? "active" : ""}`}>
          <img
            className="header__logo--hamg"
            src="./logo.svg"
            alt="Logo Instalador de Calderas"
          />
          <li className="list__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="list__item">
            <Link to="/services">Servicios</Link>
          </li>
          <li className="list__item">
            <Link to="/products">Productos</Link>
          </li>
          <li className="list__item">
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <button className="nav__button">Contacto</button>
        </ul>
      </nav>
      <nav className="header__nav--desktop">
        <ul className="nav__list--desktop">
          {/* <div></div> */}
          <li className="list__item--desktop">
            <Link to="/">Inicio</Link>
          </li>
          <li className="list__item--desktop">
            <Link to="/services">Servicios</Link>
          </li>
          <li className="list__item--desktop">
            <Link to="/products">Productos</Link>
          </li>
          <li className="list__item--desktop">
            <Link to="/about">Sobre nosotros</Link>
          </li>
        </ul>
        <button className="header__button--desktop">Contacto</button>
      </nav>
    </header>
  );
};

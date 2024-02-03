import "./Header.css";
import { HamburgerIcon } from "../../assets/icons/HamburgerIcon.jsx";
import { ClosedIcon } from "../../assets/icons/ClosedIcon.jsx";
import { useState } from "react";

export const Header = () => {
  const [IsNavActive, setIsNavActive] = useState(false);

  console.log(IsNavActive);

  const toggleNav = () => {
    setIsNavActive(!IsNavActive);
  };

  return (
    <header className="header">
      <img
        className="header__logo"
        src="./logo.svg"
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
            <a href="">Inicio</a>
          </li>
          <li className="list__item">
            <a href="">Servicios</a>
          </li>
          <li className="list__item">
            <a href="">Productos</a>
          </li>
          <li className="list__item">
            <a href="">Sobre Nosotros</a>
          </li>
          <button className="nav__button">Contacto</button>
        </ul>
      </nav>
      <nav className="header__nav--desktop">
        <ul className="nav__list--desktop">
          <div></div>
          <li className="list__item--desktop">Inicio</li>
          <li className="list__item--desktop">Servicios</li>
          <li className="list__item--desktop">Productos</li>
          <li className="list__item--desktop">Sobre Nosotros</li>
        </ul>
        <button className="header__button--desktop">Contacto</button>
      </nav>
    </header>
  );
};

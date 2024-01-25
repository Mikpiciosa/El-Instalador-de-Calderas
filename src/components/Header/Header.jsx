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
          <button className="header__button">Contacto</button>
        </ul>
      </nav>
      <nav className="header__nav--desktop">
        <ul className="nav__list">
          <li className="list__item"></li>
          <li className="list__item"></li>
          <li className="list__item"></li>
          <li className="list__item"></li>
        </ul>
        <button className="Header__button"></button>
      </nav>
    </header>
  );
};

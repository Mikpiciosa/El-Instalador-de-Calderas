import { AsideFooter } from "../AsideFooter/AsideFooter";
import "./FrontPage.css";

export const FrontPage = () => {
  return (
    <section className="frontpage">
      <section className="frontpage__text">
        <p className="front__text">
          Buscamos brindar a nuestros clientes la climatización más confortable
          con excelencia en instalación y equipamiento.
        </p>
        <h2 className="front__title">El Instalador de Calderas</h2>
        <button className="front__btn">Conocé más</button>
      </section>
      <AsideFooter alternative={true} none={false}></AsideFooter>
    </section>
  );
};

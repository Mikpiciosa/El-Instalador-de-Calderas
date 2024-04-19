import { AsideFooter } from "../AsideFooter/AsideFooter";
import "./FrontPage.css";

export const FrontPage = () => {
  return (
    <section className="frontpage">
      <section className="cnt">
        <section className="frontpage__text">
          <p className="front__text">
            Contamos con las líneas de productos completa en las principales
            marcas de Calefacción de la Argentina. Comercializamos marcas como
            PEISA - BAXI Triangular - Caldaia - Grundfos
          </p>
          <img className="front__logo" src="/logo.svg" alt="" />
          <button className="front__btn">Conocé más</button>
        </section>
        <AsideFooter alternative={true} none={false}></AsideFooter>
      </section>
    </section>
  );
};

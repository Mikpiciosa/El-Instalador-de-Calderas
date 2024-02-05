import { AsideFooter } from "../../AsideFooter/AsideFooter";
import "./ProductsPage.css";

export const ProductsPage = () => {
  const CardProductPage = ({ title, picture, anchor }) => {
    return (
      <article className="card-show">
        <h4 className="card-show-h4">{title}</h4>
        <div className="card-show-image-link-container">
          <img className="card-show-image" src={picture} alt="" />
          <a className="card-show-link" href={anchor}>
            Ver más
          </a>
        </div>
      </article>
    );
  };
  return (
    <main className="main-products-page">
      <section className="products-page-home">
        <article className="products-page-left">
          <p className="products-page-left-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis pulvinar leo, quis posuere nulla.
          </p>
          <h1 className="products-page-left-h1">Nuestros productos</h1>
          <button className="products-page-left-button">Contacto</button>
        </article>
        <article className="products-page-right">
          <AsideFooter alternative={true} none={true}></AsideFooter>
        </article>
      </section>
      <section className="products-show-container">
        <h3 className="products-show-container-h3">
          Conoce nuestros principales productos
        </h3>
        <div className="card-shows-container">
          <CardProductPage
            title={"Calderas"}
            picture={"./calentador-de-agua_1.png"}
            anchor={"./productito"}
          ></CardProductPage>
          <CardProductPage
            title={"Radiadores"}
            picture={"./calentador-de-agua_1.png"}
            anchor={"./productito"}
          ></CardProductPage>
          <CardProductPage
            title={"Radiadores Toalleros"}
            picture={"./calentador-de-agua_1.png"}
            anchor={"./productito"}
          ></CardProductPage>
          <CardProductPage
            title={"Pisos Radiantes"}
            picture={"./calentador-de-agua_1.png"}
            anchor={"./productito"}
          ></CardProductPage>
        </div>
      </section>
    </main>
  );
};

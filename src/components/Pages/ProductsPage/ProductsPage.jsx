import { AsideFooter } from "../../AsideFooter/AsideFooter";
import "./ProductsPage.css";
import CardServiceProduct from "../../Common/CardServiceProduct";

const ProductsPage = () => {
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
          <CardServiceProduct
            title={"Calderas"}
            url={"./calentador-de-agua_1.png"}
            anchor={"calderas"}
          ></CardServiceProduct>
          <CardServiceProduct
            title={"Radiadores"}
            url={"./calentador-de-agua_1.png"}
            anchor={"radiadores"}
          ></CardServiceProduct>
          <CardServiceProduct
            title={"Radiadores Toalleros"}
            url={"./calentador-de-agua_1.png"}
            anchor={"radiadoresToalleros"}
          ></CardServiceProduct>
          <CardServiceProduct
            title={"Pisos Radiantes"}
            url={"./calentador-de-agua_1.png"}
            anchor={"pisosRadiantes"}
          ></CardServiceProduct>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;

import "./CardShowProduct.css";

const CardShowProduct = ({ title, description, image }) => {
  return (
    <article className="productCard__card">
      <img src={image} alt="" />
      <div className="productCard__text">
        <p className="productCard__title">{description}</p>
        <a className="productCard__link" href="#">
          Contactar
        </a>
      </div>
    </article>
  );
};

export default CardShowProduct;

import { Link } from "react-router-dom";

const CardServiceProduct = ({ title, url, anchor }) => {
  return (
    <article className="card-show">
      <h4 className="card-show-h4">{title}</h4>
      <div className="card-show-image-link-container">
        <img className="card-show-image" src={url} alt={title} />
        <Link className="card-show-link" to={`/products/${anchor}`}>
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default CardServiceProduct;

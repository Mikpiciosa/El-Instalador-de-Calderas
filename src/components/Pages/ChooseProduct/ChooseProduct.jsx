import { useParams } from "react-router-dom";
import { DataProducts } from "./DataProducts";
import "./ChooseProduct.css";
import CardShowProduct from "../../Common/CardShowProduct";

const ChooseProduct = () => {
  const { title } = useParams();

  // Filtrar el objeto DataProducts según el título
  const productos = DataProducts[title];

  if (!productos) {
    return <div>Productos no encontrados</div>;
  }

  return (
    <section className="chooseProduct">
      <section className="chooseProduct__text">
        <h1 className="chooseProduct__title">{title}</h1>
      </section>
      <section className="chooseProduct__products">
        {productos.map((producto) => (
          <CardShowProduct
            title={producto.titulo}
            description={producto.descripcion}
            key={producto.titulo}
            image={producto.imagen}
          />
        ))}
      </section>
    </section>
  );
};

export default ChooseProduct;

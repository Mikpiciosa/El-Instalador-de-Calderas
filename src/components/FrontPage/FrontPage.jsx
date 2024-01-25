import "./FrontPage.css";
import "FbIcon" from "./Facebook.svg";

export const FrontPage = () => {
  return (
    <main className="frontpage">
      <section>
        <p>
          Buscamos brindar a nuestros clientes la climatización más confortable
          con excelencia en instalación y equipamiento.
        </p>
        <h2>El Instalador de Calderas</h2>
        <button>Conocé más</button>
      </section>
      <aside>
        <img src={FbIcon} alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </aside>
    </main>
  );
};

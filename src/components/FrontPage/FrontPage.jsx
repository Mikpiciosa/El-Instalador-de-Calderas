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
      <aside>
        <img src="" alt="" />
        <img src="" alt="" />
      </aside>
      <aside className="frontpage__rrss">
        <a href="">
          <img src="./WhatsApp.svg" alt="icono para ir a whatsapp" />
        </a>
        <a href="">
          <img src="./Facebook.svg" alt="icono para ir a facebook" />
        </a>
        <a href="">
          <img src="./Instagram.svg" alt="icono para ir a instagram" />
        </a>
      </aside>
    </section>
  );
};

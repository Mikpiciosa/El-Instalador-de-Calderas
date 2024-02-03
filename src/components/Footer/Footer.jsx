import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <img
          className="footer__logo"
          src="./logo.svg"
          alt="Logo Instalador de Calderas"
        />
        <aside className="footer__rrss">
          <a href="">
            <img src="./WhatsApp-white.png" alt="icono para ir a whatsapp" />
          </a>
          <a href="">
            <img src="./Facebook-white.png" alt="icono para ir a facebook" />
          </a>
          <a href="">
            <img src="./Instagram-white.png" alt="icono para ir a instagram" />
          </a>
        </aside>
      </section>
    </footer>
  );
};

import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <img
          className="footer__logo"
          src="/logo.svg"
          alt="Logo Instalador de Calderas"
        />
        <aside className="footer__rrss">
          <a href="">
            <img
              className="rs__icon"
              src="/WhatsApp-white.png"
              alt="icono para ir a whatsapp"
            />
          </a>
          <a href="">
            <img
              className="rs__icon"
              src="/Facebook-white.png"
              alt="icono para ir a facebook"
            />
          </a>
          <a href="">
            <img
              className="rs__icon"
              src="/Instagram-white.png"
              alt="icono para ir a instagram"
            />
          </a>
        </aside>
      </section>
    </footer>
  );
};

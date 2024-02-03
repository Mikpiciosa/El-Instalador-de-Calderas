import "./Services.css";

export const Services = () => {
  return (
    <section className="services">
      <h2 className="services__title"> Nuestros servicios</h2>
      <p className="services__pf">
        Desde EIDC intentamos dar la mejor calidad de instalación y brindar la
        mejor experiencia con el cliente en el transcurso de su obra.
      </p>

      <article className="services__card crd1">
        <div className="services__text">
          <h2 className="card__title">Instaciones</h2>
          <p className="card__pf">
            Desde EIDC intentamos dar la mejor calidad de instalación y brindar
            la mejor experiencia con el cliente en el transcurso de su obra.
          </p>
        </div>
      </article>
      <article className="services__card 2">
        <div className="services__text">
          <h2 className="card__title">Reparaciones</h2>
          <p className="card__pf">
            Desde EIDC intentamos dar la mejor calidad de instalación y brindar
            la mejor experiencia con el cliente en el transcurso de su obra.
          </p>
        </div>
      </article>
      <article className="services__card 3">
        <div className="services__text">
          <h2 className="card__title">Repuestos</h2>
          <p className="card__pf">
            Desde EIDC intentamos dar la mejor calidad de instalación y brindar
            la mejor experiencia con el cliente en el transcurso de su obra.
          </p>
        </div>
      </article>
      <button className="services__btn">Saber más</button>
    </section>
  );
};

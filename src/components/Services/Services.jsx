import "./Services.css";

export const Services = () => {
  return (
    <section className="services" id="services-id">
      <section className="ctn-services">
        <h2 className="services__title"> Nuestros servicios</h2>
        <p className="services__pf">
          Desde EIDC intentamos dar la mejor calidad de instalación y brindar la
          mejor experiencia con el cliente en el transcurso de su obra.
        </p>
        <section className="services__cards">
          <article className="services__card productos">
            <div className="services__text">
              <h2 className="card__title">Venta de producto</h2>
              <p className="card__pf">
                COMERCIALIZAMOS LAS PRINCIPALES MARCAS DE PRODUCTOS PARA
                CALEFACCIÓN DEL MERCADO.
              </p>
              <button className="services__btn">Info</button>
            </div>
          </article>
          <article className="services__card respuestos">
            <div className="services__text">
              <h2 className="card__title">Venta de repuestos</h2>
              <p className="card__pf">
                Podemos conseguir el repuesto que necesites para tu caldera
                PEISA o Baxi.
              </p>
              <button className="services__btn">Info</button>
            </div>
          </article>
          <article className="services__card instalaciones">
            <div className="services__text">
              <h2 className="card__title">Instalaciones</h2>
              <p className="card__pf">
                Desde EIDC intentamos dar la mejor calidad de instalación y
                brindar la mejor experiencia con el cliente en el transcurso de
                su obra.
              </p>
              <button className="services__btn">Info</button>
            </div>
          </article>
          <article className="services__card deteccion">
            <div className="services__text">
              <h2 className="card__title">
                Deteccion de perdidas con Camara Termografica
              </h2>
              <p className="card__pf">
                Servicio de detección de fugas con cámara termográfica. Incluye
                visita de inspección de 3 horas y envío digital de imágenes con
                sugerencias de ubicación de la fuga.
              </p>
              <button className="services__btn">Info</button>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

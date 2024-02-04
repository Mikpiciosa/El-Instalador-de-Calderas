import "./About.css";

export const About = () => {
  return (
    <section className="about">
      <div className="about__text--container">
        <h2 className="about__title">Sobre Nosotros</h2>
        <div className="about__text">
          <p className="text__one">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis pulvinar leo, quis posuere nulla. Donec hendrerit iaculis nibh
            vulputate volutpat.
          </p>
          <p className="text__two">
            Aliquam erat volutpat. In sodales odio at velit ultricies, sit amet
            ornare nulla rutrum. In scelerisque ut metus sit amet tempus.
          </p>
        </div>
      </div>
      <img className="about__img" src="./about.png" alt="sobre nosotros" />
    </section>
  );
};

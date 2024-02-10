import { About } from "../../About/About";
import { Carrousel } from "../../Carrusel/Carrousel";
import { Footer } from "../../Footer/Footer";
import { FrontPage } from "../../FrontPage/FrontPage";
import { Services } from "../../Services/Services";

const Home = () => {
  return (
    <>
      <FrontPage />
      <Services />
      <About />
      <Carrousel />
    </>
  );
};

export default Home;

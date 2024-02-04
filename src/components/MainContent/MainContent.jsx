import "./MainContent.css";
import { FrontPage } from "../Frontpage/Frontpage";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Carrousel } from "../Carrusel/Carrousel";
import { Footer } from "../Footer/Footer";

export const MainContent = () => {
  return (
    <section>
      <Header></Header>
      <main>
        <FrontPage></FrontPage>
        <Services></Services>
        <About></About>
        <Carrousel></Carrousel>
      </main>
      <Footer></Footer>
    </section>
  );
};

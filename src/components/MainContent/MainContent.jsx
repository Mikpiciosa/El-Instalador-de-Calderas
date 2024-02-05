import "./MainContent.css";
import { FrontPage } from "../Frontpage/Frontpage";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Carrousel } from "../Carrusel/Carrousel";
import { Footer } from "../Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsPage } from "../Pages/ProductsPage/ProductsPage";

export const MainContent = () => {
  const FirstPage = () => {
    return (
      <main>
        <FrontPage></FrontPage>
        <Services></Services>
        <About></About>
        <Carrousel></Carrousel>
      </main>
    );
  };
  return (
    <BrowserRouter>
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/products"
            element={<ProductsPage></ProductsPage>}
          ></Route>
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
};

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

const Root = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Root;

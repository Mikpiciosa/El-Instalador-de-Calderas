import "./MainContent.css";
import { FrontPage } from "../Frontpage/Frontpage";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { About } from "../About/About";

export const MainContent = () => {
  return (
    <>
      <Header></Header>
      <FrontPage></FrontPage>
      <Services></Services>
      <About></About>
    </>
  );
};

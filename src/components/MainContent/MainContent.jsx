// import "./MainContent.css";
// import { FrontPage } from "../FrontPage/FrontPage";
// import { Header } from "../Header/Header";
// import { Services } from "../Services/Services";
// import { About } from "../About/About";
// import { Carrousel } from "../Carrusel/Carrousel";
// import { Footer } from "../Footer/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ProductsPage } from "../Pages/ProductsPage/ProductsPage";
// import { ChooseProduct } from "../Pages/ChooseProduct/ChooseProduct";
// import { UserContextProvider } from "../../../ProductsContext";

// export const MainContent = () => {
//   const servicesProducts = [
//     {
//       titulo: "Calderas",
//       descripcion: "Soy una caldera",
//       imagen: "/calderas.png",
//     },
//     {
//       titulo: "Radiadores",
//       descripcion: "Soy un radiador",
//       imagen: "/radiadores.png",
//     },
//     {
//       titulo: "Radiadores Toalleros",
//       descripcion: "Soy un radiador toallero",
//       imagen: "/radiadores-toalleros.png",
//     },
//     {
//       titulo: "Pisos Radiantes",
//       descripcion: "Soy un piso radiante",
//       imagen: "/pisos-radiantes.png",
//     },
//   ];

//   const FirstPage = () => {
//     return <main></main>;
//   };
//   return (
//     <BrowserRouter>
//       <UserContextProvider>
//         <section>
//           <Header />
//           <Routes>
//             <Route path="/" element={<FirstPage />} />
//             <Route
//               path="/products"
//               element={<ProductsPage></ProductsPage>}
//             ></Route>
//             <Route
//               path="/products/:title"
//               element={<ChooseProduct></ChooseProduct>}
//             ></Route>
//           </Routes>
//           <Footer />
//         </section>
//       </UserContextProvider>
//     </BrowserRouter>
//   );
// };

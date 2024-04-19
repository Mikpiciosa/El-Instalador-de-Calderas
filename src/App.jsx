import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import ProductsPage from "./components/Pages/ProductsPage/ProductsPage.jsx";
import ChooseProduct from "./components/Pages/ChooseProduct/ChooseProduct.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:title",
        element: <ChooseProduct />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

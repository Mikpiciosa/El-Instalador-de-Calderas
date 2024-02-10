import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import ProductsPage from "./components/Pages/ProductsPage/ProductsPage.jsx";
import ChooseProduct from "./components/Pages/ChooseProduct/ChooseProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Home />
      </Root>
    ),
  },
  {
    path: "/products",
    element: (
      <Root>
        <ProductsPage />
      </Root>
    ),
  },
  {
    path: "/products/:title",
    element: (
      <Root>
        <ChooseProduct />
      </Root>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

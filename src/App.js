import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <>
      <MainHeader />
      <Route path="/welcome">
        <Welcome /> {/* Renders this if the path ends in /welcome*/}
      </Route>
      <Route path="/products">
        <Products /> {/* Renders this if the path ends in /products*/}
      </Route>
      <Route path="/product-detail/:productID">
        <ProductDetail />
      </Route>
    </>
  );
}

export default App;

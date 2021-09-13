import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <>
      <MainHeader />

      <Switch>
        <Route path="/welcome">     ROUTE 1
          <Welcome />
        </Route>
        <Route path="/products">    ROUTE 2
          <Products />
        </Route>
        <Route path="/products/:productID" exact>     ROUTE 3
          <ProductDetail />
        </Route>
      </Switch>
      
      

    </>
  );
}

export default App;

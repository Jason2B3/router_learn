import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
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
      <h1>Appears by default, and after each route</h1>
    </>
  );
}

export default App;

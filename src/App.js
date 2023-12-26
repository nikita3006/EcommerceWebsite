import { Fragment } from "react";
import MainNavbar from "./Components/Header/MainNavbar";
import ProductsOnScreen from "./Components/Products/Product";
import MainFooter from "./Components/Header/MainFooter";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";

const App=()=> {
  return (
    <Fragment>
      <header>  
        <MainNavbar/>
        <Header/>
      </header>
      <Cart/>
      <body>
        <ProductsOnScreen/>
      </body>
      <footer>
        <MainFooter/> 
      </footer>
    </Fragment>
  );
}

export default App;
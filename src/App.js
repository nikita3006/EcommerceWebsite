import { Fragment } from "react";
import './App.css'
import MainNavbar from "./Components/Header/MainNavbar";
import ProductsOnScreen from "./Components/Products/Product";
import MainFooter from "./Components/Header/MainFooter";
import Header from "./Components/Header/Header";

const App=()=> {
  return (
    <Fragment>
      <header>
        <MainNavbar/>
        <Header/>
      </header>
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
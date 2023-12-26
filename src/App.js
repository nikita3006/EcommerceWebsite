import CartContextProvider from "./Components/Context/CartContextProvider";
import MainNavbar from "./Components/Header/MainNavbar";
import ProductsOnScreen from "./Components/Products/Product";
import MainFooter from "./Components/Header/MainFooter";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

const App=()=> {
  const [showCart,setShowCart]=useState(false)
  const showCartOnScreen=()=>{setShowCart(true)}
  const hideCart=()=>{setShowCart(false)}
  return (
    <CartContextProvider>
      <header>  
        <MainNavbar onShow={showCartOnScreen}/>
        <Header/>
      </header>
      {showCart && <Cart  onClose={hideCart}/>}
      <ProductsOnScreen/>

      
      <footer>
        <MainFooter/> 
      </footer>
    </CartContextProvider>
  );
}

export default App;
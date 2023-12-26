import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import CartContextProvider from './Components/Context/CartContextProvider'


const App=()=> {
  const router=createBrowserRouter([
    {path:'/' , element: <Home/>},
    {path:'/About' , element : <About/>}
  ])
  return (
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  );
}
export default App;
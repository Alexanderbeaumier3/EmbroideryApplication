import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import ShopCatagory from './Components/Pages/ShopCatagory';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/customizable" element={<ShopCatagory catagory="customizable"/>}/>
          <Route path="/pre-made" element={<ShopCatagory catagory="pre-made"/>}/>
          <Route path="/product" element={<Product/>}/>
            <Route path="/productid" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

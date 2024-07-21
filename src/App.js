import React from 'react';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min"
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-loading-skeleton/dist/skeleton.css'
import "./App.css"
import Cart from './Pages/Componets/Navbar/Cart';
import ProductDetail from "./Pages/Componets/Content/ProductDetail"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       { 
          // <Route path="/" element={<Home/>} />
        }
        <Route path="/" element={<Home/>} />
           <Route path="/product/:id" element={<ProductDetail />} />
      
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/create' element={<createProduct/>} />
       
      </Routes>
    </BrowserRouter>

    
  );
};

export default App;

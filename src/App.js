import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contacto from './pages/Contacto/Contacto';
import ProductPage from './pages/ProductPage/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'

function App() {

  return (
    <div className="App" >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/products"  element={<ProductPage/>} />
            <Route exact path="/contact"  element={<Contacto/>} />
            <Route exact path="/products/:id"  element={<ProductDetailPage/>} />
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

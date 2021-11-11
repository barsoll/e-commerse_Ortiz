import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

function App() {

  return (
    <div className="App" >
      <Header />
      <ProductListContainer/>
      <ProductDetailContainer/>
    </div>
  );
}

export default App;

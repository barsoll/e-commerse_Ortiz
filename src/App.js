import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';

function App() {

  return (
    <div className="App" >
      <Header />
      <ProductListContainer/>
    </div>
  );
}

export default App;

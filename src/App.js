import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {

  return (
    <div className="App" >
      <Header />
      <Product price='200' title='Producto 1' stock='15'/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const style = {
  backgroundColor: 'pink',
  color: 'white',
  fontSize: '15px',
  padding: '10px'
}

function App() {

  return (
    <div className="App" style={ style }>
      <h1>Artículos de repostería </h1>
      <NavBar />
      
    </div>
  );
}

export default App;

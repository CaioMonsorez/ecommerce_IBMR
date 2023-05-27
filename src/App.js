import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div>
Bonés
        </div>
        <div>
Camisas
        </div>
        <div>
Calças
        </div>
        <div>
Sapatos
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Batata Palha com Aspargos!
        </p>
        <a
          className="App-link"
          href="https://www.insiderstore.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Insider a qual vamos nos basear
        </a>
      </header>
    </div>
  );
}

export default App;

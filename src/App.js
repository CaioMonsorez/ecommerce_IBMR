import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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

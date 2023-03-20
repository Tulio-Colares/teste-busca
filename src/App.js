import logo from './logo.svg';
import './App.css';
import Busca from './components/Busca';
import Dropdown from './components/Dropdown';
import TesteFiltro from './components/TesteFiltro';
import Vitrine from './components/Vitrine';
import ResultadosRecentes from './components/ResultadosRecentes';

function App() {
  return (
    <div className="App">
      Página inicial
      <Busca/>
      <Vitrine/>
      <ResultadosRecentes/>
    </div>
  );
}

export default App;

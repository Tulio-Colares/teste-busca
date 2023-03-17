import logo from './logo.svg';
import './App.css';
import Busca from './components/Busca';
import Vitrine from './components/Vitrine';
import BarraDeBusca from './components/BarraDeBusca';

function App() {
  return (
    <div className="App">
      Página inicial
      <Busca/>
      <BarraDeBusca/>
      <Vitrine/>
    </div>
  );
}

export default App;

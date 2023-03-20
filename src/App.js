import './App.css';
import React, {useState} from 'react'
import Busca from './components/Busca';
import Vitrine from './components/Vitrine';
import ResultadosRecentes from './components/ResultadosRecentes';
import { suggestions } from './data/data'

function App() {
  const [lista, setLista] = useState(suggestions)
  const [pesquisados, setPesquisados] = useState([])

  return (
    <div className="App">
      Página inicial
      <Busca lista={lista} pesquisados={pesquisados} setLista={setLista} setPesquisados={setPesquisados}/>
      <Vitrine pesquisados={pesquisados}/>
      <ResultadosRecentes />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react'
import Busca from './components/Busca';
import Vitrine from './components/Vitrine';
import { suggestions } from './data/data'
import background from './images/background.jpg'
import { PesquisaContext } from './context/pesquisaContext';

function App() {
  const [lista, setLista] = useState(suggestions)
  const [pesquisados, setPesquisados] = useState([])
  const [isHover, setIsHover] = useState(false)

  const estilo = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100vh'
  }

  return (
    <div className="App" style={estilo}>
        <PesquisaContext.Provider value={{lista, setLista, pesquisados, setPesquisados, isHover, setIsHover }}>
          <Busca/>
          <Vitrine/>
      </PesquisaContext.Provider>
    </div>
  );
}

export default App;

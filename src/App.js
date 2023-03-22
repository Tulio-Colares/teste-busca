import './App.css';
import React, {useState} from 'react'
import Busca from './components/Busca';
import Vitrine from './components/Vitrine';
import { suggestions } from './data/data'
import background from './images/background.jpg'

function App() {
  const [lista, setLista] = useState(suggestions)
  const [pesquisados, setPesquisados] = useState([])
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: '100vh'
      }}>
      <Busca lista={lista} 
        pesquisados={pesquisados} 
        isHover={isHover} 
        setLista={setLista} 
        setPesquisados={setPesquisados} 
        setIsHover={setIsHover}/>
      <Vitrine pesquisados={pesquisados}/>
    </div>
  );
}

export default App;

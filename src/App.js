import './App.css';
import React, {useState} from 'react'
import Busca from './components/Busca';
import Vitrine from './components/Vitrine';

import background from './images/background.jpg'
import { PesquisaProvider } from './context/pesquisaContext';

function App() {

  const estilo = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100vh'
  }

  return (
    <div className="App" style={estilo}>
      <PesquisaProvider>
        <Busca/>
        <Vitrine/>
      </PesquisaProvider>
    </div>
  );
}

export default App;

import React, { useState } from 'react'


const Busca = ({lista, setLista, pesquisados, setPesquisados}) => {
    const [texto, setTexto] = useState('')
    const [hidden, setHidden] = useState(true)


    const alterarTexto = (e) => {
        setTexto(e.target.value)
        console.log(texto)
    }

    const adicionarNaLista = () => {
        const id = lista.length + 1
        setLista((lista) => [{ id: id, suggestion: texto}, ...lista])
        setPesquisados((pesquisados) => [{id: id, suggestion: texto}, ...pesquisados])
        setTexto("")
    }

  return (
    <div>
        <button onClick={() => adicionarNaLista()}>Buscar</button>
        <input 
            type='text' 
            placeholder='texto aqui' 
            name="itemDeBusca" 
            onChange={(e) => setTexto(e.target.value)} 
            value={texto}>
        </input>
        <button onClick={() => setHidden( s => !s)}>Lista</button>
        <br/>
        <div
            name="itemDeBusca" 
            placeholder='Busca' 
            //onChange={(suggest) => adicionarNosPesquisados(suggest)}
        >
            <ul>{!hidden ? 
                lista.map(suggest => (
                    <li onClick={() => console.log('clicou')}>{suggest.suggestion}</li>
                )) : null }
            </ul>
        </div>
        <br/>
    </div>
  )
}

export default Busca
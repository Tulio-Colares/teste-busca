import React, { useState } from 'react'


const Busca = ({lista, setLista, pesquisados, setPesquisados}) => {
    const [texto, setTexto] = useState('')
    const [hidden, setHidden] = useState(true)

    console.log(texto)

    const alterarTexto = (e) => {
        setTexto(e.target.value)
        escondeLista()
    }

    const adicionarTextoNaLista = () => {
        const id = lista.length + 1
        //setLista((lista) => [{ id: id, suggestion: texto}, ...lista])
        setPesquisados((pesquisados) => [{id: id, suggestion: texto}, ...pesquisados])
        setTexto("")
        setHidden(true)
    }

    const ClicaEnter = (event) => {
        if (event.key === 'Enter'){
            adicionarTextoNaLista()
        }
    }

    const adicionarItemNaLista = (suggest) => {
        setPesquisados((pesquisados) => [{id: suggest.id, suggestion: suggest.suggestion}, ...pesquisados])
        console.log(suggest.suggestion)
        setTexto("")
        setHidden(true)
    }

    const escondeLista = () => {
        if (texto.length == 0 ){
            setHidden(true)
        }else{
            setHidden(false)
        }
    }

  return (
    <div style={{ border: '1px solid black'}}>
        <button onClick={() => adicionarTextoNaLista()} >Buscar</button>
        <input 
            type='text' 
            placeholder='texto aqui' 
            name="itemDeBusca" 
            onChange={(e) => alterarTexto(e)} 
            onFocus={() => setHidden(false)}
            onBlur={() => setTimeout(() => setHidden(true), 100)}
            onKeyUp={ClicaEnter}
            autoComplete="off"
            value={texto}>
        </input>
        <button onClick={() => setHidden(s => !s)}>Lista</button>
        <br/>
        <div
            name="itemDeBusca" 
            placeholder='Busca' 
            style={{height: "13rem", width: "17.4rem", border: '1px solid black' , overflow: "auto", margin: 'auto'}}
        >
            <ul style={{listStyle: "none"}}>{!hidden ? 
                lista.filter((item) => item.suggestion.toLowerCase().includes(texto)).map(suggest => (
                    <li
                        onClick={() => adicionarItemNaLista(suggest)} 
                        style={{cursor: 'pointer'}}
                        key={suggest.id}
                    >{suggest.suggestion}</li>
                )) : null }     
            </ul>
        </div>
        <br/>
    </div>
  )
}

export default Busca
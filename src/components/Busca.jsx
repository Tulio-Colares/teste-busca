import React, { useState, useContext } from 'react'
import { PesquisaContext } from '../context/pesquisaContext'

const Busca = () => {
    const { lista, pesquisados, isHover, setPesquisados, setIsHover } = useContext(PesquisaContext)
    const [texto, setTexto] = useState('')
    const [hidden, setHidden] = useState(true)

    console.log(texto)

    const alterarTexto = (e) => {
        setTexto(e.target.value)
        escondeLista()
    }

    //Faz alterações na lista original de suggestions

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

    //Faz alterações na lista secundária, de itens já pesquisados anteriormente, que inicia vazia
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

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const liStyle = {
        cursor: 'pointer',
        backgroundColor: isHover ? 'white' : null,
        border: '1px solid black'
    }

  return (
    <div>
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
        <button onClick={() => setHidden(s => !s)}>Mostrar Lista</button>
        <br/>
        <div
            name="itemDeBusca" 
            placeholder='Busca' 
            style={{height: "13rem", width: "17.4rem", overflow: "auto", margin: 'auto'}}
        >
            <ul style={{listStyle: "none"}}>{!hidden ? 
                lista.filter((item) => item.suggestion.toLowerCase().includes(texto)).map(suggest => (
                    <li
                        onClick={() => adicionarItemNaLista(suggest)} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        key={suggest.id}
                        style={liStyle}
                    >{suggest.suggestion}</li>
                )) : null }  
            </ul>
        </div>
        <br/>
    </div>
  )
}

export default Busca
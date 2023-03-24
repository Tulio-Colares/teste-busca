import React, { useState, useContext } from 'react'
import { PesquisaContext } from '../context/pesquisaContext'

const Busca = () => {
    const { lista, pesquisados, isHover, setPesquisados, setIsHover } = useContext(PesquisaContext)
    const [texto, setTexto] = useState('')
    const [hidden, setHidden] = useState(true)

    const alterarTexto = (e) => {
        setTexto(e.target.value)
        escondeLista()
    }

    //Adiciona o texto escrito pelo usuário na lista de itens pesquisados anteriormente, que inicia vazia
    const adicionarTextoNaLista = () => {
        const id = lista.length + 1
        setPesquisados((pesquisados) => [{id: id, suggestion: texto}, ...pesquisados])
        setTexto("")
        setHidden(true)
    }

    const ClicaEnter = (event) => {
        if (event.key === 'Enter'){
            adicionarTextoNaLista()
        }
    }

    //Para itens da lista dropdown que, ao serem clicados, são copiados para a lista de itens já 
    //pesquisados anteriormente, que inicia vazia
    const adicionarItemNaLista = (suggest) => {
        setPesquisados((pesquisados) => [{id: suggest.id, suggestion: suggest.suggestion}, ...pesquisados])
        console.log(suggest.suggestion)
        setTexto("")
        setHidden(true)
    }

    const escondeLista = () => {
        if (texto.length === 0 ){
            setHidden(true)
        }else{
            setHidden(false)
        }
    }

    const liStyle = {
        cursor: 'pointer',
        backgroundColor: isHover ? 'white' : null,
        border: '1px solid black'
    }

    const inputStyle = {
        height: '2rem', 
        borderRadius: '5px',
        width: '20rem',
        fontSize: '1.5rem',
        border: 0
    }

    const estiloLista = {
        height: "13rem", 
        width: "17.4rem", 
        overflow: "auto", 
        margin: 'auto', 
    }

  return (
    <div>
        <br/>
        <input 
            type='text' 
            placeholder='Busque aqui...' 
            name="itemDeBusca" 
            onChange={(e) => alterarTexto(e)} 
            onFocus={() => setHidden(false)}
            onBlur={() => setTimeout(() => setHidden(true), 100)}
            onKeyDown={ClicaEnter}
            autoComplete="off"
            value={texto}
            style={inputStyle}
            >
        </input>
        <div style={estiloLista}
        >
            <ul style={{listStyle: "none", padding: 0}}>{!hidden ? 
                lista.filter((item) => item.suggestion.toLowerCase().includes(texto)).map(suggest => (
                    <li
                        onClick={() => adicionarItemNaLista(suggest)} 
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
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
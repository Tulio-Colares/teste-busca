import React, { useState } from 'react'


const Busca = ({lista, setLista, pesquisados, setPesquisados}) => {
    const [texto, setTexto] = useState('')
    const [hidden, setHidden] = useState(true)


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
        if (texto.length >= 0 ){
            setHidden(false)
        }else{
            setHidden(true)
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
            onKeyUp={ClicaEnter}
            value={texto}>
        </input>
        <button onClick={() => setHidden(s => !s)}>Lista</button>
        <br/>
        <div
            name="itemDeBusca" 
            placeholder='Busca' 
            style={{height: "200px", width: "265px", border: '1px solid black' , overflow: "auto", margin: 'auto'}}
        >
            <ul style={{listStyle: "none"}}>{!hidden ? 
                lista.map(suggest => (
                    <li 
                        onClick={() => adicionarItemNaLista(suggest)} 
                        style={{cursor: 'pointer'}}
                    >{suggest.suggestion}</li>
                )) : null }     
            </ul>
        </div>
        <br/>
    </div>
  )
}

export default Busca
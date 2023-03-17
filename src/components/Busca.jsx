import React, { useEffect, useState } from 'react'
import { suggestions } from '../data/data'


const Busca = () => {
    const [text, setText] = useState("")
    const [item, setItem] = useState({})

    const alterarLista = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    const adicionarNaLista = () => {
        alert(`${text}`)
        setItem({ id: "1", suggestion: text})
        console.log(item)
    }


  return (
    <div>
        <button onClick={adicionarNaLista}>Buscar</button>
        <input 
            name="itemDeBusca" 
            placeholder='Busca' 
            onChange={alterarLista} 
            value={text}
        />
    </div>
  )
}

export default Busca
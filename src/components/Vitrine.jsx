import React, {useContext} from 'react';
import { PesquisaContext } from '../context/pesquisaContext'

const Vitrine = () => {
  const {pesquisados} = useContext(PesquisaContext)
  return (
    <div>
      <h2>Pesquisados Recentemente</h2>
        {pesquisados.map(pesquisado => (
            <p key={pesquisado.id}>{pesquisado.suggestion}</p>
        ))}
    </div>
  )
}

export default Vitrine
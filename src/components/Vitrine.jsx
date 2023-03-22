import React, {useContext} from 'react';
import { PesquisaContext } from '../context/pesquisaContext'

const Vitrine = () => {
  const {pesquisados} = useContext(PesquisaContext)
  return (
    <div>
      <h3>Pesquisados Recentemente</h3>
        {pesquisados.map(pesquisado => (
            <h5 key={pesquisado.id}>{pesquisado.suggestion}</h5>
        ))}
    </div>
  )
}

export default Vitrine
import React from 'react';
import {suggestions} from '../data/data'

const Vitrine = ({pesquisados}) => {
  return (
    <div>
      <h3>Pesquisados Recentemente</h3>
        {pesquisados.map(item => (
            <h5 key={item.id}>{item.suggestion}</h5>
        ))}
    </div>
  )
}

export default Vitrine
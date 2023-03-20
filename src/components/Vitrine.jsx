import React from 'react';
import {suggestions} from '../data/data'

const Vitrine = ({pesquisados}) => {
  return (
    <div>
        {pesquisados.map(item => (
            <h4>{item.suggestion}</h4>
        ))}
    </div>
  )
}

export default Vitrine
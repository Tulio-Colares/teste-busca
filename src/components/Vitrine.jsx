import React from 'react';
import {suggestions} from '../data/data'

const Vitrine = () => {
  return (
    <div>
        {suggestions.map(suggest => (
            <h4>{suggest.suggestion}</h4>
        ))}
    </div>
  )
}

export default Vitrine
import React from 'react'
import { suggestions } from '../data/data'

const TesteFiltro = () => {
    let filteredSuggestions = []
    const teste = suggestions.map( suggest => (
        filteredSuggestions.push(suggest.suggestion)
    ))
  return (
    <div>
        {filteredSuggestions}
    </div>
  )
}

export default TesteFiltro
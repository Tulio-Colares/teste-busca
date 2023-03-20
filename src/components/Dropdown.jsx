import React from 'react'
import Combobox from "react-widgets/Combobox";
import { suggestions } from '../data/data';

const Dropdown = () => {
    let filteredSuggestions = []
    const teste = suggestions.map( suggest => (
        filteredSuggestions.push(suggest.suggestion)
    ))
  return (
    <div>
        <Combobox
        hideCaret
        hideEmptyPopup
        data={filteredSuggestions}
        />
    </div>
  )
}

export default Dropdown
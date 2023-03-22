import { createContext, useState } from "react";
import { suggestions } from '../data/data'

export const PesquisaContext = createContext()

export const PesquisaProvider = ({children}) => {
  const [lista, setLista] = useState(suggestions)
  const [pesquisados, setPesquisados] = useState([])
  const [isHover, setIsHover] = useState(false)

  return (
    <PesquisaContext.Provider 
        value={{lista, setLista, pesquisados, setPesquisados, isHover, setIsHover }}>
            {children}
        </PesquisaContext.Provider>
  )
}
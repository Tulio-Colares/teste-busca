import React, {useContext} from 'react';
import { PesquisaContext } from '../context/pesquisaContext'
import Modal2 from './Modal2'

const Vitrine = () => {
  const {pesquisados, openModal, setOpenModal} = useContext(PesquisaContext)
  
  return (
    <div>
      <h2>Pesquisados Recentemente</h2>
      <button onClick={() => console.log(pesquisados)}>Mostrar console</button>
      <button onClick={() => setOpenModal(true)}>Apagar histórico</button>
        {openModal && <Modal2/>}
        {pesquisados.map(pesquisado => (
            <p key={pesquisado.id}>{pesquisado.suggestion}</p>
        ))}
    </div>
  )
}

export default Vitrine
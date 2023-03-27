import React, {useContext} from 'react';
import { PesquisaContext } from '../context/pesquisaContext'
import Modal from './Modal'
import "./Modal.css";

const Vitrine = () => {
  const {pesquisados, openModal, setOpenModal} = useContext(PesquisaContext)

  const styleBtn = {
    width: '250px',
    height: '35px',
    margin: '10px',
    border: 'none',
    backgroundColor: '#87CEEB',
    color: 'white',
    borderRadius: '8px',
    fontSize: '20px',
    cursor: 'pointer',
  }
  
  return (
    <div>
      <h2>Pesquisados Recentemente</h2>
      <button onClick={() => setOpenModal(true)} style={styleBtn} >Apagar histórico</button>
        {openModal && <Modal/>}
        {pesquisados.map(pesquisado => (
            <p key={pesquisado.id}>{pesquisado.suggestion}</p>
        ))}
    </div>
  )
}

export default Vitrine
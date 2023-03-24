import React, {useContext} from 'react';
import {PesquisaContext} from '../context/pesquisaContext';

const Modal = () => {
  const { setOpenModal, pesquisados, setPesquisados} = useContext(PesquisaContext)

  const clearHistory = () => {
    setPesquisados([])
    setOpenModal(false)
  }

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button onClick={() => setOpenModal(false)}>X</button>
        <div className='title'>
        <h1>Tem certeza de que quer apagar todos os dados do histórico?</h1>
        </div>
        <div className='body'></div>
        <div className='footer'>
          <button onClick={() => setOpenModal(false)}>Cancelar</button>
          <button onClick={clearHistory()}>Apagar!</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
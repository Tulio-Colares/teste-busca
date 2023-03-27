import React, {useContext} from "react";
import { PesquisaContext } from "../context/pesquisaContext";
import "./Modal.css";

function Modal() {
  const { setOpenModal, setPesquisados} = useContext(PesquisaContext)

  const clearHistory = () => {
    setPesquisados([]);
    setOpenModal(false)
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => setOpenModal(false)}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Tem certeza de que deseja apagar o historico?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => setOpenModal(false)}
            id="cancelBtn"
          >
            Cancelar
          </button>
          <button onClick={clearHistory}>Sim, apagar!</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
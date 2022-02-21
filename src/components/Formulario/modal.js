import React from 'react';
import "./modal.css"
function ModalForm({handleModalSalir, isOpen}) {

    // console.log(usuario.usuario.nombre)

    return (
    
        <div className={ `modal ${isOpen && "is-open" }`}  >
            <div className="modal-container">   
                <h1 className="titiulo-modal">Compra Finalizada</h1>
                <p className="parrafo-modal">Número de orden: {Math.round(Math.random() *100000)}</p> 
                <button className="btn-modal" onClick={handleModalSalir}>aceptar</button>
            </div>
      </div>
  );
}

export default ModalForm;

import React from 'react';
import { useContext } from 'react'
import { contexto } from '../CartContext/CartContext'
import './ItemCount.css'
import { useHistory } from 'react-router-dom'

const ItemCount = ({
  stock,
  contador,
  setContador,
  dato,
  terminarCompra,
  setTerminarCompra
}) => {
  const history = useHistory()
  const { addItem, setShow } = useContext(contexto)

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(parseInt(contador) + 1)
    }
  }

  const restarContador = () => {
    if (contador > 1) {
      setContador(contador - 1)
    }
  }

  dato.count = contador

  const onAdd = () => {
    addItem(dato)

    setShow(true)
    if (terminarCompra === false) {
      setTerminarCompra(true)
    }
  }

  const handleCompra = () => {
    history.push('/Cart')
  }

  return (
    <>
      <div className='container-compra'>
        <button onClick={restarContador}>-</button>
        <label>{contador}</label>
        <button onClick={aumentarContador}>+</button>
      </div>
      {terminarCompra ? (
        <button className='button-carrito-terminar' onClick={handleCompra}>
          Terminar Compra
        </button>
      ) : (
        <button className='button-carrito' onClick={onAdd}>
          Agregar a Carrito
        </button>
      )}
    </>
  )
}

export default ItemCount

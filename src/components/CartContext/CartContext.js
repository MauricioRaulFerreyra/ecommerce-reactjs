import { createContext } from 'react'
import { useState } from 'react'

export const contexto = createContext()
const CustomProvider = ({ children }) => {
  const [mostrar, setMostrar] = useState([])

  const [itemsCarrito, setItemsCarrito] = useState({
    carrito: [],
    countCarrito: 0
  })

  const [show, setShow] = useState(false)

  const addItem = item => {
    const cartItem = itemsCarrito.carrito.find(el => el.id === item.id)

    cartItem
      ? setItemsCarrito({
          ...itemsCarrito,
          carrito: itemsCarrito.carrito.map(el =>
            el.id === item.id
              ? { ...el, count: parseInt(el.count) + parseInt(item.count) }
              : el
          )
        })
      : setItemsCarrito({
          ...itemsCarrito,
          carrito: [...itemsCarrito.carrito, { ...item, count: item.count }],
          countCarrito: itemsCarrito.countCarrito + 1
        })
  }

  const RemoveItem = id => {
    const newCarrito = itemsCarrito.carrito.filter(
      producto => producto.id !== id
    )
    setItemsCarrito({
      ...itemsCarrito,
      carrito: newCarrito,
      countCarrito: itemsCarrito.countCarrito - 1
    })
    if (itemsCarrito.countCarrito === 1) {
      setShow(false)
    }
  }

  const removeAll = () => {
    setItemsCarrito({
      carrito: [],
      countCarrito: 0
    })
    setShow(false)
  }

  return (
    <contexto.Provider
      value={{
        mostrar,
        setMostrar,
        itemsCarrito,
        setItemsCarrito,
        addItem,
        show,
        setShow,
        RemoveItem,
        removeAll
      }}
    >
      {children}
    </contexto.Provider>
  )
}

export default CustomProvider

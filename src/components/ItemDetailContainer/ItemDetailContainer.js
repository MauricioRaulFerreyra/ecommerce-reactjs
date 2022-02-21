import ItemDetail from './ItemDetail'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { contexto } from '../CartContext/CartContext'
import { firestore } from '../Firebase/Firebase'
const ItemDetailContainer = () => {
  const { setMostrar } = useContext(contexto)
  const params = useParams()
  useEffect(() => {
    const db = firestore
    const collection = db.collection('productos')
    const filtro = collection.doc(params.id)
    const query = filtro.get()
    query.then(response => {
      const id = response.id
      const data = response.data()
      const data_final = { id, ...data }
      return setMostrar(data_final)
    })
  }, [params])

  return (
    <div>
      <h1 className='title'>PRODUCTOS</h1>
      <div className='productos'>{<ItemDetail />}</div>
    </div>
  )
}

export default ItemDetailContainer

import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../Firebase/Firebase'

function ItemListContainer () {
  const [datos, setDatos] = useState([])
  const params = useParams()
  useEffect(() => {
    const db = firestore
    const collection = db.collection('productos')

    if (params.id === undefined) {
      const query = collection.get()
      query.then(response => {
        const resultado_parseado = []
        response.forEach(documento => {
          const id = documento.id
          const data = documento.data()
          const data_final = { id, ...data }
          resultado_parseado.push(data_final)
        })
        setDatos(resultado_parseado)
      })
    } else {
      const filtro = collection.where('categoria', '==', params.id)
      const query = filtro.get()
      query.then(response => {
        const resultado_parseado = []
        response.forEach(documento => {
          const categoria = documento.categoria
          const data = documento.data()
          const data_final = { categoria, ...data }
          resultado_parseado.push(data_final)
        })
        setDatos(resultado_parseado)
      })
    }
  }, [params])

  return (

  <div>
    <h1 className='title'>PRODUCTOS</h1>
    <ItemList datos={datos} />
  </div>
  )
}

export default ItemListContainer

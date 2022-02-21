import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { contexto } from '../CartContext/CartContext'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
  const params = useParams()
  const { count } = params
  const { mostrar } = useContext(contexto)
  const [terminarCompra, setTerminarCompra] = useState(false)

  mostrar.count = count

  const [contador, setContador] = useState(count)

  return (
    <div className='producto-detalle'>
      <div className='producto-detalle-image'>
        <a href=' #'>
          <div className='producto_img'>
            <img src={mostrar.image} alt='imagen' />
          </div>
        </a>
      </div>

      <div className='producto_footer'>
        <h1> {mostrar.title} </h1>
        <p> {mostrar.category} </p>
        <p className='producto_footer-parrafo'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          neque ipsa modi facilis enim deserunt eveniet dolorem blanditiis
          delectus culpa dolores! Dolor cum commodi explicabo consectetur,
          possimus minus et dignissimos.
        </p>
        <p className='price'>${mostrar.price}</p>
        <ItemCount
          stock={5}
          initial={mostrar.stock >= 1 ? 1 : 0}
          contador={contador}
          setContador={setContador}
          dato={mostrar}
          terminarCompra={terminarCompra}
          setTerminarCompra={setTerminarCompra}
        />
      </div>
    </div>
  )
}

export default ItemDetail

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

function Item ({ datos }) {
  const [contador, setContador] = useState(1)

  return (
    <div className='producto'>
      <Link to={`/item/${datos.id}/${contador}`}>
        <div className='producto_img'>
          <img src={datos.image} alt='imagen' />
        </div>
      </Link>
      <h3 className='producto-price'>${datos.price}.00</h3>
      <div className='producto_footer'>
        <h1> {datos.title} </h1>
      </div>

      <ItemCount
        stock={10}
        initial={datos.stock >= 1 ? 1 : 0}
        contador={contador}
        setContador={setContador}
        dato={datos}
      />
      
    </div>
  )
}

export default Item

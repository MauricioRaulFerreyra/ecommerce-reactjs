import React from 'react'
import Item from './Item'

function ItemList ({datos}) {
  
  return (

    <div className="productos"> 

    { 
        datos.map(dato=><Item key={dato.id} datos={dato}  />)
   
    }

    </div>   

 ) }

export default ItemList

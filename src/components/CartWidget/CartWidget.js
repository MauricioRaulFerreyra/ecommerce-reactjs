import { useContext } from "react"
import { contexto } from "../CartContext/CartContext";
import {useHistory} from "react-router-dom";

const CartWidget = () =>{ 

    const {itemsCarrito} = useContext(contexto);
    const {countCarrito} = itemsCarrito;
    const history = useHistory();
    
    const handleShowCarrito = () =>{
        history.push("/Cart");
    } 
 
    return(
        <>
            <div  onClick={handleShowCarrito}className='cart'> 
                <box-icon name='cart'></box-icon>
                <span className='item_total'>{countCarrito}</span>
            </div>
      </>
    )
}

export default CartWidget

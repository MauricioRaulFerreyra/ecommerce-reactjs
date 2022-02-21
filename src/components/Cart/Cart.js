import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import "./Cart.css";
import Formulario from "../Formulario/Formulario";

const Cart =()=>{

    const {itemsCarrito, show, RemoveItem} = useContext(contexto);

    const {carrito} = itemsCarrito;

    return(

        <>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  
        <div className="container-carrito">
        {
            show ? 
            carrito.map(cart=>(
                <div key={cart.id} className="container-item">
                    <div className="container-image">
                        <img src ={cart.image} alt="imagen-zapatilla"/>
                    </div>
                    <div className="container-details">
                        <h3>{cart.title}</h3>
                        <h3>Cantidad: {cart.count}</h3>
                        <h4>SubTotal: ${cart.price * cart.count}.00</h4>
                        <button className="btn-carrito-eliminar" onClick={()=>RemoveItem(cart.id)}>Eliminar</button>
                    </div>
                </div>
            ) )
            : <h1>No hay productos en el carrito</h1> 
        }
        </div>
        {show ? 

                <div className="container-form-finalizar-compra">
                    <h2 className="titulo-formulario">Comprete el formulario para finalizar la compra</h2>
                    <Formulario />
                </div>
                : ""
        }
        
        </>

    )
}

export default Cart
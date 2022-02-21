import {useState} from 'react'
import {firestore} from '../Firebase/Firebase'
import "./formulario.css"
import { useContext } from "react";
import { contexto } from "../CartContext/CartContext";
import Modal from "./modal"

const initialState = {
    nombre:"",
    telefono:"",
    email:""
}

const validarCampos = (form) => {

        let errors = {}

        if(!form.nombre){
            errors.nombre = "Debes completar el campo nombre"
        } 

        if(!form.telefono){
            errors.telefono = "Debes completar el campo telefono"
        } 

        if(!form.email){
            errors.email = "Debes completar el campo email"
        } 
        
        return errors;    
    }
    
const Formulario = () => {   
    
    const [form, setForm] = useState(initialState)
     const [error, setError] = useState({})
    const {itemsCarrito, removeAll} = useContext(contexto);
    const {carrito} = itemsCarrito;

    const [isOpen, setIsOpen] = useState(false);

    let total = 0;
    let cantidad = 0;
    
    carrito.map(item =>(   
        total +=item.price * item.count
    ))  
    carrito.map(item =>(   
        cantidad += item.count
    ))  

    const handleModalSalir = () =>{
         removeAll()
        setIsOpen(false)
     } 
       
     const handleChange = (e) => {
         setForm({
             ...form,
             [e.target.name] : e.target.value
        })
    }
    const handleBlur = (e) => {
        handleChange(e);
         setError(validarCampos(form));
     }
     const realizarPedido = (e) => {

        const db = firestore
         const collection = db.collection("ordenes")  
    
         e.preventDefault() 
         setError(validarCampos(form))

         if(!Object.keys(validarCampos(form)).length )  {
        
            const buyer = {
                 usuario : { 
                     nombre : form.nombre,
                     telefono : form.telefono,
                     email : form.email
                 },
                 carrito
             }

             const query = collection.add(buyer)
             query.then((resultado)=>{
                console.log(resultado)
             }) 
             setIsOpen(true)
             
            console.log("Orden Enviada")
         }
     }

    return(

        <>
        
        <form onSubmit={realizarPedido}>

            <input 
                type="text" 
                placeholder="Nombre" 
                onChange={handleChange}
                value={form.nombre} 
                name="nombre" 
                onBlur={handleBlur}     
                 />
            { error.nombre && <p>{error.nombre}</p> }
            <input 
                type="text" 
                placeholder="Telefono" 
                onChange={handleChange} 
                value={form.telefono} 
                name="telefono"
                onBlur={handleBlur}     
                 />
            { error.telefono && <p>{error.telefono}</p> }
            <input 
                type="text" 
                placeholder="Email" 
                onChange={handleChange}  
                value={form.email} 
                name="email"
                onBlur={handleBlur}     
                />
            { error.email && <p>{error.email}</p> }

            <div className="container-finalizar-compra">
                <h2>Cantidad: {cantidad} </h2>
                <h2>ToTal: ${total}.00</h2>
                <button>Comprar</button>
                <button onClick={removeAll}>Limpiar Carrito</button>
            </div> 
        
        </form>

        <Modal 
            isOpen={isOpen} 
            handleModalSalir={handleModalSalir}  
            />
        
        </>
    )
    
}


export default Formulario




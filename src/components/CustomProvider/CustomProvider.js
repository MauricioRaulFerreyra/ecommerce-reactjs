
import {useState} from "react" ;
import {Provider} from "../ItemListContainer/contexto" ;

const CustomProvider = ({children}) => {

    const [nombre,setNombre] = useState("Horacio")
    

    const cambiarNombre = () => {
        setNombre("Carlos")
    }
    

    const valorDelContexto = {
        nombre : nombre,
        cambiarNombre : cambiarNombre
    }

    return(
        <Provider value={{nombre,cambiarNombre}}>
            {children}
        </Provider>
    )
}

export default CustomProvider ;
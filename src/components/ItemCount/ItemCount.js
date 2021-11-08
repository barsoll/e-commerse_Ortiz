import React, {useState} from "react";
import './ItemCount.css';

export default function ItemCount(props) {
    console.log("stock desde Item Count: ", props.stock)
const [count, setCount] = useState(0)

    const agregarProducto = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }
    const eliminarProducto = () => {
        if( count > 0 ) {
            setCount(count - 1)
        }
    }
    return(
        <div>
            <div className="itemCount">
            <button onClick={agregarProducto}>Añadir</button>
            <button onClick={eliminarProducto}>Eliminar</button>
            <h2>{count}</h2>
            </div>
        </div>
    )
}
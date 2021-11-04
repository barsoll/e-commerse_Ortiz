import React, {useState} from "react";
import Product from "../Product/Product";
import './ItemCount.css';

export default function ItemCount() {

const [count, setCount] = useState(0)
    const agregarProducto = () => {
        setCount(count + 1)
    }
    const eliminarProducto = () => {
        setCount(count - 1)
    }
    return(
        <div>
            <Product title='producto 1' price= '200' />
            <div className="itemCount">
            <button onClick={agregarProducto}>Añadir</button>
            <button onClick={eliminarProducto}>Eliminar</button>
            <h2>{count}</h2>
            </div>
        </div>
    )
}
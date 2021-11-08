import React from "react";
import './Product.css';
import prod1 from '../../assets/products/producto1.png';
import ItemCount from '../ItemCount/ItemCount.js'

const Product = (props) => {
    return(
        <div className="product">
            <div>
                <img src={prod1} alt=''/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <ItemCount stock={props.stock}/>
        </div>
    )
}

export default Product
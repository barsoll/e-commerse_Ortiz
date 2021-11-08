import React from "react";
import './Product.css';
import ItemCount from '../ItemCount/ItemCount.js'

const Product = (props) => {
    return(
        <div className="product">
            <div>
                <img src={"./assets/products/" + props.img} alt=''/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <ItemCount stock={props.stock}/>
        </div>
    )
}

export default Product
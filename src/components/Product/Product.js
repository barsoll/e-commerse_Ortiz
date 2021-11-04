import React from "react";
import './Product.css';
import prod1 from '../../assets/products/producto1.png';


const Product = (props) => {
    return(
        <div className="product">
            <div>
                <img src={prod1} alt=''/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>

        </div>
    )
}

export default Product
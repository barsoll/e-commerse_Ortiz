import React, {useState, useEffect} from 'react';
import './ProductDetail.css';

function ProductDetail(props) {
    console.log(props)
    return (
        <div className="detail-product">
            {console.log("Data desde detalle de producto: ", props.data)}
            <div>
                <img src={`./assets/products/${props.data.img}`} />
            </div>
            <div>
                <h3>{props.data.title}</h3>
                <p>{props.data.price}</p>
                <p className='description-product'>Batidor de color. </p>
            </div>
        </div>
   )
}

export default ProductDetail;



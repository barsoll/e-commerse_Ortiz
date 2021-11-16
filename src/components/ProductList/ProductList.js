import React, {useEffect, useState} from "react";
import Product from "../Product/Product";
import listProductsMock from "../../mock";

const ProductList = (props) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const callProducts = new Promise((resolve, reject) => {
        resolve(listProductsMock)
    })

    useEffect(() =>{
        callProducts.then( result =>{
            setTimeout(() => {
                setProducts(result)
                setLoader(false)
            }, 2000)
            
        })
        .catch( error => {
            console.log("Error en la consulta")
        })
    }, [])


    return(
        <div className="product-list">
            {console.log("products: ",products)}
            {loader && <img src={'./assets/spiner.gif'} />}
            {products.map(( product ) => {
                return(
                    <Product title={product.title} price={product.price} stock={product.stock} img={product.img} id={product.id}/>
                )
            })}
            
        </div>
    )
}

export default ProductList
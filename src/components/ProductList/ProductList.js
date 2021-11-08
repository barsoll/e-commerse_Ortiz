import React, {useEffect, useState} from "react";
import Product from "../Product/Product";
//import listProductsMock from "../../mock";

const ProductList = (props) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const callProducts = new Promise((resolve, reject) => {
        resolve(
            [
                {
                    id: 1,
                    title:'Producto 1',
                    price: 200,
                    categoria: 'producto',
                    stock: 15,
                    img: 'producto1.png'
                },
                {
                    id: 2,
                    title:'Producto 2',
                    price: 100,
                    categoria: 'producto',
                    stock: 12,
                    img: 'producto2.png'

                },
                {
                    id: 3,
                    title:'producto 3',
                    price: 120,
                    categoria: 'prooducto',
                    stock: 9,
                    img: 'producto1.png'

                }
            ]
        )
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
                    <Product title={product.title} price={product.price} stock={product.stock} img={product.img}/>
                )
            })}
            
        </div>
    )
}

export default ProductList
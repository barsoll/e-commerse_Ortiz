import React, {useState, useEffect} from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

function ProductDetailContainer() {
    const [infoProduct, setInfoProduct] = useState();
    const getProduct = new Promise((resolve) => {
        setTimeout(()=>{
            const mockProduct = 
            {
                    id: 1,
                    title:'Producto 1',
                    price: 200,
                    categoria: 'producto',
                    stock: 15,
                    img: 'producto1.png'
            }
            resolve(mockProduct)
        }, 2000)
    })

    useEffect(()=>{
        getProduct.then((response)=>{
            setInfoProduct(response)
        })
    }, [])

    return (
        <div className="detail-container">
            <h1 style={{color: 'pink'}}>Container de detalle</h1>
            {infoProduct && <ProductDetail data={infoProduct} />}
        </div>
    );
}

export default ProductDetailContainer;



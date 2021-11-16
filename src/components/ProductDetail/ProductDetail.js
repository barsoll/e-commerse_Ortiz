import React, {useState, useEffect} from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom'
import listProductsMock from '../../mock';

function ProductDetail(props) {
    console.log(props)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)

    const callProducts = new Promise((resolve, reject) => {
        resolve(listProductsMock)
    })

    useEffect(() =>{
        callProducts.then( result =>{
            setTimeout(() => {
                let productFilterId = result.find(prod => {
                    return prod.id === Number(id)
                })
                setLoader(false)
                setProduct(productFilterId)
            }, 1000)
        })
        .catch( error => {
            console.log("Error en la consulta")
        })
    }, [])

    return (
        <div className="detail-product">
            {loader ? 
                <img src={'../assets/spiner.gif'} alt={'spiner'}/> 
            : 
            <div>
                <div>
                    <img src={`../assets/products/${product.img}`} alt={'product'}/>
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p className='description-product'>Batidor de color. </p>
                </div>
            </div>
            }

 
        </div>
   )
}

export default ProductDetail;



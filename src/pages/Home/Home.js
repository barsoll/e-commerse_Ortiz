import React from 'react'
import ProductListContainer from '../../components/ProductListContainer/ProductListContainer'

export default function Home() {
    return(
        <div>
            <div>Banner</div>
            <section>
                <h2>Productos mas vendidos</h2>
                <ProductListContainer />
            </section>
        </div>
    )
}
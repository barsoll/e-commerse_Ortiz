import React from 'react'
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div>
            <h1 className='titleProducts'>{props.texto}</h1>
        </div>
    )
}

export default ItemListContainer

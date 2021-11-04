import { Component } from 'react';
import cart from '../../assets/shopping-cart.png'
import './cartWidget.css';

const CartWidget = () => {
  return (
      <div className="cart-button">
        <button>
          <img src={cart} alt="" />
        </button>
        <p>0</p>

      </div>
  )
}

export default CartWidget 

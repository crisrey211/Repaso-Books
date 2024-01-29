import React from 'react'
import { CartIcon } from './icons/CartIcon'
import "./../css/cart.css"
import { useCart } from '../hooks/useCart'

export const Cart = () => {
    const cartCheckboxId = React.useId()
    const { cart } = useCart()
    return (
        <React.Fragment>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src='https://cdn.dummyjson.com/product-images/1/1.jpg' alt='Iphone' />
                        <div><strong>iPhone</strong></div>
                        <footer>
                            <small>Qty:1</small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>Limpiar carrito</button>
                <span style={{ color: "black" }}>{JSON.stringify(cart)}</span>
            </aside>
        </React.Fragment>
    )
}

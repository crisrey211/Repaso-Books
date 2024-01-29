import React from 'react'
import { CartIcon } from './icons/CartIcon'
import "./../css/cart.css"

export const Cart = () => {
    const cartCheckboxId = React.useId()
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
            </aside>
        </React.Fragment>
    )
}

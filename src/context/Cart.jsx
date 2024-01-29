import React, { createContext } from "react";

//1. crear el contexto
export const CartContext = createContext()

//2. crear el provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([])

    const addToCart = (product) => {
        //se verifica si el producto está en el carrito
        const productInCartIndex = cart.findIndex((item) => item.ISBN === product.ISBN)
        /* 
                if (productInCartIndex > 0) {
                    const newCart = structuredClone(cart)
                } */
        console.log(product);
        //el libro no esta en el carro
        setCart((prevState) => ([...prevState, product]))

    }

    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{ addToCart, clearCart, cart }}>
        {children}
    </CartContext.Provider>
}
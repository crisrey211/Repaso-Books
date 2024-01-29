import { useContext } from 'react'
import { CartContext } from '../context/Cart'

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvier')
    }

    return context
}

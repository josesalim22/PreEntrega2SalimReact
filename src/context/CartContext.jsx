import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
     cart: []
})

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
     const [cart, setCart] = useState(carritoInicial);

     console.log(cart)

     const addItem = (item, quantity) => {
          if (!isInCart(item.id)) {
               setCart(prev => [...prev, { ...item, quantity }])
          } else {
               console.error('El producto ya fue agregado')
               /* const confirmed = window.confirm('El producto ya fue agregado. ¿Deseas ir al carrito?');
               if (confirmed) {
                 window.location.href = '/cart'; 
               } */

          }
     }

     const removeItem = (itemId) => {
          const cartUpdated = cart.filter(prod => prod.id !== itemId)
          setCart(cartUpdated)
     }


     const clearCart = () => {
          setCart([])
     }

     const isInCart = (itemId) => {
          return cart.some(prod => prod.id === itemId)
     }

     const totalQuantity = () => {
          return cart.reduce((acc, prod) => acc + prod.quantity, 0);

     }
     const total = () => {
          return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
     }

useEffect(() => {
localStorage.setItem("carrito", JSON.stringify(cart))   
},[cart])


     return (
          <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
               {children}
          </CartContext.Provider>
     )

}
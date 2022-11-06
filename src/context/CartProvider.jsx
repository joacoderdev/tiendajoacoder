import { useState } from "react";
import { CartContext } from "./CartContext";    

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const [ItemsState, setItemsState] = useState(0);
  const addItem = (product, quantity) => {

    const itemIsAdd = isInCart(product.id)
    setItemsState(ItemsState + quantity);
    if (itemIsAdd) {
      itemIsAdd.quantity = itemIsAdd.quantity += quantity;
      
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

    
  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  const clear = () => {
    setCart([]);    
  };

  const removeItem = (productId) => {
    let newCartList = [];
    cart.forEach((product) => {
      if (product.id === productId) {
      } else {
        newCartList.push(product);
      }
    });
    setCart(newCartList);
  };

  const totalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  
  };
 
  const TotalInCart = () => {
    return cart.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        ItemsState,
        setItemsState,
        cart,
        isInCart,
        addItem,
        removeItem,
        clear,
        totalItems,
        TotalInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
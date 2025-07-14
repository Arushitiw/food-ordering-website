import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/frontend asset/assets";

// ✅ Create context
export const StoreContext = createContext(null);

// ✅ Provider component
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // ✅ Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // ✅ Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCount = (prev[itemId] || 1) - 1;
      if (updatedCount <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: updatedCount };
    });
  };

  // ✅ Calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id == itemId); // use == to match string/number
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        } else {
          console.warn(`Item with ID ${itemId} not found in food_list`);
        }
      }
    }
    return totalAmount;
  };

  // (Optional) persist to localStorage
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  // useEffect(() => {
  //   const saved = localStorage.getItem("cartItems");
  //   if (saved) setCartItems(JSON.parse(saved));
  // }, []);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

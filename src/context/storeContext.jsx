import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/frontend asset/assets";

// ✅ Create and export the context
export const StoreContext = createContext(null);

// ✅ Capitalized component for context provider
const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

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

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// ✅ Export the provider
export default StoreContextProvider;

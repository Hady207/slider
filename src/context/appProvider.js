import React, { createContext, useReducer } from "react";

const AppContext = createContext(null);

const initialState = { cart: [], cartMenu: false, carouselIndex: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, cartMenu: !state.cartMenu };
    case "ADD":
      return { ...state, cart: [...state.cart, action.data] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((d) => d.id !== action.data.id),
      };
    case "SLIDE_ACTION":
      return { ...state, carouselIndex: action.index };
    case "REMOVE_ALL":
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext };

export default AppProvider;

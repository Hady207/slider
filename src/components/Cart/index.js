import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";

const CartItem = ({ data, remove }) => (
  <div className="cart__item">
    <img src={data?.image} alt={data?.name} />
    <div className="cart__item--body">
      <h5>{data?.itemName}</h5>
      <h5>KWD {data?.price.toFixed(3)}</h5>
    </div>
    <button onClick={remove}>X</button>
  </div>
);

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const reducer = (previousValue, currentValue) =>
    previousValue + currentValue?.price;
  return (
    <div className={`cart__bg ${state?.cartMenu && "cart__bg--show"}`}>
      <div className="cart__list">
        <button
          onClick={() => dispatch({ type: "TOGGLE" })}
          className="cart__list--close--btn"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="cart__total__section">
          <h3>Total amount:</h3>
          <h4>KWD {state?.cart?.reduce(reducer, 0).toFixed(3)}</h4>
        </div>
        <div className="cart__list">
          {state.cart.length > 0 ? (
            <>
              <div className="cart__listContainer">
                {state?.cart?.map((item) => (
                  <CartItem
                    data={item}
                    remove={() => dispatch({ type: "REMOVE", data: item })}
                  />
                ))}
              </div>
              <div className="clearAll__container">
                {state.cart.length > 1 && (
                  <button onClick={() => dispatch({ type: "REMOVE_ALL" })}>
                    Clear All
                  </button>
                )}
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>empty list</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

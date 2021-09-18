import React, { useContext } from "react";
import { AppContext } from "../../context/appProvider";

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div>
        <h2 className="navbar__title">Slider</h2>
      </div>
      <div className="navbar__cartContainer">
        <span
          className={`cart__notification ${
            state?.cart?.length > 0 && "cart__notification--show"
          } `}
        >
          {state?.cart?.length}
        </span>
        <button
          onClick={() => dispatch({ type: "TOGGLE" })}
          className="navbar__cart"
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

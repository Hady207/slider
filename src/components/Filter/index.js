import React, { useState } from "react";

const Filter = ({ searchFunc, filterFunc }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleButtonPress = (filterType) => {
    setActiveFilter(filterType);
    filterFunc(filterType);
  };
  return (
    <div className="carousel__body--left">
      <div className="filter__section">
        <h4 className="filter__text">Filter by</h4>
        <button
          className={`filter__button filter__button--all ${
            activeFilter === "all" && "filter__button--active"
          }`}
          onClick={() => handleButtonPress("all")}
        >
          <i className="fas fa-home"></i>
        </button>
        <button
          className={`filter__button filter__button--discount ${
            activeFilter === "discount" && "filter__button--active"
          }`}
          onClick={() => handleButtonPress("discount")}
        >
          <i className="fas fa-percent"></i>
        </button>
        <button
          className={`filter__button filter__button--free_shipping ${
            activeFilter === "free_shipping" && "filter__button--active"
          }`}
          onClick={() => handleButtonPress("best_selling")}
        >
          <i className="fas fa-shopping-bag"></i>
        </button>
      </div>
      <div className="filter__search--container">
        <h4 className="filter__text">Search by</h4>
        <div className="filter__searchbar--container">
          <i className="fas fa-search"></i>
          <input
            className="search__bar"
            type="search"
            onChange={searchFunc}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

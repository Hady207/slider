import React, { useContext } from "react";
import { useSwipeable } from "react-swipeable";
import { AppContext } from "../../context/appProvider";

const Carousel = ({ children, nItems }) => {
  const childrenSize = React.Children.count(children);
  const { state, dispatch } = useContext(AppContext);

  const handleUpdateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - nItems;
    } else if (newIndex > React.Children.count(children) - nItems) {
      newIndex = 0;
    }

    dispatch({ type: "SLIDE_ACTION", index: newIndex });
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => handleUpdateIndex(state?.carouselIndex - 1),
    onSwipedRight: () => handleUpdateIndex(state?.carouselIndex + 1),
  });
  return (
    <div className="carousel">
      {childrenSize > 0 ? (
        <div className="carousel__body--right">
          {React.Children.count(children) > 0 &&
            React.Children.count(children) > nItems && (
              <div>
                <button
                  className="btn__indicator btn__indicator--left"
                  onClick={() => handleUpdateIndex(state?.carouselIndex - 1)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
              </div>
            )}
          <div className="carousel__container">
            <div
              {...handlers}
              className="carousel__inner"
              style={{
                transform: `translateX(-${
                  (state?.carouselIndex / nItems) * 100
                }%)`,
              }}
            >
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                  width: `${100 / nItems}%`,
                });
              })}
            </div>
          </div>
          <div>
            {childrenSize > nItems && (
              <button
                className="btn__indicator btn__indicator--right"
                onClick={() => handleUpdateIndex(state?.carouselIndex + 1)}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h3>No Item with that name</h3>
        </div>
      )}
    </div>
  );
};

export default Carousel;

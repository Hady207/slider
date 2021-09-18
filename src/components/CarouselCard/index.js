import React from "react";

const CarouselCard = ({
  data,
  width,
  onCardClick,
  onTagsClick,
  disableHover,
}) => {
  return (
    <div
      className={`carousel__card ${disableHover && "carousel__card--no-hover"}`}
      style={{ width }}
      onClick={onCardClick}
    >
      <div className="carousel__card--container">
        <div className="carousel__card--image--container">
          {data?.bestSelling && (
            <span className="carousel__card--watermark">Best Selling</span>
          )}
          <img
            src={data?.image}
            className="carousel__card--img"
            alt={data?.itemName}
          />
        </div>
        <div className="carousel__card--body">
          <h4 className="carousel__card--body-name">{data?.itemName}</h4>
          <div className="carousel__card--body-rating">
            <i className="fas fa-star"></i> {data?.rating} / 5
          </div>
          <div className="carousel__card--body-price">
            {data?.discount ? (
              <>
                <span>KWD {data?.discountPrice.toFixed(3)}</span>
                <span className="discount--span">{data?.price.toFixed(3)}</span>
              </>
            ) : (
              <span>KWD {data?.price.toFixed(3)}</span>
            )}
          </div>
        </div>
        <div onClick={onTagsClick} className="carousel__card--footer">
          <span>
            <i className="fas fa-archive"></i>
          </span>
          <span>
            <i className="fas fa-bolt"></i>
          </span>
          <span>
            <i className="fas fa-shipping-fast"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";

import Carousel from "../components/Carousel";
import CarouselCard from "../components/CarouselCard";
import Filter from "../components/Filter";
import Modal from "../components/Modal";
import Cart from "../components/Cart";
import { mockData } from "../util/constants";
import { AppContext } from "../context/appProvider";

const CarouselSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const [initalData, setInitialData] = useState(mockData);
  const [modalVisible, setModalVisible] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const handleSearchedValue = (e) => {
    const textRge = e.target.value.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    const data = mockData.filter((item) =>
      item?.itemName?.toLowerCase().match(textRge.toLowerCase())
    );
    setInitialData([...data]);
  };

  const handleFilterValue = (option) => {
    let data;
    switch (option) {
      case "all":
        data = mockData;
        break;
      case "discount":
        data = mockData.filter((item) => item.discount === true);
        dispatch({ type: "SLIDE_ACTION", index: 0 });
        break;
      case "best_selling":
        data = mockData.filter((item) => item.bestSelling === true);
        dispatch({ type: "SLIDE_ACTION", index: 0 });
        break;
      default:
        data = mockData;
    }
    setInitialData([...data]);
  };

  const handleCartActionsOnCard = (item) => {
    if (state?.cart?.some((data) => data?.id === item?.id)) {
      dispatch({ type: "REMOVE", data: item });
    } else {
      dispatch({ type: "ADD", data: item });
    }
  };

  return (
    <>
      <section className="carousel__section carousel__section--1">
        <Filter
          data={initalData}
          searchFunc={handleSearchedValue}
          filterFunc={handleFilterValue}
        />
        <Carousel nItems={isMobile ? 1 : 4}>
          {initalData?.map((item, i) => (
            <CarouselCard
              key={`${item?.name} ${i}`}
              data={item}
              disableHover={initalData.length === 1}
              onCardClick={() => handleCartActionsOnCard(item)}
              onTagsClick={() => setModalVisible((old) => !old)}
            />
          ))}
        </Carousel>
      </section>
      <Cart />
      <Modal
        modalVisible={modalVisible}
        closeFunc={() => setModalVisible(false)}
      />
    </>
  );
};

export default CarouselSection;

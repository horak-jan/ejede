import React from "react";
import Slider from "infinite-react-carousel";

const CarImageSlider = (props) => {
  const settings = {
    arrows: false,
    autoplay: false,
    pauseOnHover: false,
    swipe: false,
    dots: true,
  };
  //style setting for carousel
  const StyleSettings = {
    width: "100%",
    maxWidth: "1200px",
    height: "50vh",
    margin: "2vh auto",
  };

  return (
    <div className="ready-slider">
      <Slider {...settings}>
        {props.images.map((image) => (
          // feed images one by one to slider to display
          <div key={image}>
            <img src={image} style={StyleSettings} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarImageSlider;

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
    maxWidth: "1000px",
    height: "50vh",
    margin: "2vh auto",
  };

  return (
    <div className="ready-slider">
      <Slider {...settings}>
        <div>
          <img src={props.images[0]} style={StyleSettings} />
        </div>
        <div>
          <img src={props.images[1]} style={StyleSettings} />
        </div>
        {/* <div className="ready-slider-slide-three">
          <img src={Image3} style={StyleSettings} />
          <div style={DivStyle}></div>
        </div> */}
      </Slider>
    </div>
  );
};

export default CarImageSlider;

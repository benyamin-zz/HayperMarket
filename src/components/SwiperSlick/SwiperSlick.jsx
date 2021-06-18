import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SwiperSlick.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,

};
function SwiperSlick() {
  return (
    <Slider {...settings} className="SwiperSlick">
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/381194/1365/425"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/380942/1365/425"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/381222/1365/425"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/381589/1365/425"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/381195/1365/425"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/380631/1365/425"
          alt=""
        />
      </div>{" "}
      <div>
        <img
          src="https://cdn.okala.com/Media/Index/Slider/381255/1365/425"
          alt=""
        />
      </div>
    </Slider>
  );
}

export default SwiperSlick;

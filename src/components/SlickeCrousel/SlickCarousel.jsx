import React from "react";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCarousel.css";

function SlickCarousel({ slidesToShow,titleCard,brand }) {
  const settings = {
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rtl: true,
    slidesToShow: slidesToShow,
  };

  return (
    <>
      {titleCard ?
       (<div className="header_CardSlider">
          <p>{titleCard}</p>
          <p><a href="#" align="left" >مشاهده همه</a></p>
      </div>) : ""}
      <Slider {...settings} className="SlickCarousel">
        {[1, 2, 3, 4, 5, 6].map((slider) => (
          <div className="itemWrapper" key={slider}>
            <div>
              {brand==="true"? (
                 <img
                 src="https://cdn.okala.com/media/index/Product/367340/210/210"
                 alt=""
               />
               
              ) : (
                <>
                 <div className="product-box_discount">
                 <strong>
                   %15<small>تخفیف</small>
                 </strong>
               </div>
               <img
                src="https://cdn.okala.com/media/index/Product/367340/210/210"
                alt=""
              />
              <p>نان شکلاتی 100 گرمی سه نان</p>
                <p className="price">
                  <del>30000</del>
                  <span>25500 ریال</span>
                </p>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<i className="fas fa-plus-circle"></i>}
                >
                  افزودن به سبد خرید
                </Button>
                </>

              )}
              

            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SlickCarousel;

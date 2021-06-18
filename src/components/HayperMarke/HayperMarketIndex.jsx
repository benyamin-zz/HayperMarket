import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./HayperMarketIndex.css";
import SlickCarousel from "../SlickeCrousel/SlickCarousel";
import SwiperSlick from "../SwiperSlick/SwiperSlick";

function HayperMarketIndex() {
  return (
    <div className="py-24">
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Paper className="cardCarousel">
            <>
              <a href="#" className="cardHeader">
                پیشنهاد روز{" "}
              </a>
              <SlickCarousel slidesToShow={1}/>
            </>
          </Paper>
        </Grid>
        <Grid item md={9} >
          <Grid item md={12}>
            <Paper className="slider">
              <SwiperSlick />
            </Paper>
          </Grid>
          <Grid item md={12}>
            <Paper className="card-body">
              <Grid container>
                <Grid item md={3}>
                  <div className="strc-CardBody">
                    <img
                      src="https://image.flaticon.com/icons/png/512/2156/2156009.png"
                      alt=""
                    />
                    <p>تا ۵۰ درصد تخفیف</p>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="strc-CardBody">
                    <img
                      src="https://image.flaticon.com/icons/png/512/776/776588.png"
                      alt=""
                    />
                    <p>ارسال سریع</p>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="strc-CardBody">
                    <img
                      src="https://image.flaticon.com/icons/png/512/3220/3220301.png"
                      alt=""
                    />
                    <p>تحویل رایگان</p>
                  </div>
                </Grid>
                <Grid item md={3}>
                  <div className="strc-CardBody">
                    <img
                      src="https://image.flaticon.com/icons/png/512/1326/1326538.png"
                      alt=""
                    />
                    <p>ضمانت بازگشت کالا</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      
        
      </Grid>
      <Grid container spacing={3} >
        <Grid item md={12}>
              <Paper className="CardSlider">
                <SlickCarousel slidesToShow={4} titleCard="پرتخفیف ترین ها" />
              </Paper>
        </Grid>
        <Grid item md={12}>
              <Paper className="CardSlider">
                <SlickCarousel slidesToShow={4} titleCard="پرفروشترین ها" />
              </Paper>
        </Grid>
        <Grid item md={12} >
              <Paper className=" brand" >
                <SlickCarousel slidesToShow={4} brand="true" titleCard="برندهای ویژه" />
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default HayperMarketIndex;

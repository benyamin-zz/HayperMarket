import { Container, Grid, MenuItem } from "@material-ui/core";
import React from "react";
import _ from "lodash";
import "./Footer.css";

const menu1 = [
  "Banana1",
  "Orange2",
  "Apple3",
  "Mango4",
  "Banana5",
  "Orange6",
  "Apple7",
  "Mango8",
  "Banana9",
  "Orange10",
  "Apple11",
  "Mango12",
];
function footer({data}) {

  const MenuList = (menu) => {
    return (
      <>
        {menu.map((item, index) =>
           <ul key={index}>
             {item.map((li,index)=> <li key={index} >{li.title}</li>)}
           </ul>
        )}
      </>
    );
  };
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Grid container>
              <Grid item md={4}>
                <div className="footer-menu">
                  <h3>دسته بندی ها</h3>
                  {MenuList(_.chunk(data,3))}
                </div>
              </Grid>
              <Grid item md={2}>
                <h3>اُکالا</h3>
                {MenuList(_.chunk(data,2))}
              </Grid>
              <Grid item md={2}>
                <h3>خدمات مشتریان</h3>
                {MenuList(_.chunk(data,2))}
              </Grid>
              <Grid item md={4}>
                <h3>راه های ارتباطی</h3>
                <ul>
                  <li>تلفن تماس: 1536</li>
                  <li>آدرس: خیابان احمدقصیر (بخارست) خیابان چهاردهم غربی پلاک 19 طبقه اول/ دوم</li>
                  <li>ایمیل: info@okala.com</li>
                </ul>
              </Grid>
              <Grid item md={6}>
               <div className="social-link">
                 <span className="vertical-divider"></span>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-telegram-plane"></i></a>
                <a href="#"><i className="far fa-envelope"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <p>اُکالا را در شبکه های اجتماعی دنبال کنید</p>
               </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
              <Grid container spacing={0}>
                <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                 <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                 <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                 <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                 <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                 <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
                 <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>                
                <Grid item md={4}>
                  <div className="footer-certificate"><img src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47" alt="" /></div>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className="rull-site"><span>کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به شرکت توسعه تجارت الکترونیک کوروش است. ۱۳۹۹ ©</span></div>
    </footer>
  );
}

export default footer;

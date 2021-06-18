import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./AccardionIndex.css";
import { Container } from "@material-ui/core";

function AccordionIndex() {
  const [state, setState] = useState(true);
  return (
    <div className="Accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setState(!state)}
        >
          <Typography className="heading">
            {state
              ? "سوپرمارکت آنلاین اُکالا - فروشگاه اینترنتی افق کوروش تا 50% تخفیف "
              : "بستن"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="xl">
            <h3>
            سوپرمارکت آنلاین اُکالا - فروشگاه اینترنتی افق کوروش تا 50% تخفیف

            </h3>
            <p>
              سوپرمارکت اینترنتی اُکالا، تجربه خرید آنلاین به ‌یادماندنی برای
              شما است. شما می‌توانید تمام محصولات و نیازهای روزانه خود را از
              انواع خواروبار تا همه نوع محصولات سوپرمارکتی، ازجمله انواع مواد
              غذایی، نوشیدنی و دم‌نوش‌ها، محصولات بهداشتی زیبایی، انواع ابزار و
              ملزومات را با تخفیف مناسب در فروشگاه اینترنتی اُکالا تهیه کنید.
              اُکالا، با استفاده از روش‌های پرداخت آسان، ویترین عالی و طرح‌های
              تخفیفی بی‌نظیر در وب‌سایت، امکان خرید با قیمت و تخفیف مناسب را
              برای همه مشتریان عزیز به وجود آورده است. با سوپرمارکت آنلاین
              اُکالا می‌توانید کالاهای اساسی را با تضمین کمترین قیمت ممکن و
              بهترین خدمات پس از فروش درب منزلتان تحویل بگیرید. ویترین فروشگاه
              اینترنتی اُکالا شامل کالاهای اساسی موردنیاز شما در انواع برندها و
              مارک‌های ایرانی و خارجی باکیفیت و تخفیف عالی است. در این فروشگاه
              اینترنتی مواد غذایی می‌توانید انواع مارک‌های برنج، چای، روغن، قند
              و شکر، محصولات پروتئینی و لبنیاتی، انواع حبوبات و ادویه‌جات را به
              همراه صدها محصول دیگر را در کیفیت و با خدمات عالی به‌ صورت
              اینترنتی و با پرداخت آنلاین یا حضوری، در کمترین بازه زمانی ممکن
              دریافت کنید. تمام محصولات ارائه‌شده در این سوپرمارکت آنلاین دارای
              مجوز و استانداردهای لازم از وزارت بهداشت و مراجع مربوطه بوده و
              تاریخ‌مصرف هر کالای ارسالی به‌ صورت مجزا کنترل می‌شود. فروشگاه
              اینترنتی مواد غذایی اُکالا تضمین می‌کند علاوه بر تخفیف‌های روزانه
              فروشگاه‌های زنجیره‌ای افق کوروش، بیشترین تخفیف‌ها را با خرید
              آنلاین از سوپر مارکت آنلاین اُکالا دریافت کنید
            </p>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionIndex;

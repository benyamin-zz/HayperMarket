import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "./CartItem.css";

function CartItem() {
  return (
    <div>
      <Card className="CartItem">
        <CardMedia
          className="cover"
          image="https://cdn.okala.com/Media/Index/Product/380285/210/210"
          title="Live from space album cover"
        />
        <div className="details">
          <CardContent className="content">
            <Typography component="h5" variant="caption">
              پنیر پیتزا رنده شده 2000 گرمی 206
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <del className="offcanvas-product-box_price"> 2,142,000</del>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <span className="offcanvas-product-box_price-value">
                1,178,100 ریال
              </span>
            </Typography>
          </CardContent>
        </div>
        <CardMedia className="CardBtn">
            <div className="touchspin-btn">
            <Button className="plus">+</Button>
              <span className="countItem">1</span>
            <Button className="mines">-</Button>

            </div>
        </CardMedia>
      </Card>
    </div>
  );
}

export default CartItem;

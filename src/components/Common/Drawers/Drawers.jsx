import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { IconButton, ListItem, Paper } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import "./Drawers.css";
import CartItem from "../CartItem/CartItem";

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: "auto",
  },
});
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 31,
    top: 28,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
export default function Drawers({ toggleDrawer, state }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {["Inbox"].map((text, index) => (
        <div key={index} className="offcanvas-Cart">
          <Paper className="offcanvas-header" elevation={3}>
            <h3 align="center">سبد خرید</h3>
            <div className="offcanvasBox">
              <p className="offcanvas-header_title ">مجموع خرید</p>
              <p className="offcanvas-header_price ">40,000 ریال</p>
            </div>
          </Paper>
          <div className="Item-content">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <Paper className="offcanvas-cart_summery" elevation={3}>
            <div className="cart_summery">
              <p>مجموع اقلام</p>
              <span className="cartCount"><span>9</span> مورد</span>
            </div>
            <div className="cart_summery" >
              <Divider orientation="vertical" />
            </div>
            <div className="cart_summery">
              <p>مجموع تخفیف‌ها</p>
              <span className="offcanvas-discount"><span>1,777,459</span> ریال</span>
            </div>
          </Paper>
          <Paper className="offcanvas-footer" elevation={3}>
           <a href="#"> <h3 align="center">ثبت سفارش  (3,351,607 ریال)    </h3></a>
          </Paper>
        </div>
      ))}
      {/* <Divider /> */}
    </div>
  );

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

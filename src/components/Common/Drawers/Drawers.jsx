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
export default function Drawers() {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
          </div>
        ))}
      <Divider />
    </div>
  );
  {
    /* <div key={index} className="offcanvas-Cart">
        <Paper className="offcanvas-header" elevation={3}  >
            <h3 align="center">سبد خرید</h3>
           <div className="offcanvasBox" >
             <p  className="offcanvas-header_title ">مجموع خرید</p>
             <p  className="offcanvas-header_price ">40,000 ریال</p>
           </div >
        </Paper>
   </div> */
  }
  return (
    <React.Fragment>
      <IconButton
        aria-label="cart"
        className="card"
        onClick={toggleDrawer("right", true)}
      >
        <StyledBadge badgeContent={4} color="secondary">
          <Icon className="fas fa-shopping-cart" />
        </StyledBadge>
      </IconButton>
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

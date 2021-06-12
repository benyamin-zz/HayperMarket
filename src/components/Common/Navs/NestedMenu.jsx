import React, { useState, useRef } from "react";
import Dropdown from "react-multilevel-dropdown";
import "./NastedMenu.css";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  ControlledMenu,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import Button from "@material-ui/core/Button";

export const NestedMenu = ({title,subCategory}) => { 
  const [isOpen, setOpen] = useState(false);
  const [ActiveButton, SetActiveButton] = useState(false);
  const ref = useRef(null);
  return (
    <div className="wrapper" onMouseLeave={()=>setOpen(false)} >
      {/* <Dropdown  title="مواد غذایی" buttonClassName="btn-Menu">
        <Dropdown.Item className="MenuItem" >آجیل و خشکبار</Dropdown.Item>
        <Dropdown.Item>
          Item 2
          <Dropdown.Submenu>
            <Dropdown.Item>Subitem 1</Dropdown.Item>
            <Dropdown.Item>Subitem 2</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item   className="MenuItem">پروتئینی</Dropdown.Item>
        <Dropdown.Item className="MenuItem">غذای آماده و کنسروجات</Dropdown.Item>
        <Dropdown.Item className="MenuItem">شیرینی و تنقلات</Dropdown.Item>
        <Dropdown.Item className="MenuItem">چاشنی و ادویه جات</Dropdown.Item>
      </Dropdown> */}
      {/* <Menu   menuButton={ <Button size="large">مواد غذایی</Button>}  align="end" direction="bottom" >
            <MenuItem>آجیل و خشکبار</MenuItem>
            <MenuItem>پروتئینی</MenuItem>
            <MenuItem>غذای آماده و کنسروجات</MenuItem>
            <MenuItem>شیرینی و تنقلات</MenuItem>
            <MenuItem>چاشنی و ادویه جات</MenuItem>
            <SubMenu label="Open" >
                <MenuItem>index.html</MenuItem>
                <MenuItem>example.js</MenuItem>
                <SubMenu label="Styles" direction="left">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu>
            </SubMenu>
            <MenuItem>Save</MenuItem>
        </Menu> */}
      <Button className={ActiveButton ? "ButtonMenuActived btnMenu": "btnMenu"} ref={ref} onMouseOver={() => {setOpen(true); SetActiveButton(true)}}
        onMouseOut={()=>{SetActiveButton(false);  }}      
      
      >
        {title}
      </Button>

      <ControlledMenu
        anchorRef={ref}
        isOpen={isOpen}
        align="end"
        onClose={() => setOpen(false)}
        onMouseOver={() => {SetActiveButton(true)}}
        onMouseOut={()=>{SetActiveButton(false);}}
        onMouseLeave={() => setOpen(false)}

      >
        {subCategory.map( (subItem,index) => (
           <MenuItem key={index}>{subItem.title}</MenuItem>
        )) }
       
       
        {/* <SubMenu label="چاشنی و ادویه جات"  direction="left">
          <MenuItem >index.html</MenuItem>
          <MenuItem>example.js</MenuItem>
            <SubMenu label="Styles" direction="left" >
              <MenuItem>about.css</MenuItem>
              <MenuItem>home.css</MenuItem>
              <MenuItem>index.css</MenuItem>
            </SubMenu>
        </SubMenu> */}
      </ControlledMenu>
      
    </div>
  );
};

export default NestedMenu;

import React from "react";
import "./custom-select-style.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";

const CustomSelect = ({ value, onClick, option, borderRadius, title }) => {
   return (
      <div className="select-container-style" style={{ borderRadius: borderRadius }} onClick={onClick}>
         <div className="dropdown-style">
            <p className="dropdown-title">{value ? (title === "Duration" ? value + " Days" : value) : option ? "Choose" : title}</p>
            <IconContext.Provider value={{ size: "20", className: option ? "icon-arrow-style" : null }}>
               <MdKeyboardArrowRight />
            </IconContext.Provider>
         </div>
      </div>
   );
};

export default CustomSelect;

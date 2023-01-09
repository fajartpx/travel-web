import React from "react";
import "../../containers/footer/footer-style.css";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";

const NewsLetter = () => {
   return (
      <div className="language-container-style">
         <p style={{ fontSize: "14px", lineHeight: "10px" }}>
            <MdEmail color={"#ffffff"} size={25} style={{ paddingRight: "2px" }} />
            Signup for our newsletter
         </p>
         <div className="news-input-style">
            <input placeholder="Enter your email address" />
            <button className="button-news-style">
               <MdKeyboardArrowRight color={"#ffffff"} size={20} />
            </button>
         </div>
         <p style={{ fontSize: "10px", margin: "0px", lineHeight: "10px", color: "#ffffff", padding: "4px 0px" }}>Enter your email address</p>
      </div>
   );
};

export default NewsLetter;

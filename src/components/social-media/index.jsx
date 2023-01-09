import React from "react";
import "../../containers/footer/footer-style.css";
import { GrYoutube, GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";
import { IconContext } from "react-icons";

const SocialMedia = () => {
   const hover = (e) => {
      return (e.target.style.color = "#FE4D00");
   };
   const rehover = (e) => {
      e.target.style.color = "#FFFFFF";
   };

   return (
      <IconContext.Provider value={{ size: "50", color: "white", className: "icon-sosmed-style" }}>
         <div className="sosmed-style">
            <a href="">
               <GrTwitter onMouseOver={hover} onMouseOut={rehover} />
            </a>
            <a href="">
               <GrFacebook onMouseOver={hover} onMouseOut={rehover} />
            </a>
            <a href="">
               <GrInstagram onMouseOver={hover} onMouseOut={rehover} />
            </a>
            <a href="">
               <GrYoutube onMouseOver={hover} onMouseOut={rehover} />
            </a>
         </div>
      </IconContext.Provider>
   );
};

export default SocialMedia;

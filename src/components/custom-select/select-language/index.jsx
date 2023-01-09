import React from "react";
import "../../../containers/footer/footer-style.css";
import { MdOutlineLanguage, MdKeyboardArrowRight } from "react-icons/md";
import amerika from "../../../assets/image/amerika.png";
import indonesia from "../../../assets/image/indonesia.png";

export const Language = ({ option, setOption, getValue }) => {
   const { value, select, image } = option || {};

   return (
      <div className="language-container-style">
         <p>
            <MdOutlineLanguage color={"#ffffff"} size={28} style={{ paddingRight: "2px" }} />
            Change Location Info
         </p>
         <div className="language-select-style" onClick={() => setOption(select)}>
            <div className="language-value-style">
               <p>
                  <img src={image ? image : amerika} style={{ padding: "0px 4px" }} />
                  {value ? value : "UNITED STATES"}
               </p>
               <MdKeyboardArrowRight size={20} style={{ transform: select ? "rotate(90deg)" : null }} />
            </div>
         </div>
         <ul className={select ? "language-option-style" : "hidden"}>
            <div className="language-value-style act" onClick={() => getValue("UNITED STATES", amerika)}>
               <p>
                  <img src={amerika} style={{ padding: "0px 4px" }} />
                  UNITED STATES
               </p>
            </div>
            <div className="language-value-style act" onClick={() => getValue("INDONESIAN", indonesia)}>
               <p>
                  <img src={indonesia} style={{ padding: "0px 4px" }} />
                  INDONESIAN
               </p>
            </div>
         </ul>
         <p style={{ fontSize: "10px", margin: "0px", lineHeight: "10px", color: "#ffffff", padding: "4px 0px" }}>Select your language</p>
      </div>
   );
};

export default Language;

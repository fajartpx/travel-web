import React from "react";
import "./button-style.css";

const Button = (props) => {
   const { className, title, color, padding = "10px 70px", backgroundColor, fontSize = "18px", fontWeight, letterSpacing = "2px", borderRadius = "6px", onClick } = props;

   return (
      <button
         className={className}
         style={{
            color: color,
            padding: padding,
            backgroundColor: backgroundColor,
            border: "2px solid transparent",
            fontSize: fontSize,
            fontWeight: fontWeight,
            borderRadius: borderRadius,
            letterSpacing: letterSpacing,
         }}
         onClick={onClick}
      >
         {title}
      </button>
   );
};

export default Button;

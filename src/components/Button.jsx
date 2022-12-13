import React from "react";
import "./style/button-style.css"
const Button =(props)=> {
    const{title, color,padding, backgroundColor, fontSize, fontWeight,onClick} = props;
    return(
        <button className="but-style" style={{
            color:color,
            padding:padding, 
            backgroundColor:backgroundColor, 
            border:'2px solid transparent',
            fontSize:fontSize,
            fontWeight:fontWeight,
            borderRadius:'6px',
            }} onClick={onClick}>{title}</button>
    )
}

export default Button;
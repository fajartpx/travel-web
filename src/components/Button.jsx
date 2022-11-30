import React from "react";

const Button =(props)=> {
    const{title, color,padding, backgroundColor, fontSize, fontWeight} = props;
    return(
        <button style={{
            color:color,
            padding:padding, 
            backgroundColor:backgroundColor, 
            border:'2px solid transparent',
            fontSize:fontSize,
            fontWeight:fontWeight,
            borderRadius:'6px'}} >{title}</button>
    )
}

export default Button;
import React, { useEffect, useRef, useState } from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import { IconContext } from "react-icons";
import "./dropdown-style.css"

const Title =()=>{
    return(
        <>
             <div className="select-btn">
                <p>Destination</p>
                <IconContext.Provider  value={{ size:"20px", style:{} }}>
                <MdKeyboardArrowDown/>
                </IconContext.Provider>
             </div>
        </>
    )
}
const Dropdown =()=> {
    const data = ["Pekanbaru", "batam","Rengat"]
    const [value,setValue] = useState("");
    const [option,setOption] = useState(true)

    // useEffect(()=>{
    //     x.current.remove()
    // },[option==false])

    const hideKan =()=>{
        if (option) {   
            setOption(false)
            y.current.remove()
        }
        else if (value) {
            y.current.remove()
        }
        else {
            x.current.prepend();
            setOption(true)
            a.current.append(y.current)
            
        }
    }

    // const hil =()=> {
    //     if()
    // }
    const x = useRef();
    const y = useRef();
    const a = useRef();
    const c =useRef();

    return (
        <div className="container-style">
            <fieldset ref={a} onClick={()=>hideKan()} className="select-menu">
            <div className="select-btn" ref={y}>
                <p>Destination</p>
                <IconContext.Provider  value={{ size:"20px", style:{} }}>
                <MdKeyboardArrowDown/>
                </IconContext.Provider>
             </div>
            {option?null:<legend className="yy">Destination</legend>}
            <p className="select-btn" style={{margin:"0"}}>{value} 
            {value?<IconContext.Provider  value={{ size:"20px", style:{} }}>
                <MdKeyboardArrowDown/>
                </IconContext.Provider>:null}
            </p>
            </fieldset>
            <ul ref={x} className={option?"hidden":"option-menu"}>
            {data.map((e)=>{
                return(
                    <li key={e.toString()} className="option-list" onClick={()=>{setValue(e);setOption(!option);option?x.current.remove():x.current.prepend();}}>{e}</li>   
                )
                
            })}
            </ul> 
            {console.log(value)}
         
            {/* <ul className="option-menu">
                <li className="option-list">Pekanbaru</li>
                <li className="option-list">Pekanbaru</li>

            </ul> */}
        </div>
       
    )
}

export default Dropdown;
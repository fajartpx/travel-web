import React, {useRef, useState } from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import { IconContext } from "react-icons";
import "./style/dropdown-header-style.css"

const TitleSelect =(props)=>{
    const {klik,nilai, title} = props;
    return(
        <>
             <p className="select-btn" onClick={klik}>{title}
                {nilai?<IconContext.Provider  value={{ size:"25px", style:{} }}>
                <MdKeyboardArrowDown/>
                </IconContext.Provider>:null}
             </p>
        </>
    )}



const Dropdown =(props)=> {
    const {borderRadiusx} = props;
    const data = ["Pekanbaru", "Indragiri Hulu", "Kuansing", "Batam"]
    const [value,setValue] = useState("");
    const [option,setOption] = useState(true) 
    const itemOption = useRef();
    const titleSelect = useRef();
    const selectContainer = useRef();


    const hideOption =()=>{
        if (option) {   
            setOption(false)
            titleSelect.current.remove()
        }
        else if (value) {
             titleSelect.current.remove()
        }
        else {
            itemOption.current.prepend();
            setOption(true)
            selectContainer.current.append(titleSelect.current)
        }}

    return (
        <>
            <div className="bod">
                <div className="select-container-style">
                    <fieldset ref={selectContainer} onClick={()=>hideOption()} className="select-menu" style={{borderRadius:borderRadiusx}}>
                        <div className="select-btn-style" ref={titleSelect}>
                            <TitleSelect title="Destination" nilai="true"/>
                        </div>
                        {option?null:<legend className="legend-style">Destination</legend>}
                        <div className="select-btn" onClick={()=>setOption(true)} >
                            <TitleSelect  title={value} nilai={value}/>
                        </div>
                    </fieldset>
                    <ul ref={itemOption} className={option?"hidden":"option-menu"}>
                        {data.map((e)=>{
                            return(
                                <li key={e.toString()} className={option?"hidden":"option-list"} onClick={()=>{setValue(e);setOption(!option);option?itemOption.current.remove():itemOption.current.prepend();}}>{e}</li>   
                            )  
                        })}
                    </ul>
                    {console.log(value)}
                </div>
            </div>
                    
                
            </>
       
       
       
    )
}

export default Dropdown;
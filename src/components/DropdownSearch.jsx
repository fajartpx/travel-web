import React, { useState,useRef } from "react";
import "./style/dropdown-search-style.css"
import { MdKeyboardArrowRight,MdPersonAddAlt1} from "react-icons/md";
import { IconContext } from "react-icons";
import { format,parse } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Button from "./Button";

const data ={
            Destination : ["Pekanbaru","Batam","Kuansing","inhu","inhil"],
            Duration: [1,2,3,4,5,6,7,8,9,10],
            Travel : {Dewasa : 0, Anak : 0, Bayi : 0}
            } 

       

        
const DropdownDestination =()=>{
    const [option, setOption] = useState(false)
    const [value, setValue] = useState("")
    
    return(
        <div className="dropdown-container-style">
            <div className="select-container-style" style={{borderRadius:"40px 0 0 40px"}}  onClick={()=>setOption(!option)}>
                <div className="dropdown-style">
                    <p className="dropdown-title">{value?value:option?"choose":"Destination"}</p>
                    <IconContext.Provider value={{size:"20", className:option?"icon-arrow-style":null}}>
                        <MdKeyboardArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
            <div className={option?"dropdown-option-style":"hidden"}>
                <ul className="option-style">
                    {data.Destination.map((e)=>{
                        return(
                            <li className="item-style" onClick={()=>{setValue(e);setOption(!option)}}>
                                <p>{e}</p>
                            </li>
                        )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }


const DropdownDuration =()=>{
    const [option, setOption] = useState(false)
    const [value, setValue] = useState("")
    return(
        <div className="dropdown-container-style">
            <div className="select-container-style" onClick={()=>setOption(!option)}>
               <div className="dropdown-style">
                    <p className="dropdown-title">{value?value+" Days":"Duration"}</p>
                    <IconContext.Provider value={{size:"20", className:option?"icon-arrow-style":null}}>
                        <MdKeyboardArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
            <div className={option?"destination-option-style":"hidden"}>
                <ul className="destination-list-style">
                    {data.Duration.map((e)=>{
                        return(
                            <li className="destination-item-style" onClick={()=>{setValue(e);setOption(!option)}}>
                                <p>{e} Days</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const DropdownDate =()=>{
    
    const [option, setOption] = useState(false)
    const [value, setValue] = useState()
    const [selectedDay, setSelectedDay] = useState();
    
    const popperRef = useRef<HTMLDivElement>(null);
    const day = parse(selectedDay, 'y-MM-dd', new Date());
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    let footer =<Button color='#ffffff' backgroundColor='#FE4D00' padding='6px 40px' fontSize='15px' fontWeight='600' title={"Selesai"} onClick={()=>{setOption(!option)}}/> ;
    let footer2 =<p>Please pick a day</p> ;

    return(
        <div className="dropdown-container-style">
            <div className="select-container-style" onClick={()=>setOption(!option)}>
               <div className="dropdown-style">
                    <div className="dropdown-title">{selectedDay?<p style={{fontSize:"14px"}}>{selectedDay.toLocaleDateString("en-US", options)}</p>:<p>Duration</p>}</div>
                    <IconContext.Provider value={{size:"20", className:option?"icon-arrow-style":null}}>
                        <MdKeyboardArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
           <div className="date-style" onClick={()=>value?setOption(!option):null}>
                 {option?<DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                footer={selectedDay?footer:footer2}
                style={{backgroundColor:"#ffffff",padding:"1em", rdpAccentColor: "#FE4D"}}
            />:null}
            
            </div>
          
        </div>
    )
}

const DropdownTravels =()=>{
    const [option, setOption] = useState(false)
    const [value, setValue] = useState("")
    return(
        <div className="dropdown-container-style">
            <div className="select-container-style" onClick={()=>setOption(!option)}>
               <div className="dropdown-style">
                    <p className="dropdown-title">{value?value+" Days":"Duration"}</p>
                    <IconContext.Provider value={{size:"20", className:option?"icon-arrow-style":null}}>
                        <MdKeyboardArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="travelers-option-style">
                <ul className="travelers-list-style">
                    {Object.keys(data.Travel).map((val) => {
                    return(
                        <li className="dropdown-travelers-style" onClick={()=>{setValue(val);setOption(!option)}}>
                                <div className="travelers-item-style">
                                    <MdPersonAddAlt1/>
                                    <p>{val}</p>
                                    <button>+</button>
                                    <p>0</p>
                                    <button>-</button>
                                </div>
                            </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}



const ContainerSearch =()=>{
    return(
        <div className="container-search-style">
            <DropdownDestination />
            <DropdownDuration />
            <DropdownDate />
            <DropdownTravels/>
        </div>
    )
}

export default ContainerSearch;
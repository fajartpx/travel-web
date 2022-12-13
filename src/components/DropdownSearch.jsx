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


const Containernya =({value, onClick,option,borderRadius})=>{
    return( 
        <div className="select-container-style" style={{borderRadius:borderRadius}}  onClick={onClick}>
            <div className="dropdown-style">
                <p className="dropdown-title">{value?value:option?"choose":"Destination"}</p>
                <IconContext.Provider value={{size:"20", className:option?"icon-arrow-style":null}}>
                    <MdKeyboardArrowRight />
                </IconContext.Provider>
            </div>
        </div>
    )
}


const DropdownDate =({onClick, option})=>{
    
    const [selectedDay, setSelectedDay] = useState();
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    let footer =<Button color='#ffffff' backgroundColor='#FE4D00' padding='6px 40px' fontSize='15px' fontWeight='600' title={"Selesai"} onClick={onClick}/> ;
    let footer2 =<p style={{padding:"0", margin:"0"}}>Please pick a day</p> ;

    return(
        <div className="date-container-style">
            <div className="date-select-style" onClick={onClick}>
               <div className="dropdown-style">
                    <div className="dropdown-title">{selectedDay?<p style={{fontSize:"14px"}}>{selectedDay.toLocaleDateString("en-US", options)}</p>:<p>Duration</p>}</div>
                    <IconContext.Provider value={{size:"20", className:option?"icon-arrow-style":null}}>
                        <MdKeyboardArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
           <div className={option?"date-style":"hidden"} onClick={()=>selectedDay?onClick:null}>
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




const Destination =({version})=>{
    const [option, setOption] = useState({destination : false, duration : false, date : false, travels : false})
    const [value, setValue] = useState()

    const funs2 =(data)=>{
        setValue(data)
    }

    return(
        <div className="dropdown-container-style">
           
           <div className="stylenya">
                <Containernya borderRadius={"40px 0 0 40px"} onClick={()=>setOption({destination:!option.destination})} option={option.destination} value={value} />
                <ul className={option.destination?"option-style":"hidden"}>
                    {data.Destination.map((value)=>{
                        return(
                            <li className="item-style" onClick={()=>funs2} >
                                <p>{value}</p>
                            </li>
                        )
                    })}
                </ul>
           </div>
            <div className="stylenya">
                <Containernya onClick={()=>setOption({duration:!option.duration})} option={option.duration} value={value}  />
                <ul className={option.duration?"destination-list-style":"hidden"}>
                    {data.Duration.map((value)=>{
                        return(
                            <li className="destination-item-style" onClick={()=>funs2}>
                                <p>{value} Days</p>
                            </li>
                        )
                    })}
                </ul>
           </div>
            <div className="style-date">
                    <DropdownDate onClick={()=>setOption({date:!option.date})} option={option.date} selectedDay={value} setSelectedDay={setValue} />
            </div>
                         
            <div className="stylenya">
                <Containernya  onClick={()=>setOption({travels:!option.travels})} option={option.travels} value={value} />
                <ul className={option.travels?"travelers-list-style":"hidden"} >
                    {Object.keys(data.Travel).map((value) => {
                    return(
                        <li className="dropdown-travelers-style" onClick={()=>funs2}>
                                <div className="travelers-item-style">
                                    <MdPersonAddAlt1/>
                                    <p>{value}</p>
                                    <button>+</button>
                                    <p>0</p>
                                    <button>-</button>
                                </div>
                            </li>
                    )
                    })}
                </ul>  
            </div>
             <button className="search-button-style">Search</button>   
        </div>
    )
}



const DropdownSearch =()=>{
    return(
        <div className="container-search-style" >
             <Destination  borderRadius="40px 0px 0px 40px"/>
            

        </div>
    )
}

export default DropdownSearch;
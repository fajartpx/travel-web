import React, { useState } from "react";
import "./dropdown-search-style.css";
import "react-day-picker/dist/style.css";
import Destination from "./destination";
import { MdLocationPin } from "react-icons/md";
import Duration from "./duration";
import DropdownDate from "./date";
import Travels from "./travels";

const DropdownSearch = () => {
   const data = {
      Destination: ["Pekanbaru", "Batam", "Kuansing", "inhu", "inhil"],
      Duration: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Travel: { Dewasa: 0, Anak: 0, Bayi: 0 },
   };

   const [option, setOption] = useState({ destination: false, duration: false, date: false, travels: false });

   const [valuex, setValuex] = useState({ destination: "", duration: 0, date: "" });

   const funs3 = (ksey, value) => {
      return setOption({ [ksey]: !value });
   };

   const funs2 = (ksey, value) => {
      return setValuex({ ...valuex, [ksey]: value }), setOption({ ksey: !option.ksey });
   };

   return (
      <div className="header-style">
         <div className="filter-style">
            <div>
               <h1 style={{ fontSize: "40px", letterSpacing: "2px", margin: "0 0 10px 0" }}>It's time to travel</h1>
               <form className="filter-container-style">
                  <div className="dropdown-container-style">
                     <Destination data={data.Destination} setValue={funs2} option={option.destination} setOption={funs3} valuenya={valuex.destination} />
                     <Duration data={data.Duration} setValue={funs2} option={option.duration} setOption={funs3} valuenya={valuex.duration} />
                     <DropdownDate onClick={() => setOption({ date: !option.date })} option={option.date} getData={funs2} />
                     <Travels data={data.Travel} setValue={funs2} option={option.travels} setOption={funs3} />
                     <button className="search-button-style">Search</button>
                  </div>
               </form>
            </div>
         </div>
         <a href="https://goo.gl/maps/skq4NG5ajNxeFbsS7" className="location-background-style">
            <MdLocationPin size={30} color={"red"} />
            <p>Lake Brienz, Switzerland 1850</p>
         </a>
      </div>
   );
};

export default DropdownSearch;

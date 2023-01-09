import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import Button from "../../../components/button";
import "../dropdown-search-style.css";

export const DropdownDate = ({ onClick, option, getData }) => {
   const [selectedDay, setSelectedDay] = useState();
   var options = { year: "numeric", month: "long", day: "numeric" };
   let footer = <Button color="#ffffff" backgroundColor="#FE4D00" padding="6px 40px" fontSize="15px" fontWeight="600" title={"Selesai"} onClick={() => getData("date", selectedDay.toLocaleDateString("en-US", options))} />;
   let footer2 = <p style={{ padding: "0", margin: "0" }}>Please pick a day</p>;

   return (
      <div className="date-container-style">
         <div className="date-select-style" onClick={onClick}>
            <div className="dropdown-style">
               <div className="dropdown-title">{selectedDay ? <p style={{ fontSize: "14px" }}>{selectedDay.toLocaleDateString("en-US", options)}</p> : <p>Travel Dates</p>}</div>
               <IconContext.Provider value={{ size: "20", className: option ? "icon-arrow-style" : null }}>
                  <MdKeyboardArrowRight />
               </IconContext.Provider>
            </div>
         </div>
         <div className={option ? "date-style" : "hidden"}>
            {option ? (
               <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  footer={selectedDay ? footer : footer2}
                  style={{
                     backgroundColor: "#ffffff",
                     padding: "1em",
                     rdpAccentColor: "#FE4D",
                  }}
               />
            ) : null}
         </div>
      </div>
   );
};

export default DropdownDate;

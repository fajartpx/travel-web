import React from "react";
import CustomSelect from "../../../components/custom-select/select-for-dropdown";
import "../dropdown-search-style.css";

const Duration = ({ data, setValue, setOption, option, valuenya }) => {
   return (
      <div className="stylenya">
         <CustomSelect onClick={() => setOption("duration", option)} option={option} value={valuenya} title="Duration" />
         <ul className={option ? "destination-list-style" : "hidden"}>
            {data.map((value) => {
               return (
                  <li className="item-style" onClick={() => setValue("duration", value)}>
                     <p>{value} Days</p>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Duration;

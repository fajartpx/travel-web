import React from "react";
import CustomSelect from "../../../components/custom-select/select-for-dropdown";
import "../dropdown-search-style.css";
export const Destination = ({ data, setValue, setOption, option, valuenya }) => {
   return (
      <div className="stylenya">
         <CustomSelect borderRadius={"40px 0 0 40px"} onClick={() => setOption("destination", option)} option={option} value={valuenya} title="Destination" />
         <ul className={option ? "option-style" : "hidden"}>
            {data.map((value) => {
               return (
                  <li className="item-style" onClick={() => setValue("destination", value)}>
                     <p>{value}</p>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Destination;

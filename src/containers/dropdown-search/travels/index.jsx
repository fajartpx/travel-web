import React from "react";
import CustomSelect from "../../../components/custom-select/select-for-dropdown";
import "../dropdown-search-style.css";
import { MdPersonAddAlt1 } from "react-icons/md";

const Travels = ({ data, setValue, setOption, option }) => {
  return (
    <div className="stylenya">
      <CustomSelect
        onClick={() => setOption("travels", option)}
        option={option}
        value={option}
        title="Travels"
      />
      <ul className={option ? "travelers-list-style" : "hidden"}>
        {Object.keys(data).map((value) => {
          return (
            <li
              className="dropdown-travelers-style"
              onClick={() => setValue("duration", value)}
            >
              <div className="travelers-item-style">
                <MdPersonAddAlt1 />
                <p>{value}</p>
                <button>+</button>
                <p>0</p>
                <button>-</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Travels;

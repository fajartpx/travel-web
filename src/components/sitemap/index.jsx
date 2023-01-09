import React from "react";
import "../../containers/footer/footer-style.css";
const SiteMap = ({ title, data }) => {
  return (
    <div className="footer-explore-style">
      <p style={{ fontSize: "36px", margin: "0", padding: "0" }}>{title}</p>
      <ul className="footer-item-style">
        {data.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};

export default SiteMap;

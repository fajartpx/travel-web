import React from "react";
import "./trips-style.css";
import { MdLocationPin } from "react-icons/md";
import Button from "../../button";

const Trips = ({ image, link, nameLocation }) => {
  return (
    <section className="trips-container-style">
      <div
        className="image-container-style"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="title-btn-style">
          <h2 className="trips-title-style">
            Pesona Indonesia: Candi Borobudur
          </h2>
          <Button
            className="ver-satu-style"
            fontWeight="600"
            title="View Trips"
          />
        </div>
        <a href={link} className="trips-location-style" target="_blank">
          <MdLocationPin size={30} color={"red"} />
          <p>{nameLocation}</p>
        </a>
      </div>
    </section>
  );
};

export default Trips;

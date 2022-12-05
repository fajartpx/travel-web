import React from "react";
import './style/trips-style.css'
import {MdLocationPin } from "react-icons/md";
import Button from "./Button";

const Trips = ({image})=>{

    return(
        <section className="trips-container-style" >
        <div className="image-container-style" style={{backgroundImage: `url(${image})`}}>
            <h2 className="trips-title-style">Pesona  Indonesia: Candi Borobudur</h2>
            <div className='btn'>
            <Button  color='#FE4D00' backgroundColor='#ffffff' padding='6px 40px' fontSize='15px' fontWeight='600' title='View Trips'/>
            </div>
            <a href="https://www.google.com/maps/place/Borobudur+Temple/@-7.6078685,110.2015626,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a8cf009a7d697:0xdd34334744dc3cb!8m2!3d-7.6078738!4d110.2037513" className="trips-location-style">
            <p ><MdLocationPin color={'red'}/>Magelang, Jawa Tengah</p>
            </a>
        </div>
        </section>
    )
}

export default Trips;
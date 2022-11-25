import React from "react";
import './trips-style.css'
import borobudur from '../image/borobudur.jpg'
const Trips = ()=>{
    return(
        <section className="trips-container-style" style={{backgroundImage: `url(${borobudur})`}}>
            <h2 className="trips-title-style">Pesona  Indonesia: Candi Borobudur</h2>
            <p>Magelang, Jawa Tengah</p>
        </section>
    )
}

export default Trips;
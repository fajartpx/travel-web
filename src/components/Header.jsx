import React from "react";
import "./header-style.css"
import Logo from "../image/logo.png"
import Indonesia from "../image/indonesia.png"
import {MdCall,MdOutlineAccountCircle,MdOutlineSearch} from "react-icons/md";

const Navbar = ()=>{
    return (
        <header>
            <div className="top-style">
                <p className="top-text-style"><img src={Indonesia} />Indonesia</p>
                <p className="top-text-style"><MdCall size={20} padding={"0 10px 0 0"}/>Contact Us</p>

            </div>
            <nav className="navbar-style">
                <div className="navbar-logo-style">
                    <a href="#"><img src={Logo}/></a>
                </div>
                <ul className="navbar-list-style">
                    <li>Explors</li>
                    <li>Offers</li>
                    <li>About</li>
                </ul>
                <div className="navbar-login-style">
                   <MdOutlineSearch size={20} color={"#ffffff"} style={{padding:"0 10px"}} />
                   <MdOutlineAccountCircle size={20} color={"#ffffff"}   />
                   
                </div>
            </nav>
        </header>
    )
}


const Destination =()=> {

    return(
        <>
        <div className="destination-style">
        <div className="xxx">
        <h1>It's time to travel</h1>
        <form className="destination-city-container-style">
            <select  className="destination-city-style" name="destination">
                <option value="Pekanbaru">Pekanbaru</option>
                <option value="Padang">Padang</option>
                <option value="Bandung">Bandung</option>
            </select>
            <select className="destination-city-style" name="destination">
                <option value="Pekanbaru">Duration</option>
                <option value="Padang">Padang</option>
                <option value="Bandung">Bandung</option>
            </select>
            <select className="destination-city-style" name="destination">
                <option value="Pekanbaru">Travel Date</option>
                <option value="Padang">Padang</option>
                <option value="Bandung">Bandung</option>
            </select>
             <select className="destination-city-style" name="destination">
                <option value="Pekanbaru">Travelers</option>
                <option value="Padang">Padang</option>
                <option value="Bandung">Bandung</option>
            </select>
            <button className="destination-button-style">Search</button>
        </form>
        </div>
        </div>
        
        </>
        
    )
}


const Header = ()=>{
    return (
        <div className="header-style">
            <Navbar/>
            <Destination />
        </div>
    )
}


export default Header;
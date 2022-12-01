import React, { useState, useRef, useEffect } from "react";
import "./header-style.css"
import Logo from "../image/logo.png"
import Indonesia from "../image/indonesia.png"
import {MdCall,MdOutlineAccountCircle,MdOutlineSearch} from "react-icons/md";
import { IconContext } from "react-icons";

const Navbar = ()=>{
    const [fix, setFix] = useState(false);
    const x = useRef();
    const y = useRef();
    const z = useRef();
    //mengatur posisi navbar agar fixed

    useEffect(()=>{
        window.addEventListener("scroll", fixed)
    },[fix])
    
    const fixed =()=>{
        if (window.scrollY>=10) {
            setFix(true)
            return x.current.remove()
    }
        else if (window.scrollY<=0) {
         setTimeout(() => {
            setFix(false)
            y.current.prepend(x.current)
        },100)
    }}
    

    const mouseOver =({target})=> {
        target.style.color="#FE4D00" ;
    }
    const mouseOver2 =({target})=> {
        target.style.color="#FFFFFF" ;
    }


    return (
        <header ref={y}>
            <div ref={x} className="top-style">
                <p className="top-text-style"><img src={Indonesia} />Indonesia</p>
                <p className="top-text-style"><MdCall size={20} padding={"0 10px 0 0"}/>Contact Us</p>

            </div>
            <nav className={fix?"navbar-style fixed":"navbar-style"}>
                <div className="navbar-logo-style">
                    <a href="#"><img src={Logo} /></a>
                </div>
                <ul className="navbar-list-style">
                    <a href="#" className="link-nav-style"><li>Explors</li></a>
                    <a href="#" className="link-nav-style"><li>Offers</li></a>
                    <a href="#" className="link-nav-style"><li>About</li></a>
                </ul>
                <div ref={z} className="navbar-login-style">
                    <IconContext.Provider  value={{ size:"20px", className: "icon-style" }}>
                   <MdOutlineSearch onMouseOver={mouseOver} onMouseOut={mouseOver2}  style={{padding:"0 10px"}} />
                   <MdOutlineAccountCircle onMouseOver={mouseOver} onMouseOut={mouseOver2}   />
                   </IconContext.Provider>
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
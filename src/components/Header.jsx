import React from "react";
import "./header-style.css"

const Navbar = ()=>{
    return (
        <header>
            <nav className="navbar-style">
                <div className="navbar-logo-style">
                    <a href="#"><h2>Logo</h2></a>
                </div>
                <ul className="navbar-list-style">
                    <li>Explors</li>
                    <li>Offers</li>
                    <li>About</li>
                </ul>
                <div className="navbar-login-style">
                    <button>Login</button>
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
                <option value="Pekanbaru">Pekanbaru</option>
                <option value="Padang">Padang</option>
                <option value="Bandung">Bandung</option>
            </select>
            <select className="destination-city-style" name="destination">
                <option value="Pekanbaru">Pekanbaru</option>
                <option value="Padang">Padang</option>
                <option value="Bandung">Bandung</option>
            </select>
             <select className="destination-city-style" name="destination">
                <option value="Pekanbaru">Pekanbaru</option>
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
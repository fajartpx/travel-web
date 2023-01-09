import React from "react";
import "./navbar-style.css";
import Logo from "../../assets/image/logo.png";
import { MdCall, MdOutlineAccountCircle, MdOutlineSearch } from "react-icons/md";
import { IconContext } from "react-icons";

const Navbar = ({ flag, lag, fix }) => {
   return (
      <header style={{ position: "relative", zIndex: "2" }}>
         <div className={fix ? "hidden" : "top-style"}>
            <p className="top-text-style">
               <img src={flag} />
               {lag}
            </p>
            <p className="top-text-style">
               <MdCall size={20} padding={"0 10px 0 0"} />
               Contact Us
            </p>
         </div>
         <nav className={fix ? "navbar-style fixed" : "navbar-style"}>
            <div className="navbar-logo-style">
               <a href="#">
                  <img src={Logo} />
               </a>
            </div>
            <ul className="navbar-list-style">
               <a href="#" className="link-nav-style">
                  <li>Explors</li>
               </a>
               <a href="#" className="link-nav-style">
                  <li>Offers</li>
               </a>
               <a href="#" className="link-nav-style">
                  <li>About</li>
               </a>
            </ul>
            <div className="navbar-login-style">
               <IconContext.Provider value={{ size: "20px", className: "icon-style" }}>
                  <div className="container-icon">
                     <MdOutlineSearch />
                  </div>
                  <div className="container-icon">
                     <MdOutlineAccountCircle />
                  </div>
               </IconContext.Provider>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;

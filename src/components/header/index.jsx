import React, { useState, useEffect } from "react";
import "./header-style.css";
import Logo from "../../assets/image/logo.png";
import {
  MdCall,
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdLocationPin,
} from "react-icons/md";
import { IconContext } from "react-icons";
import DropdownSearch from "../dropdown-search";

// Navbar Component
const Navbar = ({ flag, lag }) => {
  const [fix, setFix] = useState(false);
  //mengatur posisi navbar agar fixed
  useEffect(() => {
    window.addEventListener("scroll", fixed);
  }, [fix]);

  const fixed = () => {
    if (window.scrollY > 10) {
      setFix(true);
    } else if (window.scrollY <= 0) {
      setTimeout(() => {
        setFix(false);
      }, 100);
    }
  };

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
          <IconContext.Provider
            value={{ size: "20px", className: "icon-style" }}
          >
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
// End of Navbar Component

// Filter component
const FilterSearch = () => {
  return (
    <div className="filter-style">
      <div>
        <h1
          style={{
            fontSize: "40px",
            letterSpacing: "2px",
            margin: "0 0 10px 0",
          }}
        >
          It's time to travel
        </h1>
        <form className="filter-container-style">
          <div className="filter-dropdown-style">
            <DropdownSearch />
          </div>
        </form>
      </div>
    </div>
  );
};
// End of Filter  component

// Header Main component
const Header = ({ flag, lag }) => {
  return (
    <div className="header-style">
      <Navbar flag={flag} lag={lag} />
      <FilterSearch />
      <a
        href="https://goo.gl/maps/skq4NG5ajNxeFbsS7"
        className="location-background-style"
      >
        <MdLocationPin size={30} color={"red"} />
        <p>Lake Brienz, Switzerland 1850</p>
      </a>
    </div>
  );
};
// End of Header Main component

export default Header;

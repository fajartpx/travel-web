import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import "../../components/navbar/navbar-style.css";

const Header = ({ flag, lag }) => {
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

   return <Navbar flag={flag} lag={lag} fix={fix} />;
};
// End of Header Main component

export default Header;

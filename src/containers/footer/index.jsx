import React, { useState } from "react";
import "./footer-style.css";
import Appstore from "../../assets/image/appstore.png";
import Playstore from "../../assets/image/playstore.png";
import amerika from "../../assets/image/amerika.png";
import Language from "../../components/custom-select/select-language";
import NewsLetter from "../../components/newsletter";
import SiteMap from "../../components/sitemap";
import SocialMedia from "../../components/social-media";

const data = {
   Explore: ["Experiances", "Destinations", "Time Periods", "Featured Trips", "Popular Trips", "New Excursions", "Weekend Trips", "Custom Travel", "Special Over"],
   About: ["How it works", "Health & Safety", "Accessibility", "Careers", "Press", "FAQs"],
   Support: ["Contact Us", "Live Chat", "Travel Insurance", "Travel Agents", "Term Conditions", "Privacy Policy"],
};

const Footer = () => {
   const [option, setOption] = useState({ value: "UNITED STATES", select: false, image: amerika });

   const ubah = (nilai1, nilai2) => {
      return setOption({ ...option, value: nilai1, select: !option.select, image: nilai2 });
   };

   const ubahOption = (nilai1) => {
      return setOption({ ...option, select: !nilai1 });
   };

   return (
      <footer className="footer-style">
         <div className="footer-container-style">
            <div className="footer-language-style">
               <Language option={option} setOption={ubahOption} getValue={ubah} />
               <NewsLetter />
            </div>
            <SiteMap title={Object.keys(data)[0]} data={data.Explore} />
            <SiteMap title={Object.keys(data)[1]} data={data.About} />
            <SiteMap title={Object.keys(data)[2]} data={data.Support} />
            <div className="mobile-app-style">
               <p style={{ fontSize: "40px", fontWeight: "400", margin: "0", padding: "0 0 10px 0" }}>Mobile App</p>
               <a href="#" className="link-app-stylee" target="_blank">
                  <img src={Playstore} />
               </a>
               <a href="#" className="link-app-stylee" target="_blank">
                  <img src={Appstore} />
               </a>
            </div>
         </div>
         <SocialMedia />
      </footer>
   );
};

export default Footer;

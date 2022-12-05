import React from "react";
import './style/footer-style.css'
import {MdOutlineLanguage,MdEmail,MdKeyboardArrowRight} from "react-icons/md";
import Appstore from '../image/appstore.png'
import Playstore from '../image/playstore.png'


export const Language =()=>{
    return(
        <div className="language-style">
        <p style={{fontSize:"14px", lineHeight:"10px"}}><MdOutlineLanguage color={'#ffffff'} size={25} style={{paddingRight:'2px'}}/>Change Location Info</p>
        <select className="select-style">
            <option>Indonesia</option>
            <option>English</option>
        </select>
        <p style={{fontSize:"10px", margin:"0px", lineHeight:"10px"}}>Select your language</p>
        </div>
    )
}

export const NewsLetter =()=> {
    return(
        <div className="language-style">
        <p style={{fontSize:"14px", lineHeight:"10px"}}><MdEmail color={'#ffffff'} size={25} style={{paddingRight:'2px'}}/>Change Location Info</p>
        <div className="input-style">
            <input className="input-news-style" placeholder="Enter your email address"/>
            <button className="button-news-style"><MdKeyboardArrowRight color={"#ffffff"} /></button>
        </div>
        <p style={{fontSize:"10px", margin:"0px", lineHeight:"10px"}}>Enter your email address</p>
        </div>
    )
}

export const Link =()=> {
    return(
         <div className="footer-explore-style">
                    <p style={{fontSize:"36px", fontWeight:'400',margin:"0", padding:"0"}}>Explore</p>
                    <ul className="footer-item-style">
                        <li>Experiances</li>
                        <li>Destinations</li>
                        <li>Time Periods</li>
                        <li>Featured Trips</li>
                        <li>Popular Trips</li>
                        <li>New Excursions</li>
                        <li>Weekend Trips</li>
                        <li>Custom Travel</li>
                        <li>Special Over</li>
                    </ul>
        </div>
    )
}

const MobileApp=()=>{
    return(
        <div className="mobile-app-style">
            <p style={{fontSize:"40px", fontWeight:'400',margin:"0", padding:"0 0 10px 0"}}>Mobile App</p>
            <a href="#" className="link-app-style" target="_blank" ><img src={Playstore} /></a>
            <a href="#" className="link-app-stylee" target="_blank" ><img src={Appstore} /></a>
        </div>
    )
}

const Footer =()=>{
    return(
        <footer className="footer-style">
            <div className="footer-container-style">
                    
                <div className="footer-language-style">
                    <Language/>     
                    <NewsLetter/>       
                </div> 
               <Link/>
               <Link/>
               <Link/>
               <MobileApp />
                {/* <div className="footer-about-style"></div>
                <div className="footer-support-style"></div>
                <div className="footer-app-style"></div> */}
           </div>
        </footer>
    )
}

export default Footer;
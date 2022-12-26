import React, { useState } from "react";
import './style/footer-style.css'
import {MdOutlineLanguage,MdEmail,MdKeyboardArrowRight} from "react-icons/md";
import Appstore from '../image/appstore.png'
import Playstore from '../image/playstore.png'
import amerika from '../image/amerika.png'
import indonesia from '../image/indonesia.png'
import { GrYoutube,GrTwitter,GrFacebook,GrInstagram } from "react-icons/gr";
import { IconContext } from "react-icons"


export const Language =({getData})=> {
    const [option, setOption] = useState({value:"UNITED STATES", select:false, image:amerika});
    
    return(
    <div className="language-container-style">
        <p><MdOutlineLanguage color={'#ffffff'} size={28} style={{ paddingRight: '2px' }} />Change Location Info</p>
        <div className="language-select-style" onClick={()=>setOption({select:!option.select})}>
            <div className="language-value-style">
                <p><img src={option.image?option.image:amerika} style={{ padding: "0px 4px" }} />{option.value?option.value:"UNITED STATES"}</p>
                <MdKeyboardArrowRight size={20} style={{transform:option.select?"rotate(90deg)":null}}/>
                
            </div>
        </div>
        <ul className={option.select?"language-option-style":"hidden"} >
            <div className="language-value-style act" onClick={()=>{setOption({value:"UNITED STATES",image:amerika});getData("United States",amerika)}}>
                 <p><img src={amerika} style={{ padding: "0px 4px" }} />UNITED STATES</p>
            </div>
             <div className="language-value-style act" onClick={()=>{setOption({value:"INDONESIAN",image:indonesia});getData("Indonesian",indonesia)}}>
                 <p><img src={indonesia} style={{ padding: "0px 4px" }}  />INDONESIAN</p>
            </div> 
        </ul>
        <p style={{ fontSize: "10px", margin: "0px", lineHeight: "10px", color: "#ffffff", padding: "4px 0px" }}>Select your language</p>
    </div>
)
}

export const NewsLetter =()=> {
    return(
        <div className="language-container-style">
        <p style={{fontSize:"14px", lineHeight:"10px"}}><MdEmail color={'#ffffff'} size={25} style={{paddingRight:'2px'}}/>Signup for our newsletter</p>
        <div className="news-input-style">
            <input placeholder="Enter your email address"/>
            <button className="button-news-style"><MdKeyboardArrowRight color={"#ffffff"} size={20}/></button>
        </div>
        <p style={{fontSize:"10px", margin:"0px", lineHeight:"10px", color:"#ffffff", padding:"4px 0px"}}>Enter your email address</p>
        </div>
    )
}

export const Link =({title,data})=> {
    return(
         <div className="footer-explore-style">
                    <p style={{fontSize:"36px",margin:"0", padding:"0"}}>{title}</p>
                    <ul className="footer-item-style">
                        {data.map((e)=>{
                            return(
                                <li>{e}</li>
                            )
                        })}
                    </ul>
        </div>
    )
}

const MobileApp=()=>{
    return(
        <div className="mobile-app-style">
            <p style={{fontSize:"40px", fontWeight:'400',margin:"0", padding:"0 0 10px 0"}}>Mobile App</p>
            <a href="#" className="link-app-stylee" target="_blank" ><img src={Playstore} /></a>
            <a href="#" className="link-app-stylee" target="_blank" ><img src={Appstore} /></a>
        </div>
    )
}

const SocialMedia =()=>{

    const hover=(e)=>{
        return e.target.style.color="#FE4D00"
    }
    const rehover=(e)=>{
        e.target.style.color="#FFFFFF"
    }

    return(
    <IconContext.Provider value={{  size:"50", color: "white", className: "icon-sosmed-style" }}>
        <div className="sosmed-style"> 
            <a href="" ><GrTwitter  onMouseOver={hover} onMouseOut={rehover}/></a>
            <a href=""><GrFacebook  onMouseOver={hover} onMouseOut={rehover} /></a>
            <a href=""><GrInstagram  onMouseOver={hover} onMouseOut={rehover}/></a>
            <a href=""><GrYoutube  onMouseOver={hover} onMouseOut={rehover}/></a>
        </div>
    </IconContext.Provider>
    )
}

const Footer =({sss})=>{

     const data = {
        Explore:["Experiances","Destinations","Time Periods","Featured Trips","Popular Trips",
                 "New Excursions","Weekend Trips", "Custom Travel","Special Over"],
        About :["How it works","Health & Safety","Accessibility","Careers","Press","FAQs"],
        Support :["Contact Us","Live Chat","Travel Insurance","Travel Agents","Term Conditions","Privacy Policy"]}
    return(
        <footer className="footer-style">
            <div className="footer-container-style">   
                <div className="footer-language-style">
                    <Language getData={sss}/> 
                        
                    <NewsLetter/>       
                </div> 
               <Link title={Object.keys(data)[0]} data={data.Explore} />
               <Link title={Object.keys(data)[1]} data={data.About}/>
               <Link title={Object.keys(data)[2]} data={data.Support}/>
               <MobileApp />            
           </div>
           <SocialMedia />
        </footer>
    )
}

export default Footer;
import React, { useRef } from "react";
import './cardslider-style.css';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight,MdLocationPin } from "react-icons/md";

const CardSlider =()=> {
  const slide = useRef();

  const klik =(param)=>{
    const x = slide.current;
    x.scrollLeft = x.scrollLeft+param;
  }
  const data = [1,2,3,4,5,6,7,8]
  return(
    <div id="container-slider">
     <div id="slider" ref={slide}>
     {
      data.map(()=>{
        return(
        <div className="card-style" style={{backgroundImage:'url(https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80)'}}>
          <div className="card-desc-style">
            <div className="text-desc-style">
              <p className="district-style"><MdLocationPin color={'red'} size={15}/>District</p>
              <p className="region-style">Region</p>
            </div>
          </div>
        </div>
        )
      })
     }
     </div>
      <MdKeyboardArrowLeft size={40} color={'#393E46'} className="arrow-style left"  onClick={()=>klik(-500)}/>
      <MdKeyboardArrowRight size={40} color={'#393E46'} className="arrow-style right" onClick={()=>klik(500)}  />
    </div>
  )
}
export default CardSlider;
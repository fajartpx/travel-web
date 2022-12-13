import React, { useRef } from "react";
import './style/cardslider-style.css';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight,MdLocationPin } from "react-icons/md";

const CardSlider =()=> {
  const slide = useRef();

  const klik =(param)=>{
    const x = slide.current;
    x.scrollLeft = x.scrollLeft+param;
  }
  const data = [{district:"Sumatera Barat", region:"Bukit Tinggi", images:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"},
{district:"Sleman", region:"Yogyakarta", images:"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
{district:"Riau", region:"Pekanbaru", images:"https://images.unsplash.com/photo-1667859792717-22d00b533858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
{district:"Sumatera Barat", region:"Medan", images:"https://images.unsplash.com/photo-1667308748964-8b85ada02450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
{district:"Jawa Barat", region:"Bandung", images:"https://images.unsplash.com/photo-1663052722151-c13ff2838cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
{district:"Sumatera Barat", region:"Padang", images:"https://images.unsplash.com/photo-1669604274367-ff17a0ce20cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
,{district:"Sulawesi Selatan", region:"Palu", images:"https://images.unsplash.com/photo-1655679152783-f4d22c72264a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
,{district:"Sulawesi Tengah", region:"Makasar", images:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}
,{district:"Sumatera Selatan", region:"Palembang", images:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}]
  
return(
    <div id="container-slider">
     <div id="slider" ref={slide}>
     {
      data.map((e)=>{
        return(
        <div className="card-style" style={{backgroundImage:`url(${e.images})`}}>
          <div className="card-desc-style">
            <div className="text-desc-style">
              <p className="district-style">{e.district}</p>
              <p className="region-style">{e.region}</p>
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
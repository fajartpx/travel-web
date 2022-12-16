import React, { useRef,useState } from "react";
import './style/cardslider-style.css';
import { MdGrade,MdKeyboardArrowLeft,MdKeyboardArrowRight,MdFavoriteBorder,MdFavorite } from "react-icons/md";



const CardSlider =()=> {
  const [value, setValue] = useState([
      {id: 1, district:"Sumatera Barat", region:"Bukit Tinggi", images:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80", favorite : false},
      {id: 2,district:"Sleman", region:"Yogyakarta", images:"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", favorite : false},
      {id: 3,district:"Riau", region:"Pekanbaru", images:"https://images.unsplash.com/photo-1667859792717-22d00b533858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", favorite : false},
      {id: 4,district:"Sumatera Utara", region:"Medan", images:"https://images.unsplash.com/photo-1667308748964-8b85ada02450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", favorite : false},
      {id: 5,district:"Jawa Barat", region:"Bandung", images:"https://images.unsplash.com/photo-1663052722151-c13ff2838cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", favorite : false},
      {id: 6,district:"Sumatera Barat", region:"Padang", images:"https://images.unsplash.com/photo-1669604274367-ff17a0ce20cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", favorite : false},     {id: 7,district:"Sulawesi Selatan", region:"Palu", images:"https://images.unsplash.com/photo-1655679152783-f4d22c72264a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", favorite : false},
      {id: 8,district:"Sulawesi Tengah", region:"Makasar", images:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80", favorite : false},
      {id: 9,district:"Sumatera Selatan", region:"Palembang", images:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80", favorite : false}]
);

  const slide = useRef();

  const klik =(param)=>{
      const x = slide.current;
      x.scrollLeft = x.scrollLeft+param;
  }

 
  const ubah =(nilai)=>{
      const x =value.findIndex((obj)=>obj.id===nilai)
      value[x].favorite = !value[x].favorite
      setValue([...value])
  }
  
          
          
  return(
    <>
    <div id="container-slider">
      <div id="slider" ref={slide}>
        {value.map((e)=>{
          return(
          <div className="slider-card-style" key={e.id}>
            <div className="fav-style" >
              {e.favorite?<MdFavorite size={25} color="#FE4D00" onClick={()=>ubah(e.id)} />:<MdFavoriteBorder size={25} color="white" onClick={()=>ubah(e.id)}/>}
            </div>
            <div>
              <img className="image-card-style" src={e.images} />
            </div>
            <div className="card-desc-style">
              <div className="text-desc-style">
                <div className="rating-style">
                  <p className="district-style">{e.district}</p>
                  <div style={{margin:"0", padding:"3px 0px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px"}}><MdGrade size={18} color="#FE4D00"/><p style={{fontWeight:"500", padding:"0px 3px"}}>48</p><span style={{fontWeight:"100"}}>(24)</span></div>
                </div>
                <p className="region-style">{e.region}</p>
              </div>
          </div>
          </div> 
          )
        })
        }
      </div>
        <MdKeyboardArrowLeft size={40} color={'#393E46'} className="arrow-style left"  onClick={()=>klik(-590)}/>
        <MdKeyboardArrowRight size={40} color={'#393E46'} className="arrow-style right" onClick={()=>klik(590)}  />
    </div>
    </>
  )
}
export default CardSlider;
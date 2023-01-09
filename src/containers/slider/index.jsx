import React, { useRef, useState } from "react";
import "./slider-style.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardOne from "../../components/card/card-one";

const Slider = () => {
   const [value, setValue] = useState([
      {
         id: 1,
         district: "Sumatera Barat",
         region: "Bukit Tinggi",
         images: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
         favorite: false,
      },
      {
         id: 2,
         district: "Sleman",
         region: "Yogyakarta",
         images: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
         favorite: false,
      },
      {
         id: 3,
         district: "Riau",
         region: "Pekanbaru",
         images: "https://images.unsplash.com/photo-1667859792717-22d00b533858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         favorite: false,
      },
      {
         id: 4,
         district: "Sumatera Utara",
         region: "Medan",
         images: "https://images.unsplash.com/photo-1667308748964-8b85ada02450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         favorite: false,
      },
      {
         id: 5,
         district: "Jawa Barat",
         region: "Bandung",
         images: "https://images.unsplash.com/photo-1663052722151-c13ff2838cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         favorite: false,
      },
      {
         id: 6,
         district: "Sumatera Barat",
         region: "Padang",
         images: "https://images.unsplash.com/photo-1669604274367-ff17a0ce20cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
         favorite: false,
      },
      {
         id: 7,
         district: "Sulawesi Selatan",
         region: "Palu",
         images: "https://images.unsplash.com/photo-1655679152783-f4d22c72264a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
         favorite: false,
      },
      {
         id: 8,
         district: "Sulawesi Tengah",
         region: "Makasar",
         images: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
         favorite: false,
      },
      {
         id: 9,
         district: "Sumatera Selatan",
         region: "Palembang",
         images: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
         favorite: false,
      },
   ]);

   const ubahFavorite = (nilai) => {
      const indexnya = value.findIndex((obj) => obj.id === nilai);
      value[indexnya].favorite = !value[indexnya].favorite;
      setValue([...value]);
      console.log(value);
   };

   const slide = useRef();

   const klik = (param) => {
      const x = slide.current;
      x.scrollLeft = x.scrollLeft + param;
   };

   return (
      <div id="container-slider">
         <div id="slider" ref={slide}>
            {value.map((e) => {
               return <CardOne data={e} isFavorite={ubahFavorite} />;
            })}
         </div>
         <MdKeyboardArrowLeft size={40} color={"#393E46"} className="arrow-style left" onClick={() => klik(-590)} />
         <MdKeyboardArrowRight size={40} color={"#393E46"} className="arrow-style right" onClick={() => klik(590)} />
      </div>
   );
};
export default Slider;

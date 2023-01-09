import React from "react";
import "./card-one-style.css";
import { MdGrade, MdFavoriteBorder, MdFavorite } from "react-icons/md";

const CardOne = ({ data, isFavorite }) => {
   return (
      <div className="slider-card-style" key={data.id}>
         <div className="fav-style">
            {data.favorite ? (
               <MdFavorite
                  size={25}
                  color="#FE4D00"
                  onClick={() => {
                     isFavorite(data.id);
                  }}
               />
            ) : (
               <MdFavoriteBorder
                  size={25}
                  color="white"
                  onClick={() => {
                     isFavorite(data.id);
                  }}
               />
            )}
         </div>
         <div>
            <img className="image-card-style" src={data.images} />
         </div>
         <div className="card-desc-style">
            <div className="text-desc-style">
               <div className="rating-style">
                  <p className="district-style">{data.district}</p>
                  <div style={{ margin: "0", padding: "3px 0px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
                     <MdGrade size={18} color="#FE4D00" />
                     <p style={{ fontWeight: "500", padding: "0px 3px" }}>48</p>
                     <span style={{ fontWeight: "100" }}>(24)</span>
                  </div>
               </div>
               <p className="region-style">{data.region}</p>
            </div>
         </div>
      </div>
   );
};
export default CardOne;

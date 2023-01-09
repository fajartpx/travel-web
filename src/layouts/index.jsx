import React, { useState } from "react";
import Footer from "../containers/footer";
import Header from "../containers/header";
import amerika from "../assets/image/amerika.png";

const FragmentLayout = ({ children }) => {
   const [option, setOption] = useState({
      value: "United States",
      image: amerika,
   });

   const setDatax = (index, index2) => {
      setOption({ value: index, image: index2 });
   };

   return (
      <>
         <Header flag={option.image} lag={option.value} />
         {children}
         <Footer sss={setDatax} />
      </>
   );
};

export default FragmentLayout;

import React from "react";
import Button from "./Button";
import './style/trips2-style.css'


const VersionSatu =({image})=>{
    return(
        <>
        <img src={image} className="image-style"/>
        <article>
                <h2 className="title-style">Responsible Time Travel</h2>
                <p className="desc-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='trip2-button-style'>
                <Button  color='#FFFFFF' backgroundColor='#FE4D00' padding='6px 40px' fontSize='15px' fontWeight='600' title='View Trips'/>
                </div>
        </article>
        </>
         
    )
}

const VersionDua =({image})=>{
    return(
        <>
        <article>
                <h2 className="title-style">Responsible Time Travel</h2>
                <p className="desc-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='trip2-button-style'>
                <Button  padding='6px 40px' fontSize='15px' fontWeight='600' title='View Trips'/>
                </div>
        </article>
        <img src={image}  className="image-style"/>
        </>
    )
}

const Trips2 =(props)=> {
    const{version="2", images} = props;
    return(
        <section className="trips-container-stylex">
            <div className="container-style">
                {version=="1"?<VersionSatu image={images}/>:<VersionDua image={images}/>}
               
            </div>
             {console.log(typeof(version))}
             {console.log(version=="1")}
        </section>
    )
}

export default Trips2;
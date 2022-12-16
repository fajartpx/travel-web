import React from "react";
import Button from "./Button";
import './style/trips2-style.css'


const VersionSatu =({image,ver=1})=>{
    return(
        <>
        <img src={image} className={ver==1?"image-style":"hidden"}/>
        <article>
                <h2 className="title-style">Responsible Time Travel</h2>
                <p className="desc-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='trip2-button-style'>
                <Button className="ver-dua-style" fontWeight='600' title='View Trips'/>
                </div>
        </article>
        <img src={image} className={ver==2?"image-style":"hidden"}/>
        </>
         
    )
}


const Trips2 =(props)=> {
    const{version, images} = props;
    return(
        <section className="trips-container-stylex">
            <div className="container-style">
                <VersionSatu image={images} ver={version}/>  
            </div>
        </section>
    )
}

export default Trips2;
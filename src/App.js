import React,{useState} from 'react';
import CardSlider from './components/CardSlider';
import Header from './components/Header'
import Trips from './components/Trips';
import './App.css'
import Trips2 from './components/TripsVersion2';
import { version } from 'react';
import boro from "./image/borobudur.jpg"
import bali from "./image/bali.jpg"
import Footer,{Language} from './components/Footer';
import amerika from './image/amerika.png'
import Login from './containers/Login';



function App() {
  const [option, setOption] = useState({value:"United States", image:amerika});

  const setDatax=(index,index2)=>{
        setOption({value:index,image:index2})
    }



  return (
    // <div className="App">
    //   <Header flag={option.image} lag={option.value} />
    //   <CardSlider />
    //   <Trips link="https://goo.gl/maps/skq4NG5ajNxeFbsS7" nameLocation="Lake Brienz, Switzerland 1850"  image={bali}/>
    //   <Trips2 version="1" images="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80"/>
    //   <Trips link="https://goo.gl/maps/Uwrjm6DCr48eNZ2i7" nameLocation="Magelang, Central Java" image={boro}/>
    //   <Trips2 version="2" images="https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    //   <Footer sss={setDatax}/>
    //   {console.log(option.value)}
    // </div>

    <Login/>
  );
}

export default App;

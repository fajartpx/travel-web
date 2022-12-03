import CardSlider from './components/CardSlider';
import Header from './components/Header'
import Trips from './components/Trips';
import './App.css'
import Trips2 from './components/TripsVersion2';
import { version } from 'react';
import boro from "./image/borobudur.jpg"
import bali from "./image/bali.jpg"
import Footer,{Language} from './components/Footer';
import Dropdown from './components/Dropdown';


function App() {
  return (
    <div className="App">
      {/* <Header />
      <CardSlider />
      <Trips image={bali}/>
      <Trips2 images="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80"/>
      <Trips image={boro}/>
      <Trips2 version="1" images="https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      {console.log(typeof(version))}
      <Footer/> */}

      <Dropdown />
    </div>
  );
}

export default App;

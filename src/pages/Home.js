import React,{useState} from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ImageInfo from "../components/ImageInfo";
import PopUp from "../components/popUp";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Home(props) {
   console.log(props);

    
  return (
    <div>
      <Header />
      <Search setpop ={props.setPopup}  />
    
     <ImageInfo/>



      {props.popup && <PopUp setpop ={props.setPopup} 
      setVacconSloted ={props.setAllSlots} 
      district={props.district}
       setDistrict={props.setDistrict}
        selected={props.selected} 
        setSelected={props.setSelected}/>}
     
    </div>
   
  );
}

export default Home;

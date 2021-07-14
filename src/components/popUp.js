import React, { useState, useEffect } from "react";
import "../styles/popUp.scss";
import Select from "react-select";
import { useHistory } from "react-router-dom";
//styles
const customStyle = {
  control: (base) => ({
    ...base,

    outline: "none",
    fontSize: 12,
    boxShadow: "none",
  }),
};

function PopUp(props) {
const history = useHistory();
const [states, SetStates] = useState([]);
console.log(props);

  //api call
  useEffect(() => {
    const states = fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    ).then((res) => {
     return res.json().then((result) => {
       const result_arr = [];
       result.states.forEach(ele => {
         result_arr.push({'label':ele.state_name,'value':ele.state_id})
       });
       SetStates(result_arr)
     
      });
    });
  }, []);

  //set pop up
  const closepop = (e) => {
    e.preventDefault();
    props.setpop(false);
  };

  //get the district
let getDistrict =(e)=>{
  fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${e.value}`).then((response)=>{
    return response.json()
  }).then((result)=>{
    const district_array = []
    result.districts.forEach((element)=>{
      district_array.push({'label':element.district_name,'value':element.district_id})
       
    })
    props.setDistrict(district_array)
  })
}
//set district to state
let districtset=(e)=>{

  props.setSelected(e.value)
  
}
//get vaccin details
const getvaccinDetails = (e) =>{

  let today = new Date();
  let formated = `${today.getDate()}-${today.getMonth()+1}-${today.getUTCFullYear()}`;

fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${props.selected}&date=${formated}`).then((response)=>{
return response.json()
}).then((result)=>{

 props.setVacconSloted(result.sessions)
 props.setpop(false);
 history.push('/filter');
})
}


  return (
    <div>
      <div className="popup">
        <p>Search in your location</p>
        <hr />
        <form>
          <label>State</label>
          <div className="form-group">
            <Select placeholder=
            {"Select The State"} 
           options={states}
            styles={customStyle} 
            onChange ={getDistrict}
            />
            
          </div>
          <label>District</label>
          <div className="form-group">
            <Select 
            placeholder={"Select The District"} 
            styles={customStyle}
            options = {props.district} 
            onChange = {districtset}
            />
          </div>
        </form>
        <hr />
        <div className="butons">
          {props.selected ? <button href="" className="serch" 
          onClick={getvaccinDetails}>
            Search
          </button> :''}
          
          <button className="close" 
          onClick={closepop}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;

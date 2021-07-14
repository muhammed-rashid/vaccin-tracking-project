import React,{useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "../styles/dates.scss";
import Search  from "./Search";
import Header  from "./Header";
function ListAllSlots({ allSlots,setAllSlots,selected,setCenter,setPop}) {

  var history = useHistory();

const [dat, setdat] = useState('')
const [loading,SetLoading] = useState(true);

  const addDays = () => {

   
    const date = new Date();
    let datesCollection = [];
    for (var i = 1; i < 6; i++) {
      datesCollection.push(
        `${date.getDate() +i - 1}/${date.getMonth() + 1}/${date.getFullYear()}`
      );
    }
  return datesCollection;
  };
useEffect(()=>{
let d = new Date()
let fro = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`

setdat(fro)
if(allSlots != undefined){
  SetLoading(false)
  console.log(allSlots)
}


},[])


  var dates = addDays().map((ele) => {
    return <a className={ele == dat ?'selected':''} onClick={()=>datewise(ele)}>{ele}</a>;
  });

 function datewise(date){
  setdat(date)
  fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${selected}&date=${date}`).then((response)=>{
    return response.json()
  }).then((result)=>{
    console.log(result);
    setAllSlots(result.sessions)

  })
 }

function getCenter(ele){
  
   setCenter(ele)
  history.push('/center');
}

  return (
    <div>
      <Header/>
     
      <div className="dates-listing-area">{dates}</div>

      {loading == false ? allSlots.map((ele) => {
        return (
          <div className="blocks">
            <div className="block-big">
              <h2>{ele.address}</h2>
              <p>{ele.block_name}</p>
              <p>{ele.district_name}</p>
              <div className="icons-with">
                <p>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  {ele.date}
                </p>
                <p>
                  {" "}
                  <i class="fa fa-check" aria-hidden="true"></i>
                  {ele.from}
                </p>
              </div>
              <div className="pills">
                <p>{ele.fee_type}</p>
                <p>{ele.min_age_limit}+</p>
                <p>{ele.vaccine}</p>
              </div>
            </div>
            <div className="small">
              <h2>{ele.available_capacity}</h2>
              <p>Dose</p>
              <button onClick={()=>getCenter(ele.center_id)}>VIEW</button>
            </div>
          </div>
        );
      }):''}
    </div>
  );
}

export default ListAllSlots;

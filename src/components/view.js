import React, { useEffect,useState } from 'react'
import {useHistory } from 'react-router-dom'
import '../styles/detail.scss'
function View(props) {
    var history = useHistory()
    const [center, setCenter] = useState({})
  const [loading,setLoading] = useState(true)
    useEffect(()=>{
        console.log(props);
            console.log('effercted');
            fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByCenter?center_id=${props.center}&date=18-06-2021`).then((response)=>response.json()).then((result)=>{
                setCenter(result.centers)
                console.log('hooo',result);
                setLoading(false)
            })
    },[])
    return (
        <div>
            <div className="top-bar">
            <i class="fa fa-arrow-left" aria-hidden="true" onClick={()=>history.push('/filter')}></i> Slot Details
            </div>
            <div className="pr">
            <div className="first-one">
                <h2>{center.name}</h2>
                <hr></hr>
                <p>{center.block_name}</p>
                <p>{center.address}</p>
                <div className="icons-with">
                
                <p>
                 
                  <i class="fa fa-check" aria-hidden="true"></i>
                  {center.from} Am - {center.to} Pm
                </p>
              </div>
              <a href="https://selfregistration.cowin.gov.in/">Book Now</a>
            </div>
        {!loading&&center.sessions.map((el,index)=>{
            if(index==0){

 
            return(
            <>
    <div className="dose-availablity">
    <h2>Dose availablity</h2>
    <hr></hr>
    <div className="av">
        <div className="list-chi">
            <h3 className="available">{el.available_capacity}</h3>
            <p>Available</p>
        </div>
        <div className="list-chi">
            <h3 className="dose1">{el.available_capacity_dose1}</h3>
            <p>Dose 1</p>
        </div>
        <div className="list-chi">
            <h3 className="dose2">{el.available_capacity_dose2}</h3>
            <p>Dose 2</p>
        </div>
    </div>
</div>


<div className="Slot_details">
<h2>Slot Details</h2>
<hr></hr>
{el.slots.map((slotes)=>{
    return(
<a>{slotes}</a>
    )
})}

</div>
<div className="Slot_details">
                <h2>More Information</h2>
                <hr></hr>
                <div className="wrapper">
                <div className="left">
                   <p>Price  </p>
                   <p>Age  </p>
                   <p>vaccine  </p>
               </div>
               <div className="right">
               <p className="gr">:&nbsp;&nbsp;{center.fee_type} </p>
                   <p >:&nbsp;&nbsp;{el.min_age_limit} +</p>
                   <p>:&nbsp;&nbsp;{el.vaccine} </p>
               </div>
                </div>
               
            </div>
</>
   )
}
})}
           
            


            </div>


        </div>
    )
}

export default View

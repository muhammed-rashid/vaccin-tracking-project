
import Home from './pages/Home'
import View from './components/view'
import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ListAllSlots from './components/ListAllSlots'
import Dates from './components/ListAllSlots'
import Footer from "./components/footer";
function App() {
  const [popup,SetPopup] = useState(false)
  const [vaccinSlots,setVacconSloted] = useState([])
  const [district,setDistrict] = useState([])
  const [selected,setSelected] = useState()
const[center,setCenter] = useState('')
  return (
    <div className="App">
      <Router>
      <Route exact path="/">
            <Home  setCenter={setCenter} popup={popup}setPopup={SetPopup} district={district}setDistrict={setDistrict}selected={selected}setSelected={setSelected} setAllSlots = {setVacconSloted}  />
      </Route>
      <Route path="/filter">
       <Dates allSlots = {vaccinSlots} 
       setAllSlots = {setVacconSloted} 
     
       selected={selected} setCenter={setCenter} popup={popup} setPop={SetPopup}  />
         </Route>
      <Route  path="/center">
            <View center={center}/>
      </Route>
      
      </Router>
   
      <Footer/>
    </div>
  );
}

export default App;

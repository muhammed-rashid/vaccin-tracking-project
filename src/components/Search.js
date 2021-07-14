import React from 'react'
import '../styles/home.scss'
function Search(props) {
   
   const openpopup = ()=>{
    props.setpop(true)
    console.log('clicking');
    }
    return (
        <div className="search">
            <button className="search-button" onClick ={openpopup}>
            <i class="fa fa-search" aria-hidden="true"></i> Search For Vaccination Slots
            </button>
        </div>

    )
}

export default Search

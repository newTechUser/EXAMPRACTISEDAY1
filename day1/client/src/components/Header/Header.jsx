import React from 'react'
import { useState } from 'react'
import './Header.css'

function Header() {
    const [search,setsearch] = useState("")
    function handleSearch(){
        console.log(search);
    }
  return (
    <div className="headersection">
        <div className="header">
            <div className="headtitletext">
                Learn From The Expert
            </div>
            <div className="headmaintext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime<br/> ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </div>
            <div className="headendtext">
                <button className="headbtn">
                    Admission Now
                </button>
            </div>
        </div> 
        <div className="divsrchinput">
            <input type="text" className="srchinput" placeholder="Search" onChange={()=>setsearch(this.value)}/>
            <button className='Srch' onClick={handleSearch}>Search</button>
        </div>
    </div> 
  )
}

export default Header
import React from 'react'
import './Ourteachers.css'
import axios from 'axios'
import { useState , useEffect } from 'react';

function Ourteachers() {
  const port = 5000;
  const [loading,setloading] = useState(false)
  const [data,setdata] = useState([])

  const getdata = async() =>{
    try{
      setloading(true)
      let res = await axios.get(`http://localhost:${port}/teacher`)
      setloading(false)
      setdata(await res.data)     
    }
    catch(error){
      setloading(false)
      console.log(error);
    }
  }

  useEffect(()=>{
    getdata()
  },[])
  

  return (
    <div className="tch">
        <p className="tchtitletext">
            Our Teachers
        </p> 
        <p className="tchmaintext">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut<br/>
            neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta<br/>
            repudiandae in quas quibusdam ullam, illum sed veniam!
        </p>
        {
        loading ? 
        ("loading..."):
        <div className="cardside">
        {
          data.map((item)=>(
            <div key={item._id} className="card">
              <div className="img">
                <img className='image' src={item.teacherimage} alt="" />
              </div>
              <div className="carditem">
                <p className="cardname">{item.teachername}</p>
                <p className="cardsub">{item.teachersubject}</p>
                <p className="carddescription">{item.teacherdescription}</p>
              </div>
          </div>
          ))
        }
          
        </div>
        }
    </div>
  )
}

export default Ourteachers
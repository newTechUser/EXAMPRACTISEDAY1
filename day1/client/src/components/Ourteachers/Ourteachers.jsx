import React from 'react'
import './Ourteachers.css'
import axios from 'axios'
import { useState , useEffect } from 'react';
import { FaSort } from 'react-icons/fa';

function Ourteachers() {
  const port = 5000;
  const [loading,setloading] = useState(false)
  const [data,setdata] = useState([])
  const [sortcase,setsortcase] = useState(true)
  const [search,setsearch] = useState("")
  const [searcheddata,setsearcheddata] = useState([])

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

  function sort(){
    if(sortcase){
      setdata(data.sort((a,b)=> a.teachername.localeCompare(b.teachername)))
      setsortcase(false)
    }
    else{
      setdata(data.sort((a,b)=> b.teachername.localeCompare(a.teachername)))
      setsortcase(true)
    }

    if(searcheddata.length > 0 && sortcase === true){
      setsearch(searcheddata.sort((a,b)=>a.teachername - b.teachername))
      setsortcase(false)
    }
    else{
      setsearch(searcheddata.sort((a,b)=>b.teachername - a.teachername))
      setsortcase(true)
    }
  }
  function handleSearch(){
    if(search.length !== 0){
      const DATA = data.filter((item)=>item.teachername.toLowerCase().includes(search.toLowerCase()))
      setsearcheddata(DATA.length === 0 ? false: DATA)
    }
  }

  return (
    <div className="tch">
        <p className="tchtitletext">
            Our Teachers<FaSort onClick={sort} style={{cursor:'pointer',fontSize:'30px'}}/>
        </p> 
        <div className='centerdiv'>
          <div className="divsrchinput">
                <input type="text" className="srchinput" placeholder="Search" onChange={(e)=>setsearch(e.target.value)}/>
                <button className='Srch'  onClick={handleSearch}>Search</button>
          </div>
        </div>
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
            searcheddata ? (searcheddata.length===0 ? (data.map((item) => {
              return(
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
              )
            })):
            (searcheddata.map((item) => {
                return(
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
                )
            }))):
            <div>Not Found</div>
          }
            
          </div>
        }
    </div>
  )
}

export default Ourteachers
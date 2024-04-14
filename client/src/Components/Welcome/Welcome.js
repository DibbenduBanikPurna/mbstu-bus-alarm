import React, { useEffect, useState } from "react";
import "./Welcome.css";
//import axios from 'axios'
import busTime from '../images/bus-time.jpg'
// import All from '../images/12.jpg'
const Welcome = () => {
  const [admin,setAdmin]=useState('')
  useEffect(()=>{
    fetch(`http://localhost:5000/student/${sessionStorage.getItem('email')}`).then(res=>{
      res.json()
      .then(data=>{
        setAdmin(data.role)
      })
    }).catch(err=>console.log(err))
  },[])
  const date = new Date().toLocaleTimeString();
  const dates = new Date();
  const p = dates.getHours();
  // console.log(p)
  let time = "close";
  if (p >= 10 && p < 17) {
    time = "open";
  }
  return (
    <div className="welcome">
      <div className="row pt-2">
        <div className="col-md-4 m-auto bg-light">
          <h5>WELCOME TO MBSTU Bus Time</h5>
          
          <p> Current-Time :{date}</p>
         {
          admin=="admin"?  <img className="img-fluid" src={busTime}/> :  <img className="img-fluid" src={busTime}/>
         }
          {/* <img className="img-fluid" src={busTime}/> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;

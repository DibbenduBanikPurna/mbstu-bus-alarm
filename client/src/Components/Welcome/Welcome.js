import React from "react";
import "./Welcome.css";
import busTime from '../images/bus-time.jpg'
const Welcome = () => {
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
         
          <img className="img-fluid" src={busTime}/>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

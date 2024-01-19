import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function StudentProfile() {
    const [studentdata,setStudentData]=useState({})
    const [toggle,setToggle]=useState(false)
     useEffect(()=>{
         fetch(`http://localhost:5000/student/${sessionStorage.getItem("email")}`)
         .then(res=>res.json())
         .then(data=>{
          
            setStudentData(data);
         })
     },[])
     
     const toggling=()=>{
      setToggle(current => !current);
      var sms;
      if(toggle===true)
      {
        sms="on"
      }
      else{
        sms="off"
      }
      const body={
        notification:sms
      }
      axios.post(`http://localhost:5000/student/${sessionStorage.getItem('email')}`,body)
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>console.log(err))
      
      console.log(sms)
     }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 m-auto'>
        <div className='card mt-5'>
          <h4>Name:{studentdata.name}</h4>
          <p>Dept:{studentdata.dept}</p>
          <p>ID:{studentdata.id}</p>
          <p>Email:{studentdata.email}</p>
          <p>Contct-No:{studentdata.phone}</p>
          <button onClick={toggling} className='btn btn-warning'>Notification {toggle ? 'on' : 'off'}</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

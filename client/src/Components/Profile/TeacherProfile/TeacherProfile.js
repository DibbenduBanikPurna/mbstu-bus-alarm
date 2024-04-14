import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function TeacherProfile() {
    const [teacherData,setTeacherData]=useState({})
    const [toggle,setToggle]=useState(false)
     useEffect(()=>{
         fetch(`http://localhost:5000/teacher/${sessionStorage.getItem("email")}`)
         .then(res=>res.json())
         .then(data=>{
            // console.log(data);
            setTeacherData(data);
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
      axios.post(`http://localhost:5000/teacher/${sessionStorage.getItem('email')}`,body)
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>console.log(err))
      
      console.log(sms)
     }
  return (
    <div className='container'>
    <div className='row p-2'>
      <div className='col-md-5 m-auto'>
      <div className='card p-5 mt-5'>
        <h5>Name:{teacherData.name}</h5>
        <p>Dept:{teacherData.dept}</p>
        
        <p>Email:{teacherData.email}</p>
        <p>Contct-No:{teacherData.phone}</p>
        <button onClick={toggling} className='btn btn-warning'>Notification {toggle ? 'on' : 'off'}</button>
      </div>
      </div>
    </div>
    
  </div>
  )
}

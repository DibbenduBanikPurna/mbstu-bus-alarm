import React, { useEffect, useState } from 'react'

import axios from 'axios'

    



function SendSms() {
    const [phones,setPhone]=useState([])
    const [teacherMail,setTeacherMail]=useState([])
    //console.log(phones)
    useEffect(()=>{
        fetch('http://localhost:5000/students')
        
        .then(res=>res.json())
        .then(data=>{
          
             setPhone(data)
             //console.log(data)
             
        })

    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/teachers')
        
        .then(res=>res.json())
        .then(data=>{
          
             setTeacherMail(data)
             //console.log(data)
             
        })
    },[])

   // console.log(phones.phone)
    const handleSms=()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( phones )
        };
        fetch('http://localhost:5000/sendmail', requestOptions)
            .then(response => alert(response.data))
            .then(data =>console.log(data));

            axios.post('http://localhost:5000/sendsms')
            .then(res=>alert(res.data))
            .catch(err=>console.log(err))
    }

    const handleTeacher=()=>{
const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( teacherMail )
        };
        fetch('http://localhost:5000/sendmail', requestOptions)
            .then(response => response.json())
            .then(data =>console.log(data));
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 m-auto mt-5'>
                <div className='card-body bg-light'>
                <button className='btn btn-success' onClick={handleSms}> Send-Notification Students</button>
                <br/>
                <button className='btn btn-primary mt-4' onClick={handleTeacher} > Send-Notification Teachers</button>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default SendSms
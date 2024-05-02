import React, { useEffect, useState } from 'react'
import './SendSms.css'
import axios from 'axios'
import busTime from '../images/bus-time.jpg'
    
import SpecialAlert from '../Special-Alert/Special-Alert'


function SendSms() {
    const [mess,setMessage]=useState({})
    const [phones,setPhone]=useState([])
    const [teacherMail,setTeacherMail]=useState([])
   
    const handleChange = (e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...mess };
        newData[field] = value
       
        setMessage(newData)
    }
   
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
             
             
        })
    },[])

   // console.log(phones.phone)
    const handleSms=()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {phone:phones,mess:mess} ),
            
            
        };
        fetch('http://localhost:5000/sendmail', requestOptions)
            .then(response => alert("Mail and message send successfully"))
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
    <div className='send'>
    <div className='container '>
        <div className='row'>
            <div className='col-md-6 mt-5 pt-5 '>
         
                <div className='card-body  mt-5 '>
                <input type="text" required name="bus" onChange={handleChange} class="form-control" placeholder="Enter Bus-Name"/>
                
                    
                <button className='btn btn-success form-control mt-2' onClick={handleSms}> Send-Notification Students</button>
         
               
                </div>
                <div className="mt-2">
                    <img className="img-fluid" src={busTime} alt=""/>
                </div>

                <SpecialAlert/>
            </div>
            <div className='col-md-6 mt-5 pt-5'>
            <div className='card-body bg-light mt-5'>
                  <button className='btn btn-primary form-control ' onClick={handleTeacher} > Send-Notification Teachers</button>
                  </div>
                  </div>
        </div>
       
        </div>
    </div>
  )
}

export default SendSms
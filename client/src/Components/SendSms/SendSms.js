import React, { useEffect, useState } from 'react'
import './SendSms.css'
import axios from 'axios'
import busTime from '../images/bus-time.jpg'
    
import SpecialAlert from '../Special-Alert/Special-Alert'


function SendSms() {
    const [mess,setMessage]=useState({})
    const [phones,setPhone]=useState([])
    const [teacherMail,setTeacherMail]=useState([])
    const [message, setTMessage] = useState({});

   
    const handleChange = (e)=>{
        // const field = e.target.name;
        // const value = e.target.value
        // const newData = { ...mess };
        // newData[field] = value
       
        // setMessage(newData)
        setMessage(e.target.value)
    }

    const handleChanges=(e)=>{
        setTMessage(e.target.value)
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
            body: JSON.stringify( {teacherMail:teacherMail, mess:message} )
        };
        fetch('http://localhost:5000/sendteacher', requestOptions)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                alert("Notification Send Successfully")
            });
           
    }
  return (
    <div className='send'>
    <div className='container '>
        <div className='row'>
            <div className='col-md-6 mt-5 pt-5 '>

                <div className='card-body  mt-5 '>
                    <h3>For Students</h3>
                {/* <input type="text" required name="bus" onChange={handleChange} class="form-control" placeholder="Enter Bus-Name"/> */}
                
                <select id="departments" name="bus" className="form-control" value={mess} onChange={handleChange}>
                <option value="">Select Bus</option>
                <option value="অগ্নিবীণা বাস (বাস নং ০০২),  গীতাঞ্জলি বাস (বাস নং ০০৪), কৃষ্ঙচুড়া (বাস নং ০০১)">অগ্নিবীণা বাস (বাস নং ০০২),  গীতাঞ্জলি বাস (বাস নং  ০০৪), কৃষ্ঙচুড়া (বাস নং ০০১)</option>
                <option value="অগ্নিবীণা বাস (বাস নং ০০২),  গীতাঞ্জলি বাস (বাস নং ০০৩) ">অগ্নিবীণা বাস (বাস নং ০০২),  গীতাঞ্জলি বাস (বাস নং ০০৪)</option>
                <option value="গীতাঞ্জলি বাস (বাস নং ০০৪), কৃষ্ঙচুড়া (বাস নং ০০১)">গীতাঞ্জলি বাস (বাস নং ০০৪), কৃষ্ঙচুড়া (বাস নং ০০১)</option>
                {/* <option value="0004,0005">0004,0005</option>
                <option value="0003,0004,0005,0009,0010">0003,0004,0005,0009,0010</option>
                <option value="0009,0010,5242">0009,0010,5242</option>
                <option value="0003,0004">0003,0004</option>
                <option value="0003,0005,0010">0003,0005,0010</option> */}
               
            </select>
                <button className='btn btn-success form-control mt-2' onClick={handleSms}> Send-Notification To Students</button>
         
               
                </div>
                <div className='card-body  mt-5'>
                    <h3>For Teachers</h3>
                    <select id="departments" name="bus" className="form-control" value={message} onChange={handleChanges}>
                <option value="">Select Bus</option>
                <option value="মিনি বাস ১(সিভিলিয়ান), মিনি বাস ১(কোস্টার), মাইক্রো বাস">মিনি বাস ১(সিভিলিয়ান), মিনি বাস ১(কোস্টার), মাইক্রো বাস</option>
                <option value="মিনি বাস ১(সিভিলিয়ান), মিনি বাস ১(কোস্টার)">মিনি বাস ১(সিভিলিয়ান), মিনি বাস ১(কোস্টার)</option>
                
                
               
            </select>
                  <button className='btn btn-primary form-control mt-2 ' onClick={handleTeacher} > Send-Notification To Teachers</button>
                  </div>
                {/* <div className="mt-2">
                    <img className="img-fluid" src={busTime} alt=""/>
                </div> */}

                <SpecialAlert/>
            </div>
            <div className='col-md-6 mt-5 pt-5'>
            {/* <div className='card-body bg-light mt-5'>
                  <button className='btn btn-primary form-control ' onClick={handleTeacher} > Send-Notification Teachers</button>
                  </div> */}
                   <div className="mt-2">
                    <img className="img-fluid" src={busTime} alt=""/>
                </div>
                  </div>
        </div>
       
        </div>
    </div>
  )
}

export default SendSms
import React, { useEffect, useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';
import './Complain.css'
function Complain() {
    const form = useRef();
    const [info,setInfo]=useState({})
    const [mess,setMess]=useState('')

    console.log(mess)


    const sendEmail = (e) => {
      e.preventDefault();

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {mess,})
    };
    fetch('http://localhost:5000/complain', requestOptions)
        .then(response => console.log(response.data))
        .then(data =>console.log(data));




  
      emailjs.sendForm('service_15eh65u', 'template_zpwjrwb', form.current, 'user_9Bd2QAgonb6gDRkHll4e9')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='com'>
    <div className='container  '>
      <div className="row">
        <div className="col-md-6 p-5 mt-5 m-auto">
          <div className='card'>
            <div className='card-body p-5 bg-light '>
            Any complain ???????
           <form ref={form} className='mt-2' onSubmit={sendEmail}>
      <label>Name</label>
      <br/>
      <input type="text"className='form-control' name="user_name" value={info.name} />
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" className='form-control' name="user_email" value={info.email} />
      <br/>
      <label>Message</label>
      <br/>
      <textarea className='form-control' onChange={(e)=>setMess(e.target.value)} name="message" />
      <br/>
      <input className='btn btn-warning form-control' type="submit" value="Send" />
    </form>
            </div>
          
          </div>
        
        </div>
      </div>
      
   
       
    </div>
    </div>
  )
}

export default Complain;
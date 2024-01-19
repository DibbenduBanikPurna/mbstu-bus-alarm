import React, { useEffect, useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';

function Complain() {
    const form = useRef();
    const [info,setInfo]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/student/ahosanulroki@gmail.com')
        .then(res=>res.json())
        .then(data=>{
            setInfo(data)
            console.log(data)
        })
    },[])

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_15eh65u', 'template_zpwjrwb', form.current, 'user_9Bd2QAgonb6gDRkHll4e9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4 mt-5 m-auto">
          <div className='card'>
            <div className='card-body bg-light'>
            Any complain
           <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br/>
      <input type="text" name="user_name" value={info.name} />
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" name="user_email" value={info.email} />
      <br/>
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" />
    </form>
            </div>
          
          </div>
        
        </div>
      </div>
      
   
       
    </div>
    
  )
}

export default Complain;
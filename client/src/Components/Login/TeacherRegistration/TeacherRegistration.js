import React, { useState } from 'react'
import useFirebase from '../../../Hooks/UseFirebase';
import { useHistory } from 'react-router-dom';

export default function TeacherRegistration() {
  const [newUser,setNewUser]=useState({category:"teacher",role:"", notification:"on"})
  const history=useHistory()
  const { signUp,   users } = useFirebase()
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...newUser };
        newData[field] = value
        setNewUser(newData)
        //console.log(loginData)

}

const is=()=>{
    
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( newUser )
};
fetch('http://localhost:5000/teacher', requestOptions)
    .then(response => response.json())
    .then(data =>console.log(data));

}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newUser)

        if (newUser.password !== newUser.re_password) {
            alert("Your password did not match!!")
            return;
        }
        
        signUp(newUser.name, newUser.email, newUser.password, history)
        if(users)
        {
          is();
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 m-auto'>
            <form onSubmit={handleSubmit}>
                <h3>Teacher Registration</h3>
                <div className="form-group">
    <label for="username">User Name</label>
    <input name="name" onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="user" placeholder="Enter Your Name"/>
  
  </div>
  <div className="form-group">
    <label for="username">DESIGNATION</label>
    <input name="designation" onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="user" placeholder="Enter Your Designation"/>
  
  </div>
  <div className="form-group">
    <label for="dept">Department</label>
    <input name="dept"  onChange={handleChange}  type="text" className="form-control" id="dept" aria-describedby="dept" placeholder="Enter Your Dept."/>
  
  </div>
  
  <div className="form-group">
    <label for="contact-no.">Contact No.</label>
    <input name="phone" onChange={handleChange} type="number" className="form-control" id="contact-no." aria-describedby="contact-no." placeholder="Enter Your Contact-No."/>
  
  </div>
  <div className="form-group">
    <label for="email">Email address</label>
    <input name="email" onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
  
  </div>
  <div className="form-group">
    <label for="Password">Password</label>
    <input name="password" onChange={handleChange} type="password" className="form-control" id="Password" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="re-Password">Re-Type-Password</label>
    <input name="re_password" onChange={handleChange} type="password" className="form-control" id="re-Password" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary form-control">Submit</button>
</form>
            </div>
        </div>
   
    </div>
  )
}

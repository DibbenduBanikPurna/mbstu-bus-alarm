import React, { useEffect, useState } from 'react'
import useFirebase from '../../../Hooks/UseFirebase'
import { useHistory } from 'react-router-dom';
function StudentRegister() {
    const [newUser,setNewUser]=useState({category:"student",role:"",notification:"on"})
    const { signUp,   users } = useFirebase()
    //console.log(users)
    const history=useHistory()
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...newUser };
        newData[field] = value
       
        setNewUser(newData)
        

    }
    const is=()=>{
    
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( newUser )
    };
    fetch('http://localhost:5000/student', requestOptions)
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
        <div className='row pt-5'>
            <div className='col-md-6 p-5 border m-auto bg-light'>
            <form onSubmit={handleSubmit}>
                <h6>Student Registration</h6>
                <div className="form-group">
    <label for="username">User Name</label>
    <input name="category" onChange={handleChange} value="student" disabled type="text" className="form-control" id="username" aria-describedby="user" placeholder="Enter Your Name"/>
  
  </div>
                <div className="form-group">
    <label for="username">User Name</label>
    <input name="name" onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="user" placeholder="Enter Your Name"/>
  
  </div>
  <div className="form-group">
    <label for="dept">Department</label>
    <input name="dept"  onChange={handleChange}  type="text" className="form-control" id="dept" aria-describedby="dept" placeholder="Enter Your Dept."/>
  
  </div>
  <div className="form-group">
    <label for="Id">ID</label>
    <input name="id" onChange={handleChange} type="text" className="form-control" id="id" aria-describedby="id" placeholder="Enter Your Id"/>
  
  </div>
  <div className="form-group">
    <label for="contact-no.">Contact No.</label>
    <input name="phone" onChange={handleChange} type="string" className="form-control" id="contact-no." aria-describedby="contact-no." placeholder="Enter Your Contact-No."/>
  
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
  
  <button type="submit" className="btn btn-primary form-control mt-4">Submit</button>
</form>
            </div>
        </div>
   
    </div>
  )
}

export default StudentRegister
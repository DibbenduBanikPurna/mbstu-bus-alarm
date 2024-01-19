import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, user, isLoading}=useFirebase()
    
    const location = useLocation()
    const history = useHistory()

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)


    }

    return (
        <div className='login'>
                
                <div className='text-center bg-light'><h4>Welcome To MBSTU BUS SCHEDULER</h4></div>
                <br/>
              <div className='row'>
              <div className='col-md-3 m-auto  bg-dark text-light   p-5'>
                    <p className='text-center mt-5'>Log-in</p>
                   
                    <form onSubmit={handleLogInSubmit}>
                    <label>Email</label>
                        <input name="email" type="email" className='form-control' onChange={handleChange}  />
                        <label>Password</label>
                        < input name="password" className='form-control' onChange={handleChange} id="standard-basic" type="password"  />
                        <br/>
                        <button className='form-control btn btn-success' type="submit" variant='contained'>LOGIN</button>
                            <br/>
                        <h6 className='mt-2'>NEW USER?PLEASE REGISTER As A <br/> <Link to="/studentregister" > Student </Link> OR <Link to="/teacherregister">Teacher</Link></h6> 
                       
                        <p>-----------?----------</p>

                        {/* <button className='btn btn-warning' onClick={()=>signInUsingGoogle(location,history)}>Login With Google</button> */}

                    </form>


                </div>

              </div>
            
           
        </div>
    );
};

export default Login;
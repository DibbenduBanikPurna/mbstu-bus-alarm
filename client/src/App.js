import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login/Login";



import Navbar from "./Components/Navbar/Navbar";
//import PrivateRoute from "./Components/Navbar/PrivateRoute/PrivateRoute";

import useFirebase from "./Hooks/UseFirebase";
import Welcome from "./Components/Welcome/Welcome";
import StudentRegister from "./Components/Login/StudentRegister/StudentRegister";


import TeacherRegistration from "./Components/Login/TeacherRegistration/TeacherRegistration";
//import StudentProfile from "./Components/Profile/StudentProfile/StudentProfile";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/StudentProfile/UpdateProfile";
import SendMail from "./Components/Complain/Complain";
import Complain from "./Components/Complain/Complain";
import SendSms from "./Components/SendSms/SendSms";
import Contact from "./Components/Contact/Contact";
import Students from "./Components/Students/Students";
import Teachers from "./Components/Teacher/Teachers";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";

function App() {
  const { users } = useFirebase();
  const [isAdmin,setIsAdmin]=useState('')
  useEffect(()=>{
    fetch(`http://localhost:5000/student/${sessionStorage.getItem('email')}`)
    .then(res=>res.json())
    .then(data=>{
      setIsAdmin(data.role)
      sessionStorage.setItem("role",data.role)
      //console.log(data)
    })
  })
 
  return (
    <div className="App">
       
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {" "}
            {users.email ? <Welcome /> : <Login />}{" "}
          </Route>
          {isAdmin==="admin" &&   <Route path="/send"> <SendSms/> </Route>}
          {isAdmin==="admin" &&   <Route path="/student"> <Students/> </Route>}
          {isAdmin==="admin" &&   <Route path="/teacher"> <Teachers/> </Route>}
          {isAdmin==="admin" &&   <Route path="/makeadmin"> <MakeAdmin/> </Route>}
          <Route path="/studentregister"> <StudentRegister/> </Route> 
          <Route path="/teacherregister"> <TeacherRegistration/> </Route>
          <Route path="/updateprofile"> <UpdateProfile/> </Route>
         {isAdmin==="" &&  <Route path="/profile"> <Profile/> </Route>}
         {isAdmin==="" && <Route path="/complain"> <Complain/> </Route> } 
         
           <Route path="/contact"> <Contact/> </Route>
           
      
        
         
         
         
         
         
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;

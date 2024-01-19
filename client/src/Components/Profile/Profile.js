import React, { useEffect, useState } from 'react'
import StudentProfile from './StudentProfile/StudentProfile'
//import useFirebase from '../../Hooks/UseFirebase'
import TeacherProfile from './TeacherProfile/TeacherProfile'
import './Profile.css'
export default function Profile() {
    //const {users}=useFirebase();
    const [cat,setCat]=useState({})
  //console.log(users.displayName);
    useEffect(()=>{
      fetch(`http://localhost:5000/student/${sessionStorage.getItem("email")}`)
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
            setCat(data.category);
         })
    })
  return (
    <div className="profile"> 
      { cat=="student" ? <StudentProfile/>:
          <TeacherProfile/>
  }
     </div>
  )
}

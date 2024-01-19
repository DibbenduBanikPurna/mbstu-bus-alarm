import React, { useEffect, useState } from 'react'
import useFirebase from '../../../Hooks/UseFirebase';

export default function UpdateProfile() {
    const [studentData,setStudentData]=useState()
    const {users}=useFirebase()
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/student/${users.email}`)
        .then(res=>res.json())
        .then(data=>setStudentData(data));
    },[])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder={studentData.name} />
            <br/>
            <input name='dept' type='text' placeholder={studentData.dept}/>
            <br/>
            <input name='emai' type="text" placeholder={studentData.email}/>
            <br/>
            <input type="number" placeholder={studentData.phone}/>
            <br/>
            <input type="submit" value="Update-Information"/>
        </form>
    </div>
  )
}

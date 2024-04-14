import React, { useState } from 'react'
import axios from 'axios'
function MakeAdmin() {
    const [studentAdmin,setStudentAdmin]=useState('')
    const [teacherAdmin,setTeacherAdmin]=useState({})
    console.log(studentAdmin)
    const handleSubmit=(e)=>{
        e.preventDefault();
        var s=studentAdmin
       
        const body={
            email:s
        }
        console.log(body)
        axios.post('http://localhost:5000/makeadmin/student',body).then(res=>{
            if(res.status===200)
            {
                alert("admin successfull ")
            }
            else{
                alert("Something wrong")
            }
        }).catch(err=>console.log(err))
    }

    const handleSubmit2=(e)=>{
        e.preventDefault()
        var s=teacherAdmin
       
        const body={
            email:s
        }
        console.log(body)
        axios.post('http://localhost:5000/makeadmin/teacher',body).then(res=>{
            if(res.status===200)
            {
                alert("admin successfull ")
            }
            else{
                alert("Something wrong")
            }

        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-4 mt-5 pt-2 m-auto bg-muted'>
                <h2>Make Admin General</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e)=>setStudentAdmin(e.target.value)} className='form-control' type="email" placeholder="Enter email"/>
                    <input className='form-control btn btn-primary mt-2' type="submit" value="submit"/>
                </form>
            </div>
            <div className='col-md-4 mt-5 pt-2 bg-muted'>
                <h2>Make Admin Teacher</h2>
                <form onSubmit={handleSubmit2}>
                    <input onChange={(e)=>setTeacherAdmin(e.target.value)}  className='form-control' type="email" placeholder="Enter email"/>
                    <input className="form-control btn btn-success mt-2" type="submit" value="submit"/>
                </form>
            </div>
        </div>
        </div>
  )
}

export default MakeAdmin
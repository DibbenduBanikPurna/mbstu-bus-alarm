import React, { useEffect, useState } from 'react'

import axios from 'axios'

    



function SpecialAlert() {
    //const [mess,setMessage]=useState({})
    const [specialStudent,setSpecialStudent]=useState([])
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

  
   
    // const handleChange = (e)=>{
    //     const field = e.target.name;
    //     const value = e.target.value
    //     const newData = { ...mess };
    //     newData[field] = value
       
    //     setMessage(newData)
    // }
   
    useEffect(()=>{
        fetch(`http://localhost:5000/specialstudent/${selectedDepartment}`)
        
        .then(res=>res.json())
        .then(data=>{
          
             //setPhone(data)
            
             setSpecialStudent(data)
             
        })

    },[selectedDepartment])

    console.log(specialStudent)
   
   
    const handleSubmit=()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( specialStudent)
        };
        fetch('http://localhost:5000/sendspecial', requestOptions)
            .then(response => alert("Notification Sends"))
            .then(data =>console.log(data));
    
    }

 
 

  
  return (
    <div className=''>
   
      
            
         
                <div className='card-body bg-light text-dark  mt-5 '>
                <label htmlFor="departments">Choose a department:</label>
            <select id="departments" className="form-control" name="departments" value={selectedDepartment} onChange={handleChange}>
                <option value="">Select Department</option>
                <option value="ict">ICT</option>
                <option value="CSE">CSE</option>
                <option value="TE">TE</option>
                <option value="M.E">M.E</option>
                <option value="FTNS">FTNS</option>
                <option value="ESRM">ESRM</option>
                <option value="CPS">CPS</option>
                <option value="BGE">BGE</option>
                <option value="BPHARM">BPHARM</option>
                <option value="BMB">BMB</option>
                <option value="PHYSICS">PHYSICS</option>
                <option value="CHEMISTRY">CHEMISTRY</option>
                <option value="MATH">MATH</option>
                <option value="STAT">STAT</option>
                <option value="ENGLISH">ENGLISH</option>
                <option value="ECONOMICS">ECONOMICS</option>
                <option value="MANAGEMENT">MANAGEMENT</option>
                <option value="ACCOUNTING">ACCOUNTING</option>
                <option value="BBA">BBA</option>
            </select>
            <p> {selectedDepartment}</p>
            <button className='btn btn-success' onClick={handleSubmit} >Send-Notification</button>
                
                    
                
         
               
                
             

           

       
        </div>
    </div>
  )
}

export default SpecialAlert
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
//import { Link } from 'react-router-dom';
const Teachers = () => {
    const [teacher,setTeacher]=useState([])
    const [search,setSearch]=useState('')
    const [filterData,setFilter]=useState([])
    //console.log(filterData)

    //const [recieved,setRecived]=useState('')

    
    

    useEffect(()=>{
        fetch('http://localhost:5000/teacher')
        .then(res=>res.json())
        .then(data=>{
            setTeacher(data);
            setFilter(data)
           // console.log(data);
        })

    },[])


     


    const columns=[
        {
            name: "NAME",
            selector:(row)=>row.name

        },
        {
            name: "DESIGNATION",
            selector:(row)=>row.designation

        },
        {
            name:"Dept",
            selector:(row)=>row.dept,

            

        },
       
        {
            name:"EMAIL",
            selector:(row)=>row.email,

        },
      {
        name:"phone",
         selector:(row)=>row.phone,
      },
      
    //   {
    //     name:"action",
    //     selector:(row)=> <Link to={`/recicve/${row._id}`}>   <button disabled={row.recieve}  className={`${row.recieve?'btn btn-primary':'btn btn-danger'}`}>{row.recieve?'recieved':'pending'}</button></Link>
    //   },
    //   {
    //     name:"recieve date",
    //     selector:(row)=>row.recieve

    //   },


     

    ]

   
    useEffect(()=>{
      const result=teacher.filter((country)=>{
          return     country.name
           .toLowerCase().match(search.toLocaleLowerCase())
      })
      setFilter(result)
  },[search])


    return (
            

        
        
// /> 

     <DataTable 
    columns={columns} 
    data={filterData} 
    pagination 
   fixedHeader 
   selectableRows 
   selectableRowsHighlight 
   highlightOnHover  
actions={<button className='btn btn-sm btn-info'>Search</button>}  
     subHeader 
    subHeaderComponent={
    <input type="text" 
     placeholder='Search-here' 
     className='form-control w-25'
     value={search} onChange={(e)=>setSearch(e.target.value)}/>

}
  


/>
    );
};

export default Teachers;
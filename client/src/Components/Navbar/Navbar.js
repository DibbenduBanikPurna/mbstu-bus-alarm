import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/UseFirebase";

const Navbar = () => {
  const { users, logOut } = useFirebase();
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
 
  //console.log(users)
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <span className="m-5">
          <img
            style={{ height: "45px" }}
            src="https://mbstu.ac.bd/assets/images/logo.png"
            alt=""
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav m-auto">
          <Link className="nav-item nav-link active" to="/">
            Home{" "}
          </Link>
          {users?.email && isAdmin===""  && (
            <Link className="nav-item nav-link" to="/profile">
              Profile
            </Link>
          )}
          {users?.email && isAdmin===""  && (
            <Link className="nav-item nav-link" to="/complain">
              Complain
            </Link>
          )}
          
          {users?.email && isAdmin==="admin" && (
            <Link className="nav-item nav-link" to="/send">
              Send-alert
            </Link>
          )}

           {users?.email && isAdmin==="admin" && (
            <Link className="nav-item nav-link" to="/student">
              Student
            </Link>
          )}
          {users?.email && isAdmin==="admin"  && (
            <Link className="nav-item nav-link" to="/teacher">
              Teacher
            </Link>
          )}
          {users?.email && isAdmin==="admin"  && (
            <Link className="nav-item nav-link" to="/makeadmin">
              Make-Admin
            </Link>
          )}
          {users.email ? (
            <Link className="nav-item nav-link" to="/">
              {" "}
              <span onClick={logOut}>Logout</span>{" "}
            </Link>
          ) : (
            ""
          )}
          {users.email ? (
            <span className="nav-item nav-link"> {users.displayName} </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

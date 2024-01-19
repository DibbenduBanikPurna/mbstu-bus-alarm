import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useFirebase from '../../../Hooks/UseFirebase';



const PrivateRoute = ({ children, ...rest }) => {
    const [user,setUser]=useState('')
    const {users}=useFirebase()
    console.log(users)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/user')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setUser(data);
    //       //  console.log(data)
    //     })
    // })
   
    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email  ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
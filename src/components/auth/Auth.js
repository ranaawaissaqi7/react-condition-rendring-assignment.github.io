import React, { useState } from 'react'
import "./Auth.css"
 function Auth() {
    let login=null;
    // onLoginHandler
    const onLoginHandler=()=>{
        login=(true);
        console.log("login => ",login)
    }

    //onLogOutHandler
    const onLogOutHandler=()=>{
        login=(false)
        console.log("login => ",login)
    }
  return (
    <>
    <h1>Auth Component</h1>
    <button onClick={onLoginHandler}> Login </button> 
    <button className='button' onClick={onLogOutHandler}>Logout</button>
    {
        login ?<> <h2>User is Login</h2> </>:<> <h2>User is LogOut</h2> </>
    }
    <hr />
    </>
    
  )
}

export default Auth;

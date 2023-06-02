import React from 'react'
import "./ProgressBar.css";
 function ProgressBar() {
    const value=50;
  return (
    <>
    
    <h1>Progress Bar Component</h1>
    <div className='progress-bar'>
    <div style={{height:"24px",width:`${value}%`,backgroundColor:"green"}}>
        <h4>{value}%</h4>
    </div>
    </div>
    <hr />
    </>
  )
}

export default ProgressBar;

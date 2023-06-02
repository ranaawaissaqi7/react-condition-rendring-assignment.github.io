import React from 'react'

 function AverageNumber() {
    let number=null;
    let total=null;
    let calculateAverage=null;

    const onSubmitHandler=()=>{
      number=document.getElementById("number-input").value;
      console.log("number => ",number)
      total=document.getElementById("total-input").value;
      console.log("total => ",total)

      calculateAverage=(number/total)*100
      console.log("calculateAverage => ",calculateAverage)
    }
  return (
    <>
    <h1>Average Number Component</h1>
    <input type="number" placeholder='Enter Number' id="number-input" /> <br />
    <input type="number" placeholder='Enter total' id="total-input" /> <br />
    <button onClick={onSubmitHandler}>Submit</button>

    <h3>{calculateAverage}</h3>
     <br />
     <hr />
    </>
  )
}
export default AverageNumber;

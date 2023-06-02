import React from 'react'

 function Form() {


  let quantity=null;
  let totalPrice=null;
  let result=null;

  const onSubmitHandler=()=>{
    quantity=document.getElementById("quantity-input").value;
    console.log("quantity => ",quantity)
    totalPrice=document.getElementById("totalPrice-input").value;
    console.log("tottalPrice => ",totalPrice)

    result=(quantity*totalPrice);
    console.log("result => ",result)
  }
  return (
    <>
    <h1>Form Component </h1>
    <input type="number" placeholder='Enter Quantity'  id="quantity-input" /> <br />
    <input type="number" placeholder='Enter total Price'  id="totalPrice-input" /> <br />
    <button onClick={onSubmitHandler}>Submit</button>
    {<h2> {result}</h2> }
    <hr />
    </>
  )
}
export default Form;
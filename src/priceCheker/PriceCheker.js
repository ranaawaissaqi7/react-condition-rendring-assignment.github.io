import React from 'react'

 function PriceCheker() {
    const price=200;
    const threshold=100;
  return (
    <>
    <h1>Price Cheker Component</h1>
    <h3>Product Price: ${price}</h3>
      {price < threshold && <h4>Discount Applied!</h4>}
    </>
  )
}
export default PriceCheker;

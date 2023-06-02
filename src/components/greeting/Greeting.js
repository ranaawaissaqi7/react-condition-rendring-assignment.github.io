import React from 'react'
const nowDate=new Date();

const hours=nowDate.getHours()

console.log("hours => ",hours)

function Greeting() {
  return (
    <>
    <h1>Greeting Component</h1>
     
     { hours>1 && hours<12  ? <> <h2>Good Morning</h2> </>:<>  </> }

    { hours>12 && hours<17 ?<><h2>Good After Noon</h2></> : <>  </> }
    { hours>17 && hours<12 ?<><h2>Good Evening</h2></> : <>  </> }

    <hr />
    </>
  )
}
 export default Greeting;
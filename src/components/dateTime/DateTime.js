import "./DateTime.css";

function DateTime() {
const nowDate=new Date();
//getMonth
const month=nowDate.getMonth()
console.log("m ",month)
//getDay
const day=nowDate.getDay()
console.log("d ",day)
// getDate
const date=nowDate.getDate()
console.log("dte ",date)
//getMinutes
const year=nowDate.getFullYear()
console.log("M ",year)
//getTime
const hours=nowDate.getHours()
console.log("H ",hours)
//getMinutes
const minutes=nowDate.getMinutes()
console.log("M ",minutes)
//getMinutes
const seconed=nowDate.getSeconds()
console.log("M ",seconed)
    return (
        <>
        <h1>Date & Time Component</h1>
        <h3>
          <span className="date"> Date: {month+1}/{date}/{year} </span> | <span className="time"> Time :{hours}:{minutes}:{seconed}</span>
        </h3>
        <hr />
        </>
    )
    
}
export default DateTime;
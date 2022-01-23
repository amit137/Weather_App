import React,{ useState } from "react";



const App=()=> {

  
let Time=new Date().toLocaleTimeString();

const [currentTime,setTime]=useState(Time)

const timeFun=()=>{
  let newTime=new Date().toLocaleTimeString()
  setTime(newTime)
}

setInterval(timeFun,1000)


  return (
    <div className="App">
     <p>Current Time is : {currentTime}</p>
    
    </div>
  );
}

export default App;

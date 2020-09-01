import React, { useState, useEffect } from "react";
import "./App.css";
import Signal from "./Signal/Signal";

function App() {
  //State data
  const signalState = [
    { signalState: "Green", time: 6000 },
    { signalState: "Orange", time: 2000 },
    { signalState: "Red", time: 500 },
  ];
  const [signalStatus, setsignalStatus] = useState("Green");
  const [activeSignal, setactiveSignal] = useState("signal1");
  useEffect(()=>{
    setSingalState();
  },[activeSignal]);

  const setSingalState = () =>{
    //Show Green signal
    setTimeout(()=>{
      setsignalStatus(signalState[1].signalState);
      //Show Orange timeout
      setTimeout(()=>{
        setsignalStatus(signalState[2].signalState);
        if(activeSignal === "signal1"){
          setactiveSignal("signal2");
        }else if(activeSignal === "signal2"){
          setactiveSignal("signal3");
        }else if(activeSignal === "signal3"){
          setactiveSignal("signal1");
        }
        //Show Red timeout
        setTimeout(()=>{
          setsignalStatus(signalState[0].signalState);
        },500);
      }, signalState[1].time);
    }, signalState[0].time);
  }

  return (
    <div className="App">
      <h1>Traffic signal System</h1>
      <Signal signalStatus={activeSignal==="signal1"?signalStatus:'Red'} signalId={"signal 1"} />
      <Signal signalStatus={activeSignal==="signal2"?signalStatus:'Red'} signalId={"signal 2"}/>
      <Signal signalStatus={activeSignal==="signal3"?signalStatus:'Red'} signalId={"signal 3"}/>
      <p>Signal Timing: Green: 6 seconds, Orange: 2 seconds. <br /> Once Signal turn to "Red" other signal become "Green". Signals are interdependent on other component state. </p>
    </div>
  );
}

export default App;
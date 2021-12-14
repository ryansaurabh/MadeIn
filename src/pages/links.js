import React from "react";
import TaskFive from "./taskFive";

import {useNavigate} from "react-router-dom"

export default function Links() {
    const navigate=useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems:"center",
        backgroundColor: "darkviolet",
      }}
    >
      <div
        style={{
          border: "3px solid darkslategray",
          backgroundColor: "darkgray",
          height: "40px",
          width: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={()=>{navigate("/taskone")}}
      >
        Taskone
      </div>
      <div
        style={{
          border: "3px solid darkslategray",
          backgroundColor: "darkgray",
          height: "40px",
          width: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={()=>{navigate("/tasktwo")}}
      >
        Tasktwo
      </div>
      <div
        style={{
          border: "3px solid darkslategray",
          backgroundColor: "darkgray",
          height: "40px",
          width: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={()=>{navigate("/taskthree")}}
      >
        Taskthree
      </div>
      <div
        style={{
          border: "3px solid darkslategray",
          backgroundColor: "darkgray",
          height: "40px",
          width: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={()=>{navigate("/taskfour")}}
      >
        Taskfour
      </div>
    </div>
  );
}

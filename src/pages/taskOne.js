import React, { useState } from "react";
import './taskOne.css';
import Box from './components/Box';

export default function TaskOne() {
  const [color,setColor]=useState("#eeeeee");
  const colorSetter=(color1)=>{
setColor(color1)
  }

  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
      }}
    >
      <div style={{ height: "100vh", width: "33vw", backgroundColor: "black", display:'flex', justifyContent:'center', alignItems:'center' }}>
        <div >
        <Box colorSetter={(color1)=>colorSetter(color1)}  color={'#FA7171'} />
        <Box  colorSetter={(color1)=>colorSetter(color1)}  color={'#B2DB70'} />
        <Box  colorSetter={(color1)=>colorSetter(color1)}  color={'#706EE9'} />
        </div>
      </div>

      <div style={{ height: "100vh", width: "33vw", backgroundColor: "black", display:'flex', justifyContent:'center', alignItems:'center' }}>
      <div>
      <Box  colorSetter={(color1)=>colorSetter(color1)}  color={'#BACA00'} />
      <Box  colorSetter={(color1)=>colorSetter(color1)}  color={'#A5001E'} /> 
      <Box  colorSetter={(color1)=>colorSetter(color1)}  color={'#A5001E'} />
        </div>
        {" "}
      </div>
    </div>
  );
}

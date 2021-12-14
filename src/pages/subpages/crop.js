import React from "react";
import Laptop from "../images/laptop.jpg";
export default function Crop({row, header, subtitle, image}) {
  return (
    <div style={{marginLeft:'20px'}}>
      <div>
        <h1>{header}</h1>
      </div>

      <div style={{ height: "60vh", display: "flex", alignItems: "centers",flexDirection: row?"":'row-reverse' }}>
        <div>
          <img src={image} style={{ height: "380px" }} />
       
        </div>
        <div style={{marginLeft:'70px'}}>
        <h2 style={{fontSize:'50px'}}>{header}</h2>
        <h4 style={{fontSize:'20px', fontWeight:"100", color:"gray"}}>{subtitle}</h4>
        <div style={{height:'50px', width:'180px',backgroundColor:'#C4C4C4', justifyContent:'center', display:'flex',alignItems:'center',borderRadius:'7px'}}>Learn More</div>
        </div>
      </div>
    </div>
  );
}

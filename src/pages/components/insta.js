import React from "react";

export default function Insta({image}) {
  return (
    <div  style={{ height: "60vh",width:'25vw',margin:'20px'}}
 
    >
      <img src={image} style={{ height: "40vh",width:'25vw', margin:"20px" }} />
    </div>
  );
}

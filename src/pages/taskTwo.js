import React, { useState } from "react";
import Cap from "./images/cap.png";
import Cap2 from "./images/cap2.png";
import Cap3 from "./images/cap3.png";
import Cap4 from "./images/cap4.png";
import Cap5 from "./images/cap5.png";

export default function TaskTwo() {
  const [cap, setcap] = useState(Cap);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <img src={cap} style={{ height: "600px" }} />
        </div>
        <div style={{marginLeft:"30px"}}>
          <h1
            style={{
              fontWeight: "500",
       
              fontSize: "26px",
              marginbottom: "0",
              padding: "0",
            }}
          >
            {" "}
            Casual tennis Cap{" "}
          </h1>
          <p
            style={{
       
              fontSize: "20px",
              fontWeight: "500",
              padding: "0",
              marginTop: "0",
            }}
          >
            {" "}
            (Black){" "}
          </p>
        </div>
      </div>

      <div>
        <img
          onClick={() => {
            setcap(Cap);
          }}
          src={Cap}
          style={{ height: "100px", cursor: "pointer" }}
        />
        <img
          onClick={() => {
            setcap(Cap2);
          }}
          src={Cap2}
          style={{ height: "100px", cursor: "pointer" }}
        />
        <img
          onClick={() => {
            setcap(Cap3);
          }}
          src={Cap3}
          style={{ height: "100px", cursor: "pointer" }}
        />
        <img
          onClick={() => {
            setcap(Cap4);
          }}
          src={Cap4}
          style={{ height: "100px", cursor: "pointer" }}
        />
        <img
          onClick={() => {
            setcap(Cap5);
          }}
          src={Cap5}
          style={{ height: "100px", cursor: "pointer" }}
        />
      </div>
    </>
  );
}

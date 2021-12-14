import React, { useState } from "react";

export default function TaskThree() {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          justifyContent: "center",
          height: "50px",
          width: "100px",
          backgroundColor: "green",
          display: "flex",
        }}
      >
        <span
          style={{
            padding: "10px",
            backgroundColor: "blue",
            border: "20px solid black",
          }}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </span>
        {counter}
        <span
          style={{
            padding: "10px",
            backgroundColor: "blue",
            border: "20px solid black",
          }}
          onClick={() => setCounter(counter - 1)}
        >
          -
        </span>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function TaskFive() {
  const [counter, setcounter] = useState(0);
  setTimeout(() => {
    setcounter(counter + 1);
  }, 1000);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "100px",
        fontWeight: "400",
      }}
    >
      {counter}
    </div>
  )
}

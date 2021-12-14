import React from "react";

export default function Landing() {
  return (
    <>
      <div
        style={{ backgroundColor: "#C4C4C4", height: "10vh", display: "flex",justifyContent:'space-between',alignItems:'center' }}
      >
        <div>LOGO</div>
        <div style={{display:'flex'}}>
            <div>SIGNUP</div>
            <div>LOGIN</div>
        </div>
        
      </div>
      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              MY NEW WEBPAGE{" "}
            </h2>
            <h4>
              Beeam helps user create and test better design to start and finish
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                borderRadius: "0px",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              {" "}
              Try beam for free{" "}
            </h3>
            <h3 style={{ height: "5px" }}>
              {" "}
              <img src={"../images/playbutton.jpg"} /> See how it works{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

import { MDBBtn, MDBSwitch } from "mdb-react-ui-kit";
import { useState } from "react";
import "./noti.css";

export default function Notifications(props) {

    const properties = Object.keys(props).length !== 0 ? props : null;
    console.log(properties);

    return (
    <section id="noti">
      <h4
        style={{
          textAlign: "left",
          marginBottom: "1em",
          color: "black",
          fontWeight: "bold",
        }}
      >
        {" "}
        {props.h}{" "}
      </h4>

      {/* <div>
        {props.options.map((opt, index) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p> {opt} </p> 
              <MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
            </div>
          );
        })}
      </div> */}

    </section>
  );
}

{
  /* <div style={{ display: "flex", justifyContent: "space-between" }}>
<p> Product emails </p>
<MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
</div>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<p> Marketing emails </p>
<MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
</div>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<p> Promotion emails</p>
<MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
</div>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<p> The Daily Drop emails </p>
<MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
</div> */
}

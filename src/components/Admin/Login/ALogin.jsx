import React from "react";
import {
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Login.css";

export default function ALogin() {
  return (
    <section id="login-form">
      <form>
        <h3 style={{ marginBottom: "5%", fontWeight: "bold" }}> Login </h3>
        <h5>
          {" "}
          Welcome back, Chief <here className=""></here>{" "}
        </h5>
        <MDBInput
          className="mb-4"
          type="email"
          id="form2Example1"
          label="Email address"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form2Example2"
          label="Password"
        />

        <MDBBtn type="submit" className="mb-4" block color="success" style={{ marginTop: '5%' }}>
          Sign in
        </MDBBtn>
      </form>

    </section>
  );
}

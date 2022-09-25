import React from "react";
import { MDBInput, MDBBtn, MDBIcon, MDBNavbarBrand } from "mdb-react-ui-kit";
import "./Login.css";
import axios from "axios";
import qs from "qs";
import { useState } from "react";
import { useEffect } from "react";
// import Swal from "sweetalert2";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "./Frame 7.png";

export default function Login() {
  const [email, setMail] = useState(null);
  const [password, setPass] = useState(null);
  const [loader, isLoader] = useState(false);
  const [error, setError] = useState(null);
  const [btnDisabled, isDisabled] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  function loginUser(e) {
    isLoader(true);
    isDisabled(true);
    e.preventDefault();
    axios
      .post(
        "https://budgetfare.herokuapp.com/user/login",
        qs.stringify({
          email: email,
          password: password,
        })
      )
      .then(async (res) => {
        // console.log(email, password)
        // console.log(res);

        if (res.data.err) {
          setError(res.data.err);
          isDisabled(false);
          isLoader(false);
        }
        isLoader(false);
        window.sessionStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        if (err) {
          setError("Invalid Credentials or Check Network Connectivity!");
          isDisabled(false);
          isLoader(false);
        }
        console.log(err);
        console.log(email, password);
      });
  }
  // console.log(window.sessionStorage);

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      navigate("/~");
    }
  });

  return (
    <section id="login-sec">
      
      <div className="connect-nav">
        <div className="foo-header">
          <MDBNavbarBrand
            href="#"
            style={{
              color: "black",
              fontFamily: "Mackinac",
              fontSize: "1.5em",
            }}
          >
            <img src={logo} alt="" style={{ width: "2rem" }} />
            budjetfare{" "}
          </MDBNavbarBrand>
        </div>

        <div>
         <a href="/">
         <MDBBtn outline 
              style={{
                borderColor:'#53b57d',
                padding:'2em', 
                color:'#53b57d', 
                textTransform:'capitalize', 
                fontFamily:'poppins', 
                fontWeight:'bold' 
                }} > 
              Back to Home </MDBBtn>
         </a>
        </div>
      </div>

      <div id="inner-login">
        <form onSubmit={loginUser}>
          <h3
            style={{
              marginBottom: "5%",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Mackinac",
            }}
          >
            {" "}
            Login{" "}
          </h3>
          <h5 style={{ fontFamily: "poppins", fontSize:'1em' }}>
            {" "}
            Welcome back to BudgetFare! <here className=""></here>{" "}
          </h5>
          <p style={{ color: "red", fontWeight: "bold" }}>
            {location.state ? location.state.msg : error ? error : null}{" "}
          </p>
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
            value={email}
            style={{ padding: "4%" }}
            onChange={(e) => setMail(e.target.value)}
          />

          <div className="text-right" style={{ textAlign: "right" }}>
            <a
              href="/"
              style={{
                color: "#2c625c",
                fontFamily: "poppins",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              Forgot Password?
            </a>
          </div>

          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            style={{ padding: "4%" }}
          />

          <MDBBtn
            type="submit"
            className="mb-4"
            block
            style={{
              marginTop: "5%",
              background: "#1f413d",
              borderRadius: "9px",
              padding: "4%",
              textTransform: "capitalize",
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
            disabled={btnDisabled}
          >
            {loader ? (
              <MDBIcon fas icon="spinner" className="login-spinner" />
            ) : (
              "Login"
            )}
          </MDBBtn>
        </form>

        <div className="text-center" style={{ fontFamily:'poppins' }}>
          <p>
          Don't have a BudgetFare account yet?{" "}
            <a href="/" style={{ color: "#2D635D", fontWeight:'bold', fontFamily:'Mackinac' }}>
              Register here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

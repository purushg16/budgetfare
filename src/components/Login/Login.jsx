import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Login.css";
import axios from "axios";
import qs from "qs";
import { useState } from "react";
import { useEffect } from "react";
// import Swal from "sweetalert2";
import { useNavigate, useLocation, Navigate} from "react-router-dom";
import Swal from "sweetalert2";


export default function Login() {

  const [email, setMail] = useState(null)
  const [password, setPass] = useState(null)
  const [loader, isLoader] = useState(false)
  const [error, setError] = useState(null)
  const [btnDisabled, isDisabled] = useState(false)
  const location = useLocation();

  const navigate = useNavigate();

  function loginUser(e){
    isLoader(true)
    isDisabled(true)
    e.preventDefault();
    axios.post('https://budgetfare.herokuapp.com/user/login',qs.stringify({
       email: email, password: password
    }))
    .then(async (res) => {
      // console.log(email, password)
      // console.log(res);

    if (res.data.err) {setError(res.data.err); isDisabled(false); isLoader(false) };
      isLoader(false)
      window.sessionStorage.setItem('token', res.data.token);
      window.location.reload();
    })
    .catch((err) => {

      if (err) {setError('Invalid Credentials or Check Network Connectivity!') ; isDisabled(false); isLoader(false) };
      console.log(err);
      console.log(email, password)
    })
  }
  // console.log(window.sessionStorage);

  useEffect(()=>{
    if(window.sessionStorage.getItem("token")) {
      navigate('/~')
    }
  })

  return (
    <section id="login-form">
      <form onSubmit={loginUser}>
        <h3 style={{ marginBottom: "5%", fontWeight: "bold" }}> Login </h3>
        <h5>
          {" "}
          Welcome back <here className=""></here>{" "}
        </h5>
        <p style={{ color:'red', fontWeight: 'bold' }}>{ location.state ? location.state.msg : error ? error : null } </p>
        <MDBInput
          className="mb-4"
          type="email"
          id="form2Example1"
          label="Email address"
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form2Example2"
          label="Password"
          value={password}
          onChange={(e)=> setPass(e.target.value)}
        />

        <a href="/" style={{color: 'green'}} >Forgot password?</a>

        <MDBBtn type="submit" className="mb-4" block color="success" style={{ marginTop: '5%' }} disabled={btnDisabled}>
          {  loader ?  <MDBIcon fas icon="spinner" className="login-spinner" /> :  'Sign in'   }
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="/"  style={{ color: 'black' }}>Register</a>
          </p>
        </div>
      </form>

    </section>
  );
}

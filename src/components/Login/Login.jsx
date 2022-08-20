import React from "react";
import {
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Login.css";
import axios from "axios";
import qs from "qs";
import { useState } from "react";
import { useEffect } from "react";
// import Swal from "sweetalert2";
import { useNavigate, useLocation, Navigate} from "react-router-dom";


export default function Login() {

  const [email, setMail] = useState(null)
  const [password, setPass] = useState(null)

  const navigate = useNavigate();


  function loginUser(e){
    e.preventDefault();
    axios.post('https://budgetfare.herokuapp.com/user/login',qs.stringify({
       email: email, password: password
    }))
    .then(async (res) => {
      console.log(email, password)
      console.log(res);
      window.sessionStorage.setItem('token', res.data.token);
      window.location.reload();
    })
    .catch((err) => {
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

        <MDBBtn type="submit" className="mb-4" block color="success" style={{ marginTop: '5%' }}>
          Sign in
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

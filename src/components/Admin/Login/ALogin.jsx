import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Login.css";
import axios from "axios";
import qs from "qs";
import { useNavigate} from "react-router-dom";

export default function ALogin() {

  const [username, setUsername] = useState(null)
  const [password, setPass] = useState(null)
  const [warn, setWarn] = useState('none')
  const navigate = useNavigate();

  function loginAdmin(e){
    e.preventDefault();

    if((username==='admin') && (password==='admin')){
      setWarn('none')
      axios.post('https://budgetfare.herokuapp.com/admin/login',qs.stringify({
        email: username, password: password
     }))
     .then(async (res) => {
       console.log(res);
       window.sessionStorage.setItem('aToken', res.data.token);
       window.location.reload();
     })
     .catch((err) => {
       console.log(err);
       window.sessionStorage.setItem('e', err);
     })

    }
    else{
      setWarn('block')
    }
  }

  useEffect(()=>{
    if(window.sessionStorage.getItem("aToken")) {
      navigate('/dashboard');
    }
  })


  return (
    <section id="login-form">
      <form onSubmit={loginAdmin}>
        <h3 style={{ marginBottom: "5%", fontWeight: "bold" }}> Login </h3>
        <h5>
          {" "}
          Welcome back, Chief <here className=""></here>{" "}
        </h5>

        <h6 style={{color:'red', display:warn}} id='na'> Not Authorized! </h6>
        <MDBInput
          className="mb-4"
          type="text"
          id="form2Example1"
          label="Username"
          value={username}
          onChange={(e)=> setUsername(e.target.value) }
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form2Example2"
          label="Password"
          value={password}
          onChange={(e)=> setPass(e.target.value) }
        />

        <MDBBtn className="mb-4" block color="success" style={{ marginTop: '5%' }} type='submit'>
          Sign in
        </MDBBtn>
      </form>

    </section>
  );
}

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Rform.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  // MDBCard,
  // MDBCardBody,
  // MDBCardTitle,
  // MDBCardText,
  // MDBBtnGroup,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import Swal from "sweetalert2";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

// const options = [
//   { value: "Albenia", label: "Albenia Airport, Washington D.C, America" },
//   { value: "Ohio", label: "Ohio Airport, Washington D.C, America" },
//   { value: "Alaska", label: "Alaska Airport, Washington D.C, America" },
//   { value: "Indiana", label: "Indiana Airport, Washington D.C, America" },
//   { value: "NewYork", label: "NewYork Airport, Washington D.C, America" },
//   { value: "Apple", label: "Apple Airport, Washington D.C, America" },
//   { value: "Samsung", label: "Samsung Airport, Washington D.C, America" },
//   { value: "Hawkings", label: "Hawkings Airport, Washington D.C, America" },
//   { value: "Virginia", label: "Virginia Airport, Washington D.C, America" },
// ];

export default function RegisterForm(props) {
  const [query, setQuery] = useState(null);
  // const [home, setHome] = useState("true");
  // const [ports, fetchPorts] = useState([]);

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();
  const [password, setPassword] = useState();
  const [showOTP, canShowOTP] = useState(true);
  const [hAirportId, setHAirportId] = useState(null);

  const [error, setError] = useState("");
  const [submitDisabled, setSubmit] = useState(true);
  const navigate = useNavigate();
  const [loader, isLoader] = useState(false);

  var options = sessionStorage.getItem('airports') ? JSON.parse(sessionStorage.getItem("airports")) : [];
  console.log(options);

  var airport = []

  options.forEach((element, i) => {
    const airportData = { 'value': element._id, 'label': element.name }
    airport.push(airportData)
    // console.log(i);
    // console.log(element);
  });

  console.log(airport);

  // function handleCity(e) {
  //   if (e !== null) {
  //     setQuery(e.label);
  //     console.log(query);
  //     setHome(e.value);
  //   }
  // }

  function handleOTP(e) {
    console.log(email);

    // if (query === null) {
    //   e.preventDefault();
    //   document.querySelector("#home-w-p").style.display = "block";
    // } else {
    //   console.log(email);

    if (query === null) {

    axios
      .post(
        "https://budgetfare.herokuapp.com/user/getOtp",
        qs.stringify({
          email: email,
        })
      )
      .then(async (res) => {
        canShowOTP(false);
        console.log(res);
        setFname("");
        setLname("");
        setPassword("");
      })
      .catch((e) => {
        console.log(e);
        window.sessionStorage.setItem("err", e.message);
        if (e.response.data) Swal.fire(`${e.response.data}`, "", "info");
        isLoader(false);
        setFname("");
        setLname("");
        setPassword("");
      });
    }
  }

  function submitForm(e) {
    isLoader(true);
    // isDisabled(true)
    e.preventDefault();

    if (otp) {
      // console.log(otp, fname, lname, email, password);
      axios
        .post(
          "https://budgetfare.herokuapp.com/user/register",
          qs.stringify({
            otp: otp,
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            airportId: hAirportId.value,
            // home
          })
        )
        .then(async (res) => {
          if (res.data.err) console.log(res.data.err);
          // console.log(res.data.token);
          window.sessionStorage.setItem("token", res.data.token);
          navigate("/~", { replace: true });
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
          if(err) { setError(err.response.data.err); isLoader(false); setSubmit(false); console.log(error); }
          // console.log(otp, fname, lname, email, password);
        });
    }
  }

  useEffect(() => {

    if(hAirportId !== null) setQuery(hAirportId.label)

    // console.log(options);

    if (query !== null) {
      document.querySelector(".homeland-select-register").style.display =
        "none";
      document.querySelector(".homeland-card").style.display = "block";
      document.querySelector("#home-w-p").style.display = "none";
    } else {
      document.querySelector(".homeland-select-register").style.display =
        "block";
      document.querySelector(".homeland-card").style.display = "none";
    }

    // if (otp === undefined)  document.querySelector("#second-form").style.pointerEvents = 'none';
    // else document.querySelector("#second-form").style.pointerEvents = 'all';

    if (email && password && otp && fname && lname) setSubmit(false);
    else setSubmit(true);

    if (window.sessionStorage.getItem("token") !== null) {
      console.log(window.sessionStorage.getItem("token"));
      return navigate("/~", { replace: true });
    }

    // if (ports.length !== 0) isloaded(true);

  }, [query, navigate, email, fname, lname, otp, password, options, hAirportId]);

  return (
    <section id="register-form" style={{ scrollMarginTop: "5em" }}>
      <h3 style={{ marginBottom: "7%", fontWeight: "bold" }}>
        {" "}
        Create An Account for Free{" "}
      </h3>
      <p> Please verify your email first. </p>


      <form onSubmit={submitForm}>
      {error ? (
            <p style={{ color: "red", fontWeight: "bold" }}> {error} </p>
          ) : null}
        <MDBRow className="mb-4">
          <MDBCol sm={12} md={12} lg={8}>
            <MDBInputGroup className="w-100">
              <input
                className="form-control"
                placeholder="Email address*"
                style={{ background: "transparent" }}
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBBtn outline onClick={handleOTP} color="success" type="button">
                {" "}
                Send OTP
              </MDBBtn>
            </MDBInputGroup>
          </MDBCol>
          <MDBCol sm={12} md={12} lg={4}>
            <MDBInput
              // required
              className="mb-4"
              type="number"
              id="form3Example3"
              label="otp*"
              name="otp"
              style={{ background: "transparent" }}
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              disabled={showOTP}
            />
          </MDBCol>
        </MDBRow>

        <div id="second-form">
          <MDBRow className="mb-4">
            <MDBCol sm={12} md={12} lg={6} id="fName">
              <MDBInput
                required
                id="form3Example1"
                label="First name*"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </MDBCol>
            <MDBCol sm={12} md={12} lg={6}>
              <MDBInput
                required
                id="form3Example2"
                label="Last name*"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </MDBCol>
          </MDBRow>

          <MDBInput
            required
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <MDBCheckbox
            required
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="BudgetFare can use my information to get in touch with me and to provide me with updates and other marketing information"
          />

          <Select
            className="homeland-select-register"
            blurInputOnSelect
            placeholder="Select Your Home City"
            isClearable
            menuShouldScrollIntoView
            // menuIsOpen
            options={airport}
            value={hAirportId}
            onChange={setHAirportId}
          />

          <MDBContainer
            className="homeland-card"
            style={{ position: "relative" }}
          >
            <p
              className="home-airport"
              style={{ position: "relative", marginBottom: 0, margin: "0% 5%" }}
            >
              {" "}
              <MDBIcon fas icon="home" /> {query} {" "}
            </p>
            <MDBBtn
              onClick={() => {
                setQuery(null);
                setHAirportId(null);
              }}
              tag="a"
              color="none"
              className="m-1"
              style={{
                color: "grey",
                position: "absolute",
                top: 0,
                right: "8px",
              }}
            >
              {" "}
              <MDBIcon fas icon="times" />{" "}
            </MDBBtn>
          </MDBContainer>

          <p
            id="home-w-p"
            style={{ display: "none", color: "red", fontWeight: "bold" }}
          >
            {" "}
            Please select a home city{" "}
          </p>

          <MDBBtn
            type="submit"
            color="success"
            className="mb-4 register-button"
            block
            disabled={submitDisabled}
          >
            {loader ? (
              <MDBIcon fas icon="spinner" className="login-spinner" />
            ) : (
              "Sign in"
            )}
          </MDBBtn>
        </div>
      </form>

      <div className="text-center">
        <p>
          Already have an account?{" "}
          <a href="/login" style={{ color: "green", fontWeight: "bold" }}>
            Login
          </a>
        </p>
      </div>
    </section>
  );
}

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Rform.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
import Select, { StylesConfig } from "react-select";
import { useEffect, useState } from "react";

const options = [
  { value: "Albenia", label: "Albenia Airport, Washington D.C, America" },
  { value: "Ohio", label: "Ohio Airport, Washington D.C, America" },
  { value: "Alaska", label: "Alaska Airport, Washington D.C, America" },
  { value: "Indiana", label: "Indiana Airport, Washington D.C, America" },
  { value: "NewYork", label: "NewYork Airport, Washington D.C, America" },
  { value: "Apple", label: "Apple Airport, Washington D.C, America" },
  { value: "Samsung", label: "Samsung Airport, Washington D.C, America" },
  { value: "Hawkings", label: "Hawkings Airport, Washington D.C, America" },
  { value: "Virginia", label: "Virginia Airport, Washington D.C, America" },
];

export default function RegisterForm(props) {
  const [query, setQuery] = useState(null);
  const [home, setHome] = useState("true");

  function handleCity(e) {
    if (e !== null) {
      setQuery(e.label);
      console.log(query);
      setHome(e.value);
    }
  }

  useEffect(() => {
    if (query !== null) {
      document.querySelector(".homeland-select-register").style.display =
        "none";
      document.querySelector(".homeland-card").style.display = "block";
    } else {
      document.querySelector(".homeland-select-register").style.display =
        "block";
      document.querySelector(".homeland-card").style.display = "none";
    }
  }, [query]);

  return (
    <section id="register-form">
      <h3 style={{ marginBottom: "7%", fontWeight: 'bold' }}> Create An Account for Free </h3>

      <form>
        <MDBRow className="mb-4">
          <MDBCol sm={12} md={12} lg={6} id='fName'>
            <MDBInput id="form3Example1" label="First name*" />
          </MDBCol>
          <MDBCol  sm={12} md={12} lg={6}>
            <MDBInput id="form3Example2" label="Last name*" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address*"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password*"
        />

        <MDBCheckbox
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
          options={options}
          value={'query'}
          onChange={handleCity}
        />

        <MDBCard
          className="homeland-card"
          style={{ marginBottom: "5%", paddingTop: "0%" }}
        >
          <MDBCardBody style={{ padding: "2% 4%" }}>
            <div className="d-flex  bg-light">
              <MDBContainer>
                <MDBRow className="align-items-center">
                  <MDBCol style={{ textAlign: "" }} sm="1" md={1} lg={1}>
                    <MDBIcon fas icon="home" />{" "}
                  </MDBCol>
                  <MDBCol>
                    <MDBCardText style={{ textAlign: "left" }}>
                      {query}
                      <p style={{ marginBottom: "0" }}>{home} </p>
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol style={{ textAlign: "end" }} sm="1" md={1} lg={1}>
                    <MDBBtn
                      style={{
                        color: "black",
                        padding: "50%",
                        background: "#008000ad",
                      }}
                      type="button"
                      onClick={()=>{ setQuery(null) }}
                    >
                      {" "}
                      <MDBIcon fas icon="times" />{" "}
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </MDBCardBody>
        </MDBCard>

        <MDBBtn
          type="submit"
          color="success"
          className="mb-4 register-button"
          block
        >
          Get Started
        </MDBBtn>
      </form>

      <div className="text-center">
        <p>
          Already have an account? <a href="#!">Login</a>
        </p>
      </div>
    </section>
  );
}
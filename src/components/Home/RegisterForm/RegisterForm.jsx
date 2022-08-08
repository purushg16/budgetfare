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
  MDBBtnGroup,
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

  function submitForm(e) {
    if (query === null) {
      e.preventDefault();
      document.querySelector("#home-w-p").style.display = "block";
    }
  }

  useEffect(() => {
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
  }, [query]);

  return (
    <section id="register-form" style={{ scrollMarginTop: "5em" }}>
      <h3 style={{ marginBottom: "7%", fontWeight: "bold" }}>
        {" "}
        Create An Account for Free{" "}
      </h3>

      <form onSubmit={submitForm}>
        <MDBRow className="mb-4">
          <MDBCol sm={12} md={12} lg={6} id="fName">
            <MDBInput required id="form3Example1" label="First name*" />
          </MDBCol>
          <MDBCol sm={12} md={12} lg={6}>
            <MDBInput required id="form3Example2" label="Last name*" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          required
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address*"
        />
        <MDBInput
          required
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password*"
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
          options={options}
          value={"query"}
          onChange={handleCity}
        />
        {/*  */}

        <MDBContainer
          className="homeland-card"
          style={{ position: "relative" }}
        >
          <p style={{ position: "relative", marginBottom: 0, margin: "0% 5%" }}>
            {" "}
            <MDBIcon fas icon="home" /> {query}{" "}
          </p>
          <MDBBtn
            onClick={() => {
              setQuery(null);
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

        <p id="home-w-p" style={{ display: "none" }}>
          {" "}
          Please select a home city{" "}
        </p>

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

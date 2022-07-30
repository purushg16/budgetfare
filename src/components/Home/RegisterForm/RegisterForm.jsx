import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Rform.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBInputGroup,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function RegisterForm(props) {
  return (
    <section id="register-form">
      <h3 style={{ marginBottom: "7%" }}> Create An Account for Free </h3>

      <form>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="First name*" />
          </MDBCol>
          <MDBCol>
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

        <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <MDBBtn
            style={{
              background: "white",
              boxShadow: "none",
              borderTop: "1px solid grey",
              borderLeft: "1px solid grey",
              borderBottom: "1px solid grey",
            }}
          >
            <MDBIcon fas icon="search" color="black" />{" "}
          </MDBBtn>
          <input
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
            type="Search"
            style={{
              background: "white",
              boxShadow: "none",
              borderTop: "1px solid grey",
              borderRight: "1px solid grey",
              borderBottom: "1px solid grey",
              borderLeft: "0px",
            }}
          />
        </MDBInputGroup>

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

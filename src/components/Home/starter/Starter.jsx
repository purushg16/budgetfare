import "./starter.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

function Starter() {
  return (
    <>
      <Container className="starter">
        <MDBRow>
          <MDBCol xs={12} md={12} lg={12} xxl={6}>
            <div id="starter-left">
              <h4 style={{ fontWeight: "bold", fontSize: "1.7rem" }}>
                Explore the world with amazing flight deals
              </h4>

              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "cursive",
                }}
              >
                Up to 80% off your flight prices – we send deal notifications to
                incredible destinations every week!
              </h5>

              <MDBBtn color="success" className="mx-2 s-getS" type="button">
                Get Started Now
              </MDBBtn>

              <Container
                className="starter"
                style={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                <MDBRow className="justify-content-md-center">
                  <MDBCol xs sm={4} md={3} lg="2" className="showers">
                    $450 saved per flight on average
                  </MDBCol>
                  <MDBCol xs sm={4} md={3} lg="2" className="showers border-l">
                    90 day money back guarantee
                  </MDBCol>
                  <MDBCol xs sm={4} md={3} lg="2" className="showers border-l">
                    Created by travel experts Kara and Nate
                  </MDBCol>
                </MDBRow>
              </Container>
            </div>
          </MDBCol>

          <MDBCol xs={12} md={12} lg={12} xxl={6}>
            <div id="starter-right">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
}

export default Starter;

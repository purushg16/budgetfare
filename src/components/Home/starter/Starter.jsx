import "./starter.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Starter() {
  return (
    <>
      <Container className="starter">
        <MDBRow>
          <MDBCol xs={12} md={12} lg={12} xxl={6}>
            <div id="starter-left">
              <h4>Explore the world with amazing flight deals</h4>

              <h5>
                Up to 80% off your flight prices – we send deal notifications to
                incredible destinations every week!
              </h5>

              <Button variant="success"> Get Started </Button>

              <Container className="starter">
                <MDBRow className="justify-content-md-center">
                  <MDBCol xs lg="2" className="showers">
                    $450 saved per flight on average
                  </MDBCol>
                  <MDBCol xs lg="2" className="showers border-l">
                    90 day money back guarantee
                  </MDBCol>
                  <MDBCol xs lg="2" className="showers border-l">
                    Created by travel experts Kara and Nate
                  </MDBCol>
                </MDBRow>
              </Container>
            </div>
          </MDBCol>

          <MDBCol xs={12} md={12} lg={12} xxl={6}>
            <div id="starter-right">xs=6 md=4</div>
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
}

export default Starter;

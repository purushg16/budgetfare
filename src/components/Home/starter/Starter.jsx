import "./starter.css";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import arrow from './arrow.png';
import bali from './scene.jpg';

function Starter() {
  return (
    <>
      <Container className="starter">
        <MDBRow>
          <MDBCol xs={12} md={12} lg={12} xxl={8}>
            <div id="starter-left">
            <div style={{paddingRight: '35%'}}>
              <h4 style={{ color:'black', fontSize: "2.7rem", wordSpacing:'0.2em', fontFamily:'MackinacMed', lineHeight:'1.5em' }}>
                Explore the world with amazing flight deals
              </h4>

              <h5
                style={{
                  // fontWeight: "bold",
                  fontSize: "1.3rem",
                  color:'black',
                  fontFamily: "poppins",
                  // wordSpacing: '0.5em',
                  lineHeight:'1.7em'
                }}
              >
                Up to 80% off your flight prices – we send deal notifications to
                incredible destinations every week!
              </h5>

              <div>
                <a href='#register-form'>
                <MDBBtn className="mx-2 s-getS" type="button" rounded style={{background:'#00D890', fontFamily:'poppins'}}>
                  Get Started Now
                </MDBBtn>
                </a>

                <img src={arrow} style={{width:'5em', top:'20px'}} alt="" />
              </div>
                    <Container
                // className="starter"
                style={{ fontWeight: "600", fontSize: "1rem", padding:'5% 0%', fontFamily:'MackinacMed',color:'black' }}
              >
                <MDBRow className="justify-content-md-center starter-row" style={{width:'90%'}}>
                  <MDBCol xs sm={4} md={3} lg="2" className="showers" style={{textAlign:'left' ,  paddingRight:'4%', paddingLeft:'0%'}}>
                   <span> $450 </span> saved per flight on average
                  </MDBCol>
                  <MDBCol xs sm={4} md={3} lg="2" className="showers border-l" style={{textAlign: 'center', padding:'0% 5%'}}>
                    <span> 90 day </span><br /> money back guarantee
                  </MDBCol>
                  <MDBCol xs sm={4} md={3} lg="2" className="showers border-l"  style={{textAlign:'right',  padding:'0% 5%'}}>
                    Created by travel experts <span> @formslc </span> 
                  </MDBCol>
                </MDBRow>
              </Container>
            </div>
            </div>
          </MDBCol>

          <MDBCol xs={12} md={12} lg={12} xxl={4}>
            <div id="starter-right">
              <div className="" style={{ background:'white', padding:'7%', borderRadius: '145px', height: '30em', border:'1px solid #00D890' }}>
                <img src={bali} alt='' style={{width:'100%', borderRadius:'155px',height: '-webkit-fill-available'}}/>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
}

export default Starter;

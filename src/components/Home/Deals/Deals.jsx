import "./Deals.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon
} from "mdb-react-ui-kit";

export default function Deals() {
  return (
    <section id="deals-sec">
      <h4> Get deals based on where you travel </h4>
      <div className="deals-col">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md">
              <MDBCard background="default" className="text-white mb-3">
                <MDBCardHeader style={{ fontWeight: '900', color: '#00b74a', fontSize: '1.5rem' }}> Domestic </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle style={{ fontWeight: '900', color: '#00b74a', fontSize: '2rem' }} >$0</MDBCardTitle>
                  <MDBCardText>
                  <p className='pros'> <span> <MDBIcon fas icon="check" /> </span> Domestic Economy Deal Notifications </p>
                    <p className='pros no'> <span> <MDBIcon fas icon="times" /> </span> International Economy Deal Notifications </p>
                    <p className='pros no'> <span> <MDBIcon fas icon="times" /> </span>International Business Deal Notifications </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText style={{ background: "#00b74a", borderRadius: '0px 0px 7px 7px' }}>
                  Sign Up Now!
                </MDBCardText>
              </MDBCard>
            </MDBCol>

            <MDBCol size="md">
              <MDBCard background="default" className="text-white mb-3">
                <MDBCardHeader style={{ fontWeight: '900', color: '#00b74a', fontSize: '1.5rem' }}> Global </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle style={{ fontWeight: '900', color: '#00b74a', fontSize: '2rem' }} >$99</MDBCardTitle>
                  <MDBCardText>
                  <p className='pros'> <span> <MDBIcon fas icon="check" /> </span> Domestic Economy Deal Notifications </p>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span> International Economy Deal Notifications </p>
                    <p className='pros no'> <span> <MDBIcon fas icon="times" /> </span> International Business Deal Notifications </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText style={{ background: "#00b74a",  borderRadius: '0px 0px 7px 7px' }}>
                  Sign Up Now!
                </MDBCardText>
              </MDBCard>
            </MDBCol>

            <MDBCol size="md">
              <MDBCard background="default" className="text-white mb-3">
                <MDBCardHeader style={{ fontWeight: '900', color: '#00b74a', fontSize: '1.5rem' }}>Global Pro</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle style={{ fontWeight: '900', color: '#00b74a', fontSize: '2rem' }} >$299</MDBCardTitle>
                  <MDBCardText>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span> Domestic Economy Deal Notifications </p>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span> International Economy Deal Notifications </p>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span>International Business Deal Notifications </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText style={{ background: "#00b74a", borderRadius: '0px 0px 7px 7px' }}>
                  Sign Up Now!
                </MDBCardText>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <p> All plans include our no questions asked, 90 day refund policy </p>
        </MDBContainer>
      </div>
    </section>
  );
}

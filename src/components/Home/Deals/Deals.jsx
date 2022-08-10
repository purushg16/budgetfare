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
      <h3 style={{ marginBottom: "7%", fontWeight: 'bold' }}> Get deals based on where you travel </h3>
      <div className="deals-col">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md">
              <MDBCard background="default" className="text-white mb-3 h-100">
                <MDBCardHeader style={{ fontWeight: '900', background: '#00b74a', color:'white', fontSize: '1.5rem' }}> Domestic </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle className="title-amount" style={{ fontWeight: '900', color: '#00b74a', fontSize: '2rem' }} >$0</MDBCardTitle>
                  <MDBCardText>
                  <p className='pros'> <span> <MDBIcon fas icon="check" /> </span> Domestic Economy Deal Notifications </p>
                    <p className='pros no'> <span> <MDBIcon fas icon="times" /> </span> International Economy Deal Notifications </p>
                    <p className='pros no'> <span> <MDBIcon fas icon="times" /> </span>International Business Deal Notifications </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText style={{padding:'3%', background: "#00b74a", color:'white', borderRadius: '0px 0px 7px 7px' }}>
                  Sign Up Now!
                </MDBCardText>
              </MDBCard>
            </MDBCol>

            <MDBCol size="md">
              <MDBCard background="default" className="text-white mb-3 h-100">
                <MDBCardHeader  className="global-h" style={{ fontWeight: '900', fontSize: '1.5rem', background: '#00b74a', color:'white' }}> Global </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle  className="g-title-amount" style={{ fontWeight: '900', color: '#00b74a', fontSize: '2rem' }} >$99</MDBCardTitle>
                  <MDBCardText>
                  <p className='pros'> <span> <MDBIcon fas icon="check" /> </span> Domestic Economy Deal Notifications </p>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span> International Economy Deal Notifications </p>
                    <p className='pros no'> <span> <MDBIcon fas icon="times" /> </span> International Business Deal Notifications </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText  className="global-h" style={{padding:'3%', background: "#00b74a", color:'white',  borderRadius: '0px 0px 7px 7px' }}>
                  Sign Up Now!
                </MDBCardText>
              </MDBCard>
            </MDBCol>

            <MDBCol size="md">
              <MDBCard background="default" className="text-white mb-3 h-100">
                <MDBCardHeader className="pro-h" style={{ fontWeight: '900', background: '#00b74a', color:'white', fontSize: '1.5rem', whiteSpace: 'nowrap' }}>Global Pro</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle  className="p-title-amount" style={{ fontWeight: '900', color: '#00b74a', fontSize: '2rem' }} >$299</MDBCardTitle>
                  <MDBCardText>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span> Domestic Economy Deal Notifications </p>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span> International Economy Deal Notifications </p>
                    <p className='pros'><span> <MDBIcon fas icon="check" /> </span>International Business Deal Notifications </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText className="pro-h" style={{padding:'3%', background: "#00b74a",  color:'white', borderRadius: '0px 0px 7px 7px' }}>
                  Sign Up Now!
                </MDBCardText>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <p style={{ marginTop: '3%' }}> All plans include our no questions asked, 90 day refund policy </p>
        </MDBContainer>
      </div>
    </section>
  );
}

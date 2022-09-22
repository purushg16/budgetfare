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
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";

export default function Deals() {
  return (
    <section id="deals-sec">
      <h3 style={{ marginBottom: "3%", fontWeight: 'bold', fontFamily:'Mackinac', color:'black' }}> Get deals based on where you travel </h3>
      <div className="deals-col">
          <MDBRow>
            <MDBCol md={12} sm={12} lg={4}>
             
              <div className="deal-card h-100">

                  <div className="dc-header">
                  <h4 style={{ fontFamily:'poppins', fontWeight:'bold', color:'black' }}> Domestic Plan </h4>
                  <h4 style={{ fontFamily:'poppins', fontWeight:'bold', color:'#2C625C', fontSize:'2.7em' }}> FREE </h4>
                  </div>

                  <div className="dc-desc">
                    <div style={{ fontWeight:'bold', fontFamily:'poppins', textAlign:'left',fontSize:'0.8em' }}>
                      <p className="avlb"> <MDBIcon fas icon="check" style={{ color:'green'}}/> Domestic Economy Deal Notifications </p>
                      <p className="n-avlb"> <MDBIcon fas icon="exclamation-circle" style={{ color:'grey'}}/> International Economy Deal Notifications  </p>
                      <p className="n-avlb"> <MDBIcon fas icon="exclamation-circle" style={{ color:'grey'}}/> International Business Deal Notifications </p>
                    </div>
                  </div>

                  <div className="dc-footer">
                    <MDBBtn block id="dc-card-btn"> Get started now! </MDBBtn>
                  </div>

              </div>


            </MDBCol>

            <MDBCol md={12} sm={12} lg={4}>
            <div className="deal-card h-100">

                <div className="dc-header">
                <h4 style={{ fontFamily:'poppins', fontWeight:'bold', color:'black' }}> Global Plan </h4>
                <h4 style={{ fontFamily:'poppins', fontWeight:'bold', color:'#2C625C', fontSize:'2.7em' }}> $49 </h4>
                <p style={{ marginBottom:0, fontFamily:'poppins', color:'grey', fontWeight:'bold', fontSize:'0.9em' }}> Billed anually </p>
                </div>

                <div className="dc-desc">
                  <div style={{ fontWeight:'bold', fontFamily:'poppins', textAlign:'left', fontSize:'0.8em' }}>
                    <p className="avlb"> <MDBIcon fas icon="check" style={{ color:'green'}}/> Domestic Economy Deal Notifications </p>
                    <p className="avlb"> <MDBIcon fas icon="check" style={{ color:'grey'}}/> International Economy Deal Notifications  </p>
                    <p className="n-avlb"> <MDBIcon fas icon="exclamation-circle" style={{ color:'grey'}}/> International Business Deal Notifications </p>
                  </div>
                </div>

                <div className="dc-footer">
                  <MDBBtn block id="dc-card-btn"> Get started now! </MDBBtn>
                </div>

                </div>

            </MDBCol>

            <MDBCol md={12} sm={12} lg={4}>
            <div className="deal-card h-100">

                <div className="dc-header">
                <h4 style={{ fontFamily:'poppins', fontWeight:'bold', color:'black' }}> Global Pro Plan </h4>
                <h4 style={{ fontFamily:'poppins', fontWeight:'bold', color:'#2C625C', fontSize:'2.7em' }}> $99 </h4>
                <p style={{ marginBottom:0, fontFamily:'poppins', color:'grey', fontWeight:'bold', fontSize:'0.9em' }}> Billed anually </p>
                </div>

                <div className="dc-desc">
                  <div style={{ fontWeight:'bold', fontFamily:'poppins', textAlign:'left',fontSize:'0.8em'  }}>
                    <p className="avlb"> <MDBIcon fas icon="check" style={{ color:'green'}}/> Domestic Economy Deal Notifications </p>
                    <p className="avlb"> <MDBIcon fas icon="check" style={{ color:'grey'}}/> International Economy Deal Notifications  </p>
                    <p className="avlb"> <MDBIcon fas icon="check" style={{ color:'grey'}}/> International Business Deal Notifications </p>
                  </div>
                </div>

                <div className="dc-footer">
                  <MDBBtn block id="dc-card-btn"> Get started now! </MDBBtn>
                </div>

                </div>

            </MDBCol>
          </MDBRow>
          <p style={{ marginTop: '3%', fontFamily:'poppins' }}> All plans include our <span style={{color:"#2C625C", fontWeight:'600'}}> no questions asked, 90 day refund policy </span> </p>
      </div>
    </section>
  );
}

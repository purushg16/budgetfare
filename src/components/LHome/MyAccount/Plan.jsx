import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import "./Plan.css";

export default function AccountPlans() {
  return (
    <>
      <h4 style={{ textAlign: "left" }}>Plan & Billing</h4>
      <p style={{ textAlign: "left", marginBottom: "5%" }}>
        {" "}
        Update your BudgetFare plan and billing information{" "}
      </p>

      <div className="plan-card">
        <MDBCard style={{ textAlign: "left" }}>
          <MDBCardHeader> Current Plan </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle> Domestic Plan </MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <div style={{textAlign: 'right'}}>
            <MDBBtn href="#all-plans" color="success">Upgrade Plan</MDBBtn>
            </div>
          </MDBCardBody>
          <MDBCardFooter className="text-muted"> Validity: 1year </MDBCardFooter>

        </MDBCard>
        {/* <div>
          You're getting personalized Economy class flight deals to domestic
          destinations.
        </div> */}
      </div>

      <h4 style={{ textAlign: "left" }}> Available Plans </h4>
      
      <div id="all-plans">
      <MDBRow>
        <MDBCol sm="6">
          <MDBCard style={{ textAlign: "left" }}>
            {/* <MDBCardHeader> Current Plan </MDBCardHeader> */}
            <MDBCardBody>
              <MDBCardTitle>Global Plan </MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <div style={{textAlign: 'right'}}>
                <MDBBtn href="#" color="success">Upgrade</MDBBtn>
              </div>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">
               Validity: 1year  
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6" className="margin-top-card">
          <MDBCard style={{ textAlign: "left" }}>
            {/* <MDBCardHeader> Current Plan </MDBCardHeader> */}
            <MDBCardBody>
              <MDBCardTitle> Global Pro Plan </MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <div style={{textAlign: 'right'}}>
                <MDBBtn href="#" color="success">Upgrade</MDBBtn>
              </div>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
    </>
  );
}

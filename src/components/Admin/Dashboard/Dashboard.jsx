import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import AddAirport from "./AddAirport";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <MDBContainer style={{ padding: "5% 3%" }}>
        <MDBRow>
          <MDBCol md="4">
            <MDBListGroup>
              <MDBListGroupItem> MENU </MDBListGroupItem>
              <MDBListGroupItem style={{ background: "#00b74a" }}>
                {" "}
                <MDBBtn
                  className="dash-btn"
                  style={{ boxShadow: "none" }}
                  block
                  color="success"
                >
                  {" "}
                  ADD AIRPORT{" "}
                </MDBBtn>{" "}
              </MDBListGroupItem>

              <MDBListGroupItem style={{ background: "#00b74a" }}>
                {" "}
                <MDBBtn
                  className="dash-btn"
                  style={{ boxShadow: "none" }}
                  block
                  color="success"
                >
                  {" "}
                  DELETE AIRPORT{" "}
                </MDBBtn>{" "}
              </MDBListGroupItem>
              <MDBListGroupItem style={{ background: "#00b74a" }}>
                {" "}
                <MDBBtn
                  className="dash-btn"
                  style={{ boxShadow: "none" }}
                  block
                  color="success"
                >
                  {" "}
                  ADD DEALS{" "}
                </MDBBtn>{" "}
              </MDBListGroupItem>
              <MDBListGroupItem style={{ background: "#00b74a" }}>
                {" "}
                <MDBBtn
                  className="dash-btn"
                  style={{ boxShadow: "none" }}
                  block
                  color="success"
                >
                  {" "}
                  DELETE DEALS{" "}
                </MDBBtn>{" "}
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
          <MDBCol md="8">
            <MDBContainer className="dash-right">
              <AddAirport />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
